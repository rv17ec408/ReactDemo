import { Box, styled, Grid, Theme } from "@mui/material";
import React from "react";

function DifferentStyles() {
  const inlineStyle = {
    fontSize: "2rem",
    backgroundColor: "white",
    border: "5px solid orange",
    width: 200,
    height: 100,
    paddingLeft: "16px",
    marginBottom: "16px",
  };

  const sxStyle = {
    fontSize: "2rem",
    backgroundColor: "white",
    border: "5px solid orange",
    width: 200,
    height: 100,
    paddingLeft: 2, // value is theme.spacing(2),
    color: ["secondary.main", "primary.main"], // secondary.main = theme.pallete.secondary.main and here we applied breakpoint [sm ? secondary.main : primary.main ]
    "&:hover": {
      borderColor: "blue",
    },
    transition: (theme) => theme.transitions.create(["border-color"]),
    "&.MuiBox-root": {
      backgroundColor: "#7ba0b7",
    },
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    // if we need to use any theme style use via theme object. directly specifying the properties won't work
    // paddingLeft: 2 here value is in px, not theme.spacing(2)
    fontSize: "2rem",
    backgroundColor: "white",
    border: "5px solid orange",
    width: 200,
    height: 100,
    paddingLeft: theme.spacing(2),
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.secondary.main,
    },
    "&:hover": {
      borderColor: "blue",
    },
    transition: theme.transitions.create(["border-color"]),
    marginBottom: theme.spacing(2),
    "&.MuiBox-root": {
      //&.className,  when style not applied try with without space after & "&.MuiBox-root"
      backgroundColor: "#4d9b81",
    },
    /*------Classes Selector rules----------- */
    // & root selector {.MuiBox-root}
    "&": {},
    // && also refers to root selector of Box  But with higher Css Specificity{.MuiBox-root.?}
    // Replacement of !important, is !important not allowed in Mui?
    // TODO try this?
    "&&": {},
    // child Selector {.MuiBox-root, .ChildSelector }
    "&.ChildSelector": {
      "&.NestedChildSelector": {
        // & points to current selctor {.MuiBox-root, .ChildSelector}
        // Nested child selector {.MuiBox-root, .ChildSelector .NestedChildSelector}
      },
      "&.ChildSelector .NestedChildSelector": {
        // Nested child selector {.MuiBox-root, .ChildSelector .NestedChildSelector}
      },
    },
  }));
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          fontSize="2rem"
          bgcolor="white"
          border="solid 5px orange"
          width={200}
          height={100}
          paddingLeft={2}
          marginBottom={2}
        >
          Direct Style
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box style={inlineStyle}>Inline Style</Box>
      </Grid>
      <Grid item xs={12}>
        <StyledBox>Styled component</StyledBox>
      </Grid>
      <Grid item xs={12}>
        <Box sx={sxStyle}>Sx Style</Box>
      </Grid>
    </Grid>
  );
}
/*
css units rem
*/

export default DifferentStyles;
