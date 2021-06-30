import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER = "ADD_ANSWER";
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

const addAnswer = (answer) => ({
  type: ADD_ANSWER,
  answer,
});

export const receiveQuestions = (questions) => {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
};

export const handleAddQuestion =
  (option1, option2, author) => async (dispatch, getState) => {
    const question = await _saveQuestion({
      optionOneText: option1,
      optionTwoText: option2,
      author,
    });
    return dispatch(addQuestion(question));
  };

export const handleAddAnswer =
  (authedUser, qid, answer) => async (dispatch, getState) => {
    await _saveQuestionAnswer({ authedUser, qid, answer });
    return dispatch(addAnswer({ authedUser, qid, answer }));
  };
