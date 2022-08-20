import {
  SET_STEP_COUNT,
  CLEAR_STEP_COUNT,
} from "../../actionTypes/signup/signupTypes";

const initialState = {
  stepCount: 1,
};

const signUp = (state = initialState, action) => {
  switch (action.type) {
    case SET_STEP_COUNT:
      return { ...state, stepCount: action?.payload || 1 };
    case CLEAR_STEP_COUNT:
      return { ...state, stepCount: 1 };
    default:
      return state;
  }
};

export default signUp;
