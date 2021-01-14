const React = require("react");
const wrapRootElement = require("./wrap-root-element");

const {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
  } = require("@apollo/client");
  
  const client = new ApolloClient({
    uri: "https://thanwar-todos.netlify.app/.netlify/functions/graphql",
    cache: new InMemoryCache(),
  });

exports.wrapRootElement = ({ element }) => {
    return (
      <ApolloProvider client={client}>
        {wrapRootElement({ element })}
      </ApolloProvider>
    );
  };