import React, {useState, useCallback} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress, Container, Paper, Typography, Button } from '@material-ui/core';
import QuestionItem from './QuestionItem';
import { SimpleModal } from '../../components/Modal';
import { DELETE_QUESTION_BANK } from '../../graphql/mutation';
import { useMutation } from '@apollo/client'

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
    modal: {
        position: 'absolute',
        width: 400,
        backgroundColor: '#fcfcfc',
        border: '1px solid #fefefe',
        padding: 18,
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`,
    }
});



const Detail = (props) => {
    const classes = useStyle();
    const [ questionAnswers, setQuestionAnswers ] = useState(props.record.questions);
    const [ showScore, setShowScore ] = useState(false);
    const [ showDelete, setShowDelete ] = useState(false);
    const [ score, setScore ] = useState(0);


    const selectChoice = useCallback( (questionIndex, choice) => {
        setQuestionAnswers(questionAnswers =>  questionAnswers.map((record, index) => {
            if(index == questionIndex) {
                return {...record, choice};
            }else{
                return record;
            }
        }))
    }, []);

    const calculateScore = () => {
        let result = 0;
        questionAnswers.forEach((record) => {
            if(record.choice && record.choice === record.answer) {
                result += record.pointPlus;
            } 

            if(record.choice && record.choice !== record.answer) {
                result += record.pointMinus;
            } 
        });
        setScore(result)
        setShowScore(true)
    }

    const deleteQuestionBank = () => {
        setShowDelete(false);
    }


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
                onClick={calculateScore}
            >
                Calculate Score
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
                onClick={() => setShowDelete(true)}
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
                    questionAnswers.map((record, index) => {
                        return <QuestionItem 
                                    onSetChoice={selectChoice}
                                    question={record} 
                                    key={index} 
                                    index={index} />
                    })
                }
            </div>
            {
                showScore && 
                <SimpleModal
                    open={showScore}
                    handleClose={() => setShowScore(false)}
                >
                    <div className={`${classes.modal}`}>
                     <h2 id="simple-modal-title">Your Score is : { score }</h2>
                    </div>
                </SimpleModal>
            }
            {
                showDelete && 
                <SimpleModal
                    open={showDelete}
                    handleClose={() => setShowDelete(false)}
                >
                    <div className={`${classes.modal}`}>
                     <h2 id="simple-modal-title">Ae you sure you want to delete ?</h2>
                     <Button
                        className={`${classes.button}`}
                        color={'secondary'}
                        fullWidth={false}
                        variant="contained"
                        onClick={deleteQuestionBank}
                    >
                        Yes
                    </Button>
                    <Button
                        className={`${classes.button}`}
                        color={'primary'}
                        fullWidth={false}
                        variant="contained"
                        onClick={() => setShowDelete(false)}
                    >
                        No
                    </Button>
                    </div>
                </SimpleModal>
            }
        </>
    )
}

export default Detail;