import React from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from '../config/routes';
import SideBar from './sidebar'
import { makeStyles } from '@material-ui/core/styles';

const sideBarWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    sideBar: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: sideBarWidth,
        background: "#001529"
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
        background: '#f6f6f6'
    }

}));

const isActive = (tabName) => {
    const presentUrl = window.location.href;
    var regExp = new RegExp(tabName, 'g');
    return presentUrl.match(regExp) ? true : false
}

const Layout = (props) => {
    const classes = useStyles();
    const presentUrl = window.location.href;

    return(
        <div className={classes.root}>
            {
                !isActive('login') &&
                <SideBar classes={classes.sideBar} />
            }
            <div className={classes.content}>
                { renderRoutes(routes) }
            </div>
        </div>
    )
}

export default Layout;