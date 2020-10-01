import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#f0f0f0',
        padding: 12,
      },
    modalStyle: {
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    }
})

export const SimpleModal = (props) => {

    const classes = useStyles();


    return(
        <div>
            <Modal  
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
           {props.children}
        </Modal>
        </div>
    )
}