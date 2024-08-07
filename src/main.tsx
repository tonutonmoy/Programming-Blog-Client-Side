import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Router/router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getUserInfo } from "./Utils/auth.helper";


const httpLink = createHttpLink({
    // uri: "http://localhost:4000/graphql",
  uri: "https://programming-blog-server-side-production.up.railway.app/graphql", 
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getUserInfo();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token || "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

import { Provider } from "react-redux";
import { store } from "./Redux/store";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);
