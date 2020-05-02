import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";

import TodoItem from "./TodoItem";
import { GET_TODOS, ADD_TODO } from "../graphql/typeDefs";

const updateAddTodo = (cache, { data: { addTodo } }) => {
  let data = cache.readQuery({ query: GET_TODOS });
  cache.writeQuery({
    query: GET_TODOS,
    data: {
      ...data,
      todos: [...data.todos, addTodo],
    },
  });
};

const Todos = ({ todos }) => {
  const [editingId, setEditingId] = useState("");
  const [form, setForm] = useState({ todo_name: "" });

  const [addTodo, { error: addTodoError }] = useMutation(ADD_TODO, {
    update: updateAddTodo,
  });

  const handleChange = (e) => {
    setForm({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ variables: { title: form.todo_name } });
    setForm({ todo_name: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            onChange={handleChange}
            value={form.todo_name}
            type="text"
            name="todo_name"
          />
        </label>
        <button type="submit">add todo</button>
      </form>

      {addTodoError && <p>{addTodoError.message}</p>}

      <ul>
        {todos?.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              editingId={editingId}
              setEditing={setEditingId}
              title={todo.title}
              isDone={todo.isDone}
              id={todo.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
