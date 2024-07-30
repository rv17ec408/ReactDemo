import React, { useEffect, useState } from "react";
import "../style.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import MaterialUiTheme from "../components/HomePage/materialUiTheme/MaterialUiTheme";
import { red } from "@mui/material";
import { FragmentDemo } from "../Features/FragmentDemo";
import { App } from "../Features/PureFunctionalComponentDemo";
import { UseRefDemo } from "../Features/UseRefDemo";
import { ForwardRefDemo } from "../Features/ForwardRefDemo";

const IndexPage = () => {
  return (
    <div>


      {/* <MaterialUiTheme /> */}
      {/* <FragmentDemo /> */}
      {/* <App /> */}
      <UseRefDemo />
      {/* <ForwardRefDemo /> */}
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home</title>;
