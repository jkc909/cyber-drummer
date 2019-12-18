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
    border: "1px outset red",
    boxShadow: "0 0 15px red",
    textShadow: "0 0 10px red",
    color: "red",
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

const MuteButton = props => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton 
        variant="contained" 
        color="primary" 
        className={classes.margin}
        onClick={e => (props.handleMuteButton(e,props.iter))}
    >
        M
      </ColorButton>
    </div>
  );
}
 export default MuteButton;