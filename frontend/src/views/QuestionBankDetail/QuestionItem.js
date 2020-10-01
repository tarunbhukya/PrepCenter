import React, {useMemo} from 'react';
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

const QuestionItem = ({question, onSetChoice, index}) => {
    const classes = useStyles();

    return useMemo((props) => {

    const handleChoice = (index, value) => {
        onSetChoice(index, value)
    }

    console.log(question)

    return (
        <Paper elevation={0} className={`${classes.paper}`}>
            <p><b>Question</b></p>
            <p>{question.title}</p>
            <br /> <br />
            <Typography 
                onClick={() => handleChoice(index, 'a')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ question.choice === "a" ? classes.selectedChoice : '' }`}>
                <b>A :</b>  { question.choices.a }
            </Typography>
            <Typography 
                onClick={() => handleChoice(index, 'b')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ question.choice === "b" ? classes.selectedChoice : '' }`}>
                <b>B :</b>  { question.choices.b }
            </Typography>
            <Typography 
                onClick={() => handleChoice(index, 'c')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ question.choice === "c" ? classes.selectedChoice : '' }`}>
                <b>C :</b>  { question.choices.c }
            </Typography>
            <Typography 
                onClick={() => handleChoice(index, 'd')} 
                variant="subtitle1" 
                gutterBottom 
                className={`${classes.answerBox} ${ question.choice === "d" ? classes.selectedChoice : '' }`}>
                <b>D :</b>  { question.choices.d }
            </Typography>
        </Paper>
        )

    }, [onSetChoice, index, question.choice, useStyles ])
    
}

export default QuestionItem;