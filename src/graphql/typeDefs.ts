import gql from "graphql-tag";

export const GET_TODOS = gql`
  query todos {
    todos {
      id
      title
      isDone
    }
  }
`;

export const ADD_TODO = gql`
  mutation addTodo($title: String!) {
    addTodo(title: $title) {
      id
      title
      isDone
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation updateTodo($id: ID!, $title: String!) {
    updateTodo(id: $id, title: $title) {
      id
      title
      isDone
    }
  }
`;

export const DELETE_TODO = gql`
  mutation deleteTodo($id: ID!) {
    deleteTodo(id: $id) {
      id
      title
      isDone
    }
  }
`;

export const TOGGLE_TODO = gql`
  mutation toggleTodo($id: ID!) {
    toggleTodo(id: $id) {
      id
      title
      isDone
    }
  }
`;
