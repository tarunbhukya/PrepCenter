import React, {useState} from 'react';
import { useQuery } from '@apollo/client'
import { GET_QUESTIONBANK } from '../../graphql/query'
import { LinearProgress, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Detail from './Detail';

const useStyle = makeStyles({
    content: {
        padding: 24,
    },
    paper: {
        padding: 24,
    }
});

const QuestionBankDetail = (props) => {
    const classes = useStyle();

    const { loading, error, data } = useQuery(GET_QUESTIONBANK, {
        variables: { id: props.match.params.id },
      });

    if(loading) {
        return <LinearProgress />
    }

    if(error) {
        console.log(error)
        return <div>Something went wrong</div>
    }


    return(
        <Container className={`${classes.content}`}>
            <Detail record={data.questionBank} />
        </Container>
    )
}

export default QuestionBankDetail;