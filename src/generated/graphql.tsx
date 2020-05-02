import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
   __typename?: 'Query';
  users: Array<User>;
  todos: Array<Todo>;
  me?: Maybe<User>;
};

export type User = {
   __typename?: 'User';
  provider: Providers;
  socialId: Scalars['ID'];
  id: Scalars['ID'];
  name: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export enum Providers {
  Google = 'google',
  Github = 'github'
}

export type Todo = {
   __typename?: 'Todo';
  id: Scalars['ID'];
  title: Scalars['String'];
  isDone?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addTodo: Todo;
  updateTodo: Todo;
  deleteTodo: Todo;
  toggleTodo: Todo;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationAddTodoArgs = {
  title: Scalars['String'];
};


export type MutationUpdateTodoArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationToggleTodoArgs = {
  id: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type TodosQueryVariables = {};


export type TodosQuery = (
  { __typename?: 'Query' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  )> }
);

export type AddTodoMutationVariables = {
  title: Scalars['String'];
};


export type AddTodoMutation = (
  { __typename?: 'Mutation' }
  & { addTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  ) }
);

export type UpdateTodoMutationVariables = {
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type UpdateTodoMutation = (
  { __typename?: 'Mutation' }
  & { updateTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  ) }
);

export type DeleteTodoMutationVariables = {
  id: Scalars['ID'];
};


export type DeleteTodoMutation = (
  { __typename?: 'Mutation' }
  & { deleteTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  ) }
);

export type ToggleTodoMutationVariables = {
  id: Scalars['ID'];
};


export type ToggleTodoMutation = (
  { __typename?: 'Mutation' }
  & { toggleTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title' | 'isDone'>
  ) }
);


export const TodosDocument = gql`
    query todos {
  todos {
    id
    title
    isDone
  }
}
    `;

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *   },
 * });
 */
export function useTodosQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<TodosQuery, TodosQueryVariables>) {
        return ApolloReactHooks.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
      }
export function useTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, baseOptions);
        }
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = ApolloReactCommon.QueryResult<TodosQuery, TodosQueryVariables>;
export const AddTodoDocument = gql`
    mutation addTodo($title: String!) {
  addTodo(title: $title) {
    id
    title
    isDone
  }
}
    `;
export type AddTodoMutationFn = ApolloReactCommon.MutationFunction<AddTodoMutation, AddTodoMutationVariables>;

/**
 * __useAddTodoMutation__
 *
 * To run a mutation, you first call `useAddTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddTodoMutation, AddTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<AddTodoMutation, AddTodoMutationVariables>(AddTodoDocument, baseOptions);
      }
export type AddTodoMutationHookResult = ReturnType<typeof useAddTodoMutation>;
export type AddTodoMutationResult = ApolloReactCommon.MutationResult<AddTodoMutation>;
export type AddTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<AddTodoMutation, AddTodoMutationVariables>;
export const UpdateTodoDocument = gql`
    mutation updateTodo($id: ID!, $title: String!) {
  updateTodo(id: $id, title: $title) {
    id
    title
    isDone
  }
}
    `;
export type UpdateTodoMutationFn = ApolloReactCommon.MutationFunction<UpdateTodoMutation, UpdateTodoMutationVariables>;

/**
 * __useUpdateTodoMutation__
 *
 * To run a mutation, you first call `useUpdateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodoMutation, { data, loading, error }] = useUpdateTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodoMutation, UpdateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateTodoMutation, UpdateTodoMutationVariables>(UpdateTodoDocument, baseOptions);
      }
export type UpdateTodoMutationHookResult = ReturnType<typeof useUpdateTodoMutation>;
export type UpdateTodoMutationResult = ApolloReactCommon.MutationResult<UpdateTodoMutation>;
export type UpdateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateTodoMutation, UpdateTodoMutationVariables>;
export const DeleteTodoDocument = gql`
    mutation deleteTodo($id: ID!) {
  deleteTodo(id: $id) {
    id
    title
    isDone
  }
}
    `;
export type DeleteTodoMutationFn = ApolloReactCommon.MutationFunction<DeleteTodoMutation, DeleteTodoMutationVariables>;

/**
 * __useDeleteTodoMutation__
 *
 * To run a mutation, you first call `useDeleteTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTodoMutation, { data, loading, error }] = useDeleteTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteTodoMutation, DeleteTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<DeleteTodoMutation, DeleteTodoMutationVariables>(DeleteTodoDocument, baseOptions);
      }
export type DeleteTodoMutationHookResult = ReturnType<typeof useDeleteTodoMutation>;
export type DeleteTodoMutationResult = ApolloReactCommon.MutationResult<DeleteTodoMutation>;
export type DeleteTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteTodoMutation, DeleteTodoMutationVariables>;
export const ToggleTodoDocument = gql`
    mutation toggleTodo($id: ID!) {
  toggleTodo(id: $id) {
    id
    title
    isDone
  }
}
    `;
export type ToggleTodoMutationFn = ApolloReactCommon.MutationFunction<ToggleTodoMutation, ToggleTodoMutationVariables>;

/**
 * __useToggleTodoMutation__
 *
 * To run a mutation, you first call `useToggleTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleTodoMutation, { data, loading, error }] = useToggleTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<ToggleTodoMutation, ToggleTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<ToggleTodoMutation, ToggleTodoMutationVariables>(ToggleTodoDocument, baseOptions);
      }
export type ToggleTodoMutationHookResult = ReturnType<typeof useToggleTodoMutation>;
export type ToggleTodoMutationResult = ApolloReactCommon.MutationResult<ToggleTodoMutation>;
export type ToggleTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<ToggleTodoMutation, ToggleTodoMutationVariables>;