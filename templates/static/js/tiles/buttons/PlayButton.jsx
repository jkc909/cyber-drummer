import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ColorButton = withStyles(theme => ({
  root: {
    width: "112px",
    height: "50px",
    fontSize: "20px",
    padding: "1px 9px",
    backgroundColor: "black",
    border: "1px outset #8cd58b",
    boxShadow: "0 0 15px #8cd58b",
    textShadow: "0 0 10px #8cd58b",
    color: "#8cd58b",
    animation: "playglow var(--anim8-time) ease-in-out infinite alternate",
    '&:hover': {
      backgroundColor: "#043603",
    },
    '&:disabled': {
      boxShadow: "none",
      textShadow: "none",
      color: "#262c3d",
      border: "1px solid #262c3d",
      animation: "none",
      },
    '&:focus': {
      outline: "none",
    }
  },
}))(Button);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const PlayButton = props => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton 
        variant="contained" 
        color="primary" 
        className={classes.margin} 
        onClick={props.playLoop}
        startIcon={<PlayArrowIcon />}
    >
        Play
      </ColorButton>
    </div>
  );
}
 export default PlayButton;