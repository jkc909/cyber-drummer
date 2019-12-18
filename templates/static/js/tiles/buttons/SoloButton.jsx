import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const ColorButton = withStyles(theme => ({
  root: {
    minWidth: "30px",
    // height: "50px",
    // fontSize: "20px",
    padding: "0px",
    backgroundColor: "black",
    border: "1px outset blue",
    boxShadow: "0 0 15px blue",
    textShadow: "0 0 10px blue",
    color: "blue",
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

const SoloButton = props => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton 
        variant="contained" 
        color="primary" 
        className={classes.margin}
        onClick={e => ("")}
    >
        S
      </ColorButton>
    </div>
  );
}
 export default SoloButton;