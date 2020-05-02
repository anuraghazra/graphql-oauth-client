import React from "react";
import { useMutation } from "@apollo/react-hooks";
import {
  GET_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
  TOGGLE_TODO,
} from "../graphql/typeDefs";

const updateDeleteTodo = (cache, { data: { deleteTodo } }) => {
  let data = cache.readQuery({ query: GET_TODOS });
  cache.writeQuery({
    query: GET_TODOS,
    data: {
      ...data,
      todos: data.todos.filter((todo) => todo.id !== deleteTodo.id),
    },
  });
};

const TodoItem = ({ title, id, isDone, setEditing, editingId }) => {
  const [deleteTodo] = useMutation(DELETE_TODO, { update: updateDeleteTodo });
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  const [updateTodo] = useMutation(UPDATE_TODO, {
    onCompleted: () => setEditing(""),
  });

  const handleTodoUpdate = (e) => {
    if (e.key === "Enter") {
      updateTodo({ variables: { title: e.target.value, id: editingId } });
    }
  };
  const handleEditing = (todoId) => () => {
    setEditing(todoId);
  };

  return (
    <li
      onDoubleClick={() => toggleTodo({ variables: { id: id } })}
      key={id}
      id={id}
    >
      {id !== editingId ? (
        <>
          <span>
            {title} | {isDone ? "done" : "pending"}
          </span>
          &nbsp;
          <button onClick={() => deleteTodo({ variables: { id: id } })}>
            delete
          </button>
          <button onClick={handleEditing(id)}>edit</button>
        </>
      ) : (
        <label>
          <input
            autoFocus
            onKeyUp={handleTodoUpdate}
            defaultValue={title}
            name="name_editing"
          />
        </label>
      )}
    </li>
  );
};

export default TodoItem;
