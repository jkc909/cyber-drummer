import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

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

        return (
            <React.Fragment> 
                <CssBaseline />
                {/* <Container fixed> */}
                    <TopNavBar />
                    <MainContent />
                {/* </Container> */}
            </React.Fragment>
        );
    }
}

export default Home;