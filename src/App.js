import { CssBaseline } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import React from "react";
import GlobalStyle from "./commons/styles/global-style";
import Main from "./containers/Main";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </StylesProvider>
  );
}

export default App;
