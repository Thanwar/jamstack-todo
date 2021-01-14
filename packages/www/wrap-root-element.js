const React = require("react");
const { ThemeProvider } = require("theme-ui");
const { deep } = require("@theme-ui/presets");
const { Provider } = require("./netlifyIdentityContext");

const {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} = require("@apollo/client");

const client = new ApolloClient({
  uri: "https://thanwar-todos.netlify.app/.netlify/functions/graphql",
  cache: new InMemoryCache(),
});

const newTheme = {
  ...deep,
  sizes: { container: 1024 },
};

module.exports = ({ element }) => (
  <Provider>
    <ApolloProvider client={client}>
      <ThemeProvider theme={newTheme}>{element}</ThemeProvider>
    </ApolloProvider>
  </Provider>
);
