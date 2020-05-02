import React from "react";
import { useQuery } from "@apollo/react-hooks";
import "./App.css";

import { GET_TODOS } from "./graphql/typeDefs";
import { initOAuthWindow } from "./utils";
import Todos from "./components/Todos";

function App() {
  const { loading, error, data, refetch } = useQuery(GET_TODOS);

  return (
    <div className="App">
      <button onClick={initOAuthWindow("github", refetch)}>
        Continue with Github
      </button>
      <button onClick={initOAuthWindow("google", refetch)}>
        Continue with Google
      </button>

      <h2>GraphQL OAuth</h2>

      {loading && <p>Loading</p>}
      {error && <p>{error.message}</p>}

      <Todos todos={data?.todos} />
    </div>
  );
}

export default App;
