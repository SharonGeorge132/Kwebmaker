import '../app/globals.css'; // Import global styles
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
