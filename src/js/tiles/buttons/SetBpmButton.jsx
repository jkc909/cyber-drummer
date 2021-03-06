import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ColorButton = withStyles(theme => ({
  root: {
    width: "100px",
    height: "55px",
    padding: "1px 9px",
    backgroundColor: "black",
    border: "1px outset #1b4fe6",
    boxShadow: "0 0 15px blue",
    textShadow: "0 0 10px #1b4fe6",
    color: "#8b9ed5",
    animation: "glow var(--anim8-time) ease-in-out infinite alternate",
    '&:hover': {
      backgroundColor: "#1f2b53",
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

const SetBpmButton = props => {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" disabled={props.disabled} className={classes.margin} onClick={props.handleBpmButton}>
        Set New BPM
      </ColorButton>
    </div>
  );
}
 export default SetBpmButton;