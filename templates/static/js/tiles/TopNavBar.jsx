import React from 'react';
import Typography from '@material-ui/core/Typography';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from '@material-ui/core/styles';

import AboutModal from '../tiles/AboutModal.jsx'

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      flexGrow: 1,
      fontFamily: "Orbitron",
      textAlign: 'center',
      fontSize: '35px',
      color: '#14cce0',
      textShadow: '0px 0px 18px',
      letterSpacing: '12px',
      paddingRight: '56px',
    },
  }));

  export default function TopNavBar() {
    const classes = useStyles();
  
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: '#090112', height: '56px'}}>
                <Toolbar className={classes.root}>
                    <AboutModal className={classes.aboutButton}/>
                    <Typography className={classes.title}>Cyber Drummer</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}