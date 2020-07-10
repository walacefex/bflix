import React, { useReducer, useEffect } from "react";
//componentes
import Header from "../components/Header";
import Movie from "../components/Movie";
import Search from "../components/Search";
import { CircularProgress, Grid } from "@material-ui/core";

import { initialState, reducer } from "../store/reducer";
import axios from "axios";


const API_KEY = 'b05c6b62'
const MOVIE_API_URL = `https://www.omdbapi.com/?s=avengers&apikey=${API_KEY}&page=1`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=${API_KEY}&page=1`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;
  console.log(movies)
  console.log( errorMessage)
  const getMovies =
    loading && !errorMessage ? (
      <CircularProgress />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );
    console.log(movies)
    console.log( errorMessage)

  return (
    <div className="App">
      <div className="m-container">
        <Header />
        <Search search={search} />

        <Grid container direction="row">
          {getMovies}
        </Grid>
      </div>
    </div>
  );
};

export default App;
