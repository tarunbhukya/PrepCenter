import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Field } from "formik";
import { Paper, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    marginTop: 18,
    padding: 24,
    height: "auto",
  },
  field: {
    padding: 12,
    borderColor: "#F4F4F4",
    borderWidth: 1,
    borderStyle: "solid",
    marginTop: 8,
    background: "#f4f4f4",
    width: "100%",
  },
  button: {
    marginTop: 16,
  },
});

const QuestionContent = (props) => {
  const classes = useStyles();
  const { question, index, remove } = props;

  return (
    <Paper
      elevation={0}
      className={`${classes.paper} ${classes.root}`}
      key={index}
    >
      <div className="">
        <Field
          multiline="true"
          rows="4"
          component="textarea"
          className={`${classes.field}`}
          name={`questions.${index}.title`}
          placeholder="Question"
          type="text"
        />
        <Field
          className={`${classes.field}`}
          name={`questions.${index}.choices.a`}
          placeholder="Choice A"
          type="text"
        />
        <Field
          className={`${classes.field}`}
          name={`questions.${index}.choices.b`}
          placeholder="Choice B"
          type="text"
        />
        <Field
          className={`${classes.field}`}
          name={`questions.${index}.choices.c`}
          placeholder="Choice C"
          type="text"
        />
        <Field
          className={`${classes.field}`}
          name={`questions.${index}.choices.d`}
          placeholder="Choice D"
          type="text"
        />
        <br /> <br />
        <Field
          className={`${classes.field}`}
          component="select"
          id="answer"
          name={`questions.${index}.answer`}
        >
          <option value="">Select Answer</option>
          <option value="a">Choice A</option>
          <option value="b">Choice B</option>
          <option value="c">Choice C</option>
          <option value="d">Choice D</option>
        </Field>

        <Field
          className={`${classes.field}`}
          name={`questions.${index}.pointPlus`}
          placeholder="Positive Marks"
          type="number"
        />

        <Field
          className={`${classes.field}`}
          name={`questions.${index}.pointMinus`}
          placeholder="Negative Marks"
          type="number"
        />          
      </div>
      <div className="">
        <Button
          className={classes.button}
          color={"secondary"}
          fullWidth={false}
          variant="outlined"
          onClick={() => remove(index)}
        >
          Delete
        </Button>
      </div>
    </Paper>
  );
};

export default QuestionContent;
