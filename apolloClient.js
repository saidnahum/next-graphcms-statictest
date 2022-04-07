import { ApolloClient, InMemoryCache } from "@apollo/client";
import { bootstrap as bootstrapGlobalAgent } from 'global-agent';

bootstrapGlobalAgent();

const client = new ApolloClient({
  uri: "https://api-us-east-1.graphcms.com/v2/ckwqkllh52wgl01xm824qgoly/master",
  cache: new InMemoryCache(),
});

export default client;