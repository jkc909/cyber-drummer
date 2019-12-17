import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';

const theme = createMuiTheme({
    overrides: {
      MuiToggleButton: {
        root: {
            backgroundColor: "#ff00fc1a",
          "&:hover": {
            backgroundColor: "#ff00fc6b",
          },
          "&$selected": {
            backgroundColor: "#ff00fc",
            "&:hover": {
              backgroundColor: "#ff00fc6b",
            }
          },
          '&:focus': {
            outline: "none",
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