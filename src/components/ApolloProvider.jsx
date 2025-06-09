

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';
const backendUrl = import.meta.env.VITE_BACKEND_URL;
const client = new ApolloClient({
  uri: backendUrl,
  cache: new InMemoryCache(),
});

const ApolloProvider = ({ children }) => {
  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
