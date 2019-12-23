import React from 'react';
import { withStyles, makeStyles, } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import StopIcon from '@material-ui/icons/Stop';

const ColorButton = withStyles(theme => ({
  root: {
    width: "112px",
    height: "50px",
    fontSize: "20px",
    padding: "1px 9px",
    backgroundColor: "black",
    border: "1px outset #e13434",
    boxShadow: "0 0 5px #fff, 0 0 15px #e13434",
    textShadow: "0 0 10px #e13434",
    color: "#e13434",

    '&:hover': {
      backgroundColor: "#4a1111",
      boxShadow: "0 0 5px #fff, 0 0 15px #e13434",
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

const StopButton = props => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton 
        variant="contained" 
        color="primary" 
        className={classes.margin} 
        onClick={props.stopLoop}
        startIcon={<StopIcon />}
    >
        Stop
      </ColorButton>
    </div>
  );
}
 export default StopButton;