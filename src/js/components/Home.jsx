import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import TopNavBar from '../tiles/TopNavBar.jsx'
import MainContent from './MainContent.jsx'


class Home extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const theme = createMuiTheme({
            overrides: {
              MuiCssBaseline: {
                '@global': {
                  body: {
                    backgroundColor: 'black',
                    backgroundImage: 'url("/public/images/synthwave3.jpg")',
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

export default Home;