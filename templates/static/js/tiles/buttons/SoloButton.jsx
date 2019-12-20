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
    boxShadow: "0 0 5px blue",
    textShadow: "0 0 10px blue",
    color: "blue",
    '&:hover': {
      backgroundColor: "#0000ff61",
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
    let disabled = false
    if((props.solostate!="" && props.solostate=='not-soloed') || props.muted){
        disabled=true
    }
  const classes = useStyles();

  return (
    <div>
      <ColorButton 
        variant="contained" 
        color="primary" 
        className={classes.margin}
        onClick={e => (props.handleSoloButton(e,props.iter))}
        disabled={disabled}
    >
        S
      </ColorButton>
    </div>
  );
}
 export default SoloButton;