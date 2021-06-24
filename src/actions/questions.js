import { _saveQuestion } from "../utils/_DATA";

export const ADD_QUESTION = "ADD_QUESTION";

const addQuestion = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const handleAddQuestion =
  (option1, option2, author) => async (dispatch, getState) => {
    const question = await _saveQuestion({
      optionOneText: option1,
      optionTwoText: option2,
      author,
    });
    return dispatch(addQuestion(question));
  };
