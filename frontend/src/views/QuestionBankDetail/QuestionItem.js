import React from 'react';
import {Paper, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paper: {
        padding: 28,
        marginTop: 24
    },
    answerBox: {
        paddingTop: 8,
        paddingLeft: 24,
        paddingBottom: 8,
        background: '#f4f4f4',
        cursor: 'pointer'
    },
    selectedChoice: {
        background: "#A2D5C2",
    }
});

const QuestionItem = (props) => {

    const classes = useStyles();

    const handleChoice = (index, value) => {
        let questionAnswers = Object.assign([], props.questionAnswers);
        const newState = [...questionAnswers]
        newState[index] = {...newState[index], choice: value}
        props.setQuestionAnswers(newState)
    }


    return (
        <Paper elevation={0} className={`${classes.paper}`}>
            <p><b>Question</b></p>
            <p>{props.question.title}</p>
            <br /> <br />
            <Typography 
                onClick={() => handleChoice(props.index, 'a')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ props.questionAnswers[props.index].choice == "a" ? classes.selectedChoice : '' }`}>
                <b>A :</b>  { props.question.choices.a }
            </Typography>
            <Typography 
                onClick={() => handleChoice(props.index, 'b')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ props.questionAnswers[props.index].choice == "b" ? classes.selectedChoice : '' }`}>
                <b>B :</b>  { props.question.choices.b }
            </Typography>
            <Typography 
                onClick={() => handleChoice(props.index, 'c')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ props.questionAnswers[props.index].choice == "c" ? classes.selectedChoice : '' }`}>
                <b>C :</b>  { props.question.choices.c }
            </Typography>
            <Typography 
                onClick={() => handleChoice(props.index, 'd')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ props.questionAnswers[props.index].choice == "d" ? classes.selectedChoice : '' }`}>
                <b>D :</b>  { props.question.choices.d }
            </Typography>
        </Paper>
    )
}

export default QuestionItem;