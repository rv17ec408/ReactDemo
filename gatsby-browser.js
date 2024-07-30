/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./src/gatsby-theme-material-ui-top-layout/theme";
import { CssBaseline } from "@mui/material";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      {element}
    </ThemeProvider>
  );
};
