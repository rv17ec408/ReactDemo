import { useTheme } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import React from "react";

const MaterialUiTheme = () => {
  const theme = useTheme();

  return (
    <div style={{ height: "900px" }}>
      <Typography variant="line">H1 Text font</Typography>
      <Button color="primary">h3 font</Button>
      <div>
        <button style={{ color: theme.palette.primary.main }}> Text</button>
      </div>
    </div>
  );
};

export default MaterialUiTheme;
