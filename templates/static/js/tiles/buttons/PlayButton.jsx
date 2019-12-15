import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple,red } from '@material-ui/core/colors';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
    '&:disabled': {
        backgroundColor: red[700],
      },
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