import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';

const theme = createMuiTheme({
    overrides: {
      MuiToggleButton: {
        root: {
            backgroundColor: "red",
          "&:hover": {
            backgroundColor: "pink",
          },
          "&$selected": {
            backgroundColor: "orange",
            color: "orange",
            "&:hover": {
              backgroundColor: "blue",
              color: "blue"
            }
          }
        },
      }
    }
  });

const TrigButton = props => {
  return (
    <ThemeProvider theme={theme}>
      <ToggleButton 
        selected={props.selected}
        value=""
        children=""
        onChange={props.toggleDrum}
      />
    </ThemeProvider>
  );
}
 export default TrigButton;