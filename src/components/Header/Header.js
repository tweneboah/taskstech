import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import HighlightIcon from "@material-ui/icons/Highlight";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typographyStyles: {
    flex: 1,
    marginRight: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography className={classes.typographyStyles}>TASKSTECH</Typography>
        <HighlightIcon />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
