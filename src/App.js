import './public/css/main.scss';
import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import BackgroundImage from './public/images/synthwave3.jpg'

import TopNavBar from './js/tiles/TopNavBar.jsx'
import MainContent from './js/components/MainContent.jsx'


class App extends Component {
    render() {
        const theme = createMuiTheme({
            overrides: {
              MuiCssBaseline: {
                '@global': {
                  body: {
                    backgroundColor: 'black',
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    fontFamily: 'Orbitron',
                  },
                  '.MuiButton-label': {
                    fontFamily: 'Orbitron',
                  },
                },
              },
            },
          })
        return (
            <React.Fragment> 
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                </ThemeProvider>
                    <TopNavBar />
                    <MainContent />
            </React.Fragment>
        );
    }
}

export default App;