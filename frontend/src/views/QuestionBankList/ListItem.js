import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    cardContent: {
      minHeight: 200
    },
    cardActionsContainer: {
      background: '#fcfcfc',
      borderTop: 'solid 1px rgba(0, 0, 0, 0.12)'
    }
  });

const ListItem = (props) => {
    const classes = useStyles();

    return(
        <Card className={classes.root} variant="outlined">
            <CardContent className={`${classes.cardContent}`}>
               
                {
                    props.item ?
                    <Typography variant="h5" component="h2">
                        {props.item.title}
                    </Typography>
                    :
                    <Typography variant="h5" component="h2">
                        Create New
                    </Typography>
                }
                
               
            </CardContent>
            <CardActions className={`${classes.cardActionsContainer}`}>
                <Button size="small" onClick={props.itemAction}>
                    { props.itemActionText }
                </Button>
            </CardActions>
        </Card>
    )
}

export default ListItem;