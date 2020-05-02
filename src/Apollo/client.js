import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "/graphql",
  credentials: "include",
  fetchOptions: {
    credentials: "include",
  },
});

export default client;
