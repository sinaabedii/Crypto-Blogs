import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm1zuoy4o08zp08w7lrhpj8li/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
