import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


import TopNavBar from '../tiles/TopNavBar.jsx'
import MainContent from './MainContent.jsx'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){

    }

    

    render() {
        const theme = createMuiTheme({
            overrides: {
              MuiCssBaseline: {
                '@global': {
                  body: {
                    backgroundColor: 'black',
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
                {/* <Container fixed> */}
                    <TopNavBar />
                    <MainContent />
                {/* </Container> */}
            </React.Fragment>
        );
    }
}

export default Home;