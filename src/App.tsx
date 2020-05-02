import React from "react";
import "./styles/App.css";

import Todos from "./components/Todos";
import { initOAuthWindow } from "./utils";
import { useTodosQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { loading, error, data, refetch } = useTodosQuery();

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
};

export default App;
