import React from "react";
import {Tooltip, Zoom, makeStyles, Grid, Typography, withStyles} from "@material-ui/core";
import { Link } from "react-router-dom";

const imageDefault =
  "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg";

  const useStyles = makeStyles((theme) => ({
    cardImage: {
      height:'auto',
      marginTop:10
    },
  }));

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 13,
    },
    arrow:{
      color: theme.palette.common.white,
      '&:before':{
        border: "1px solid #E6E8ED",
      }
    }
  }))(Tooltip);
  
  const InfoTooltip = ({title, id}) =>{
   
    return(
      <div>
        <Typography>{title}</Typography>
       <Link to={`/detalhe/${id}`}> +Info</Link> 
      </div>
    )
  }


const Movie = ({ movie }) => {

  const classes = useStyles();
  const poster = movie.Poster === "N/A" ? imageDefault: movie.Poster;
  return (
  
      <Grid item xs={12} md={4} lg={3} className={classes.cardImage}>
        <LightTooltip TransitionComponent={Zoom} arrow title={
          <>
            <InfoTooltip title={movie.Title} id={movie.imdbID} />
          </>
        } interactive>
            <img 
              alt={`Filme ${movie.Title}`}
              src={poster}
            />
        </LightTooltip>
      </Grid>
  );
};

export default Movie;
