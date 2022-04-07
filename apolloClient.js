import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckwqkllh52wgl01xm824qgoly/master",
  cache: new InMemoryCache(),
});

export default client;