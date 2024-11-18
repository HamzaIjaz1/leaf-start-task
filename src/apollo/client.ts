import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { removeTypenameFromVariables } from "@apollo/client/link/remove-typename";

// HTTP Link
const httpLink = createHttpLink({
  uri: "http://testing-leaf-server-env.eba-3fyupvsp.us-east-1.elasticbeanstalk.com/graphql",
  credentials: "include",
});

// Remove `__typename` Link
const removeTypenameLink = removeTypenameFromVariables();

// Apollo Client
const client = new ApolloClient({
  link: removeTypenameLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});

export default client;
