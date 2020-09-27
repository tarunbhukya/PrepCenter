import React, {useState, useContext} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';
import UserContext from '../components/UserContext'

const useStyles = makeStyles((theme) => ({
   icon: {
       color: '#ffffff'
   }, 
   iconActive: {
        background: '#1890ff'
   },
   divider: {
       background: '#ffffff'
   },
   button: {
       color: '#ffffff',
       '&:hover': { 
        background: "#407088"
     },
   },
   link: {
       cursor: 'pointer',
       textDecoration: "none",
   }
}));

const isActive = (tabName) => {
    const presentUrl = window.location.href;
    var regExp = new RegExp(tabName, 'g');
    return presentUrl.match(regExp) ? true : false
}

const isStudent = (user) => {
    return user && user.role === "STUDENT";
}

const isAdmin = (user) => {
    return user && user.role === "ADMIN";
}

const isTeacher = (user) => {
    return user && user.role === "TEACHER";
}

const SideBar = (props) => {
    const classes = useStyles();
    const user = useContext(UserContext)
    const [selectedLink, setSelectedLink] = useState('')

    return (
        <div className={props.classes}>
            <br />
            <br />
            <br />
            <br />
            <Link href="/dashboard" className={classes.link}>
                <ListItem button className={`${classes.button}  ${isActive("dashboard") ? classes.iconActive : ''}`}>
                        <ListItemIcon>
                            <DashboardIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
            <Link href="/questionbanks">
                <ListItem button className={`${classes.button}  ${isActive("questionbanks") ? classes.iconActive : ''}`}>
                    <ListItemIcon>
                        <ShoppingCartIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Question Banks" />
                </ListItem>
            </Link>

            {
                isAdmin(user) &&
                <ListItem button className={`${classes.button}  ${false ? classes.iconActive : ''}`}>
                    <ListItemIcon>
                        <PeopleIcon className={classes.icon} />
                    </ListItemIcon>
                    <ListItemText primary="Customers" />
                </ListItem>
            }
            
            <ListItem button className={`${classes.button}  ${false ? classes.iconActive : ''}`}>
                <ListItemIcon>
                    <BarChartIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button className={`${classes.button}  ${false ? classes.iconActive : ''}`}>
                <ListItemIcon>
                    <SettingsIcon className={classes.icon} />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItem>
        </div>
    )
}

export default SideBar;