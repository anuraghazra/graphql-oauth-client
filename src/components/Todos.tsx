import React, { useState } from "react";

import TodoItem from "./TodoItem";
import { GET_TODOS } from "../graphql/typeDefs";
import { useAddTodoMutation, TodosQuery, Todo } from "../generated/graphql";

interface ITodos {
  todos?: Todo[] | undefined;
}
const Todos: React.FC<ITodos> = ({ todos }) => {
  const [editingId, setEditingId] = useState<string>("");
  const [form, setForm] = useState<{ todo_name: string }>({ todo_name: "" });

  const [addTodo, { error: addTodoError }] = useAddTodoMutation({
    update: (cache, { data: addTodo = {} }) => {
      let todos = cache.readQuery<TodosQuery>({ query: GET_TODOS });
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todos: [todos, addTodo],
        },
      });
    },
  });

  const handleChange = (e: any) => {
    (setForm as any)({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
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
        {todos?.map((todo: Todo) => {
          return (
            <TodoItem
              key={todo.id}
              editingId={editingId}
              setEditing={setEditingId}
              title={todo.title}
              isDone={todo.isDone || false}
              id={todo.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Todos;
