import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "var(--main-background)",
    color: "white",
    fontSize: "25px",
    border: '2px solid white',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{cursor: 'pointer'}}>
      <div onClick={handleOpen}>
      <h4>About</h4>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className="transition-modal-title">About Cyber Drummer</h2>
            <hr style={{borderColor: 'white', width: '75%',}} />
            <p id="transition-modal-description">Creator: Joe Costello, 2019</p>
            <p id="transition-modal-description">Source: <a href="https://github.com/jkc909/cyber-drummer" target="_blank" rel="noopener noreferrer">https://github.com/jkc909/cyber-drummer</a></p>
            <p id="transition-modal-description">Contact:</p>
                <p> - jkcostello90@gmail.com</p>
                <p> - <a href="https://www.linkedin.com/in/josephkcostello/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/josephkcostello</a></p>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}