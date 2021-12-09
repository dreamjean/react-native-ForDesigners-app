import { ApolloClient, InMemoryCache } from "@apollo/client";

import keys from "./keys";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://graphql.contentful.com/content/v1/spaces/${keys.CONTENTFUL_SPACE_ID}`,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer ${keys.CDA_TOKEN}`,
  },
});
