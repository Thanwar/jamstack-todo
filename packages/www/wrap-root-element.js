const React = require('react');
const { ThemeProvider } = require('theme-ui');
const { Deep } = require('@theme-ui/presets');

module.exports = ({ element }) => (
  <ThemeProvider theme={Deep}>{element}</ThemeProvider>
);