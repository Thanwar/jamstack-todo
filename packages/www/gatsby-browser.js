const React = require("react");
const wrapRootElement = require("./wrap-root-element");
const { setContext } = require("apollo-link-context");

const {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
  } = require("@apollo/client");
  


  const authLink = setContext((_, { headers }) => {
    const user = netlifyIdentity.currentUser();
    const token = user.token.access_token;
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });



  const httpLink = new HttpLink({
    uri: "https://thanwar-todos.netlify.app/.netlify/functions/graphql"
  });

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
  });







exports.wrapRootElement = ({ element }) => {
    return (
      <ApolloProvider client={client}>
        {wrapRootElement({ element })}
      </ApolloProvider>
    );
  };