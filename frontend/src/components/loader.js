import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        textAlign: 'center',
        background: '#407088',
        height: '100vh',
        display: 'flex',
        color: '#ffffff'        
    },
    item: {
        flexGrow: 1,
        alignSelf: 'center'
    }
}));


const Loader = (props) => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <h1 className={classes.item}>Loading...</h1>
        </div>
    )
}

export default Loader;