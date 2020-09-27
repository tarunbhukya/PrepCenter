import React from 'react';
import {Container, Paper, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { InitQuestionState } from './question_states'
import QuestionContent from './QuestionContent';
import { Formik, Field, Form, FieldArray } from 'formik';
import { useMutation } from '@apollo/client';
import {  CREATE_QUESTIN_BANK } from '../../graphql/mutation' 

const useStyles = makeStyles({
    content: {
        paddingTop: 24,
        paddingBottom: 54
    },
    flexColumn: {
        display: "flex",
        flexDirection: 'column',
    },
    paper: {
        padding: 24,
        height: 'auto'
    },
    field: {
        padding: 12,
        borderColor: '#F4F4F4',
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 8,
        background: '#f4f4f4'
    },
    button: {
        marginTop: 16,
    }
});

const initalValues = {
    title: '',
    description: '',
    questions: [InitQuestionState, ],
    examType: 'mcq',
    user: 2,
    answers: {
        1: '',
    }
}


const createQuestionPaper = async (values, createQuestionBank) => {

    const {data} = await createQuestionBank({
        variables: {
          title: values.title,
          user: values.user,
          description: values.description,
          questions: values.questions,
          answers: values.answers,
          examType: values.examType
        }
      })
      
    console.log(data)
}

const QuestionBankCreate = (props) => {
    const classes = useStyles();
    const [createQuestionBank] = useMutation(CREATE_QUESTIN_BANK);


    return(
        <Container className={classes.content}>
            <div>
                <h1>Question Paper</h1>
                <Formik
                    initialValues={initalValues}
                    onSubmit={async (values) => {
                        createQuestionPaper(values, createQuestionBank)
                    }}
                >
                    {({values}) => (
                        <Form className={`${classes.flexColumn}`}>
                            <Paper elevation={1} className={`${classes.flexColumn} ${classes.paper}`}>
                                <Field 
                                    className={`${classes.field}`} 
                                    type="text" name="title" placeholder="Title" />
                                <Field 
                                    multiline="true"
                                    rows="10"
                                    component="textarea"
                                    className={`${classes.field}`} 
                                    type="text" name="description" placeholder="Description" />
                            </Paper>
                            

                            <FieldArray name="questions">
                                {({insert, remove, push}) => (
                                    <div>
                                        {
                                            values.questions.length > 0 &&
                                            values.questions.map((question, index) => (
                                                <QuestionContent
                                                    key={index}
                                                    index={index}
                                                    question={question}
                                                    remove={remove} 
                                                />
                                            ))
                                        }
                                        <Button
                                            className={classes.button}
                                            color={'primary'}
                                            fullWidth={false}
                                            variant="contained"
                                            onClick={() => push(InitQuestionState)}>
                                            Add Question
                                        </Button>
                                    </div>
                                )}
                            </FieldArray>
                            <div>
                            <Button
                                type="submit"
                                className={classes.button}
                                color={'primary'}
                                fullWidth={false}
                                variant="contained"
                                >
                                Create Question Bank
                            </Button>
                            </div>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        </Container>
    )
};

export default QuestionBankCreate;