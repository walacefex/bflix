import React, { useState } from "react";
import { makeStyles, Paper, IconButton, InputBase, Button } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  container:{
    display:'flex',
    width:'100%',
    height:'50vh',
    justifyContent: 'center',
    alignItems: 'center',
  }
}));

const Search = ({ search }) => {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = event => {
    setSearchValue(event.target.value);
  };


  const callSearchFunction = event => {
    event.preventDefault();
    search(searchValue);
    console.log(searchValue)
  };

  return (

    <div className={classes.container}>
      <Paper component="form" className={classes.root}>
       <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Procure seu Filme"
        inputProps={{ 'aria-label': 'Procure seu Filme' }}
        value={searchValue}
        onChange={handleSearchInputChanges}
      
      />
      <Button variant="contained" color="primary" className={classes.iconButton} onClick={callSearchFunction} aria-label="search">
        Buscar
      </Button>
    </Paper>
    </div>

  );
};

export default Search;
