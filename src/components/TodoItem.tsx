import React from "react";
import { GET_TODOS } from "../graphql/typeDefs";

import {
  Todo,
  TodosQuery,
  useDeleteTodoMutation,
  useToggleTodoMutation,
  useUpdateTodoMutation,
} from "../generated/graphql";

interface ITodoItem {
  title: string;
  id: string;
  isDone: boolean;
  setEditing: React.Dispatch<string>;
  editingId: string;
}
const TodoItem: React.FC<ITodoItem> = ({
  title,
  id,
  isDone,
  setEditing,
  editingId,
}) => {
  const [deleteTodoMutation] = useDeleteTodoMutation({
    update(cache, { data }) {
      try {
        let query = cache.readQuery<TodosQuery>({ query: GET_TODOS });
        cache.writeQuery({
          query: GET_TODOS,
          data: {
            todos: query?.todos.filter(
              (todo: Todo) => todo.id !== data?.deleteTodo.id
            ),
          },
        });
      } catch (err) {
        console.log(err);
      }
    },
  });
  const [toggleTodoMutation] = useToggleTodoMutation();
  const [updateTodoMutation] = useUpdateTodoMutation({
    onCompleted: () => setEditing(""),
  });

  const handleTodoUpdate = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateTodoMutation({
        variables: {
          title: (e.target as HTMLInputElement).value as any,
          id: editingId,
        },
      });
    }
  };
  const handleEditing = (todoId: string) => () => {
    setEditing(todoId);
  };

  return (
    <li
      onDoubleClick={() => toggleTodoMutation({ variables: { id: id } })}
      key={id}
      id={id}
    >
      {id !== editingId ? (
        <>
          <span>
            {title} | {isDone ? "done" : "pending"}
          </span>
          &nbsp;
          <button onClick={() => deleteTodoMutation({ variables: { id: id } })}>
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
