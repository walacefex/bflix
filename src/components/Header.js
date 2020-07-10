import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  noLink:{
    textDecoration:'none',
    color:'#ffffff'
  },
}));


const Header = () => {

  const classes = useStyles();
  return (
<header className={classes.root}>
    <AppBar position="static">
       <Link to='/' className={classes.noLink} color="inherit">
        <Typography variant="h3" color="inherit" align="center">
          BFLIX
        </Typography>
        </Link>
    </AppBar>    
    </header>
  );
};

export default Header;
