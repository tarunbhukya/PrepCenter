import React from 'react';
import { useQuery } from '@apollo/client'
import { LinearProgress, Container } from '@material-ui/core';
import EmptyList from '../../components/EmptyList'
import { makeStyles } from '@material-ui/core/styles';
import {GET_QUESTIONS} from '../../graphql/query';
import ListItem from './ListItem';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    root: {
        paddingTop: 28,
    },
    emptyContainerParent: {
        display: 'flex',
        justifyContent: 'center',
        height: '100vh'
    },
    emptyItem: {
        alignSelf: 'center'
    },
    paper: {
        padding: 12,
    },
    
});


const gotoQuestionBankDetail = (id) => {
    window.location.assign(`/questionbanks/${id}`);
}


const QuestionBankList = (props) => {
    const {loading, data, error} = useQuery(GET_QUESTIONS);
    const classes = useStyles();

    if(loading) {
        return <LinearProgress />
    }

    if(error) {
        console.log(error)
        return <div>Error loading page</div>
    }

    if(data.questionBanks && data.questionBanks.length === 0) {
        return(
            <Container className={classes.emptyContainerParent}>
                <EmptyList 
                    classes={classes.emptyItem}
                    title="Question Bank Empty"
                    description="Sorry your question bank is empty. Please try to create one."
                    create={() => window.location.assign('/questionbanks/new')}
                />
            </Container>
        )
    }

    return(
       <Container className={classes.root}>
           <Grid container spacing={3}>
            <Grid item xs={3}>
                <ListItem 
                    key={0}
                    item={null}
                    itemActionText="Create New"
                    itemAction={() => window.location.assign('/questionbanks/new')}
                    />
            </Grid>
            {
                data.questionBanks.map((record) => {
                    return (
                        <Grid key={record.id} item xs={3}>
                            <ListItem 
                                key={record.id}
                                item={record}
                                itemActionText="Learn More"
                                itemAction={() => gotoQuestionBankDetail(record.id)}
                                />
                        </Grid>
                    )
                })
            }
           </Grid>
           
       </Container>
    )
}

export default QuestionBankList;