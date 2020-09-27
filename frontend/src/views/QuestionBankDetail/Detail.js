import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { LinearProgress, Container, Paper, Typography, Button } from '@material-ui/core';
import QuestionItem from './QuestionItem';

const useStyle = makeStyles({
    content: {
        padding: 24,
    },
    paper: {
        padding: 24,
    },
    button: {
        marginTop: 18,
        marginRight: 8
    },
});

const Detail = (props) => {
    const classes = useStyle();
    const [ questionAnswers, setQuestionAnswers ] = useState(props.record.questions)
    const [ examStart, setExamStart ] = useState(false)


    return(
        <>
            <Paper elevation={0} className={`${classes.paper}`}>
                <Typography variant="h4" gutterBottom>
                    {props.record.title}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    {props.record.description}
                </Typography>
            </Paper>
            <Button
                className={`${classes.button}`}
                color={'primary'}
                fullWidth={false}
                variant="contained"
            >
                Start Exam
            </Button>
            <Button
                className={`${classes.button}`}
                color={'primary'}
                fullWidth={false}
                variant="contained"
            >
                Edit
            </Button>
            <Button
                className={`${classes.button}`}
                color={'secondary'}
                fullWidth={false}
                variant="outlined"
            >
                Delete
            </Button>
            <Button
                className={`${classes.button}`}
                color={'secondary'}
                fullWidth={false}
                variant="outlined"
            >
                Cancel Exam
            </Button>
            <div>
                {
                    props.record.questions.map((record, index) => {
                        return <QuestionItem 
                                    questionAnswers={questionAnswers}
                                    setQuestionAnswers={setQuestionAnswers}
                                    question={record} 
                                    key={index} 
                                    index={index} />
                    })
                }
            </div>
        </>
    )
}

export default Detail;