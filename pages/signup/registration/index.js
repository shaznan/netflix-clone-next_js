import React, { useState } from "react";
import { useRouter } from "next/router";
import StepOne from "../../../components/Registration/StepOne";
import wrapper from "../../../components/Registration/wrapper";
import { useSelector, useDispatch } from "react-redux";
import {
  SET_STEP_COUNT,
  SET_INPUT_EMAIL_ADDRESS,
} from "../../../store/actionTypes/signup/signupTypes";

const Registration = () => {
  const dispatch = useDispatch();
  const { stepCount } = useSelector((state) => state?.signUp);

  const setStepCount = (count) => {
    dispatch({
      type: SET_STEP_COUNT,
      payload: count,
    });
  };

  const router = useRouter();
  // const [stepCount, setStepCount] = useState(1);
  console.log(router.query, "HOHO");

  const props = {
    stepCount,
    setStepCount,
  };

  const WrappedComponent = wrapper(StepOne);

  return <>{stepCount === 1 && <WrappedComponent {...props} />}</>;
};

export default Registration;
