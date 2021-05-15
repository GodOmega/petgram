import React from "react";
import ReactDOM from "react-dom";
import fetch from "node-fetch";
import { setContext } from "apollo-link-context";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import App from "./routes/App";

const httpLink = createHttpLink({
  uri: "https://petgram-server-clgg.vercel.app/graphql",
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
  onError: (error) => {
    const { networkError } = error;
    if (networkError && networkError.result.code === "invalid_token") {
      sessionStorage.removeItem("token");
      window.location.href = "/user";
    }
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
