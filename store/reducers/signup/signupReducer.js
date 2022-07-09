import {
  SET_STEP_COUNT,
  SET_INPUT_EMAIL_ADDRESS,
} from "../../actionTypes/signup/signupTypes";

const initialState = {
  stepCount: 1,
  inputEmailAddress: "",
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_COUNT:
      return { ...state, stepCount: action?.payload || 1 };
    case SET_INPUT_EMAIL_ADDRESS:
      return { ...state, inputEmailAddress: action?.payload || "" };

    default:
      return state;
  }
};

export default signUp;
