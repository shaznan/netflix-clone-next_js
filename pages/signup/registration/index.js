import React, { useEffect } from "react";
import { useRouter } from "next/router";
import wrapper from "../../../HOC/registration/wrapper";
import { useSelector, useDispatch } from "react-redux";
import { SET_INPUT_EMAIL_ADDRESS } from "../../../store/actionTypes/auth/authTypes";
import SignUpForm from "../../../components/Registration/SignUpForm";
import SignUpIntro from "../../../components/Registration/SignUpIntro";
import ChooseYourPlan from "../../../components/Registration/ChooseYourPlan";
import { CLEAR_STEP_COUNT } from "../../../store/actionTypes/signup/signupTypes";

const Registration = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { stepCount } = useSelector((state) => state?.signUp);

  const {
    query: { email },
  } = router || {};

  useEffect(() => {
    router?.query &&
      dispatch({
        type: SET_INPUT_EMAIL_ADDRESS,
        payload: email,
      });
  }, [router]);

  // const WrappedComponent = wrapper(StepOne);
  const WrappedSignUpIntro = wrapper(SignUpIntro);
  const WrappedSignUpForm = wrapper(SignUpForm);
  const WrappedChooseYourPlan = wrapper(ChooseYourPlan);

  useEffect(() => {
    return () => {
      dispatch({
        type: CLEAR_STEP_COUNT,
      });
    };
  }, []);

  return (
    <>
      {stepCount === 1 && <WrappedSignUpIntro />}
      {stepCount === 2 && <WrappedSignUpForm />}
      {stepCount === 3 && <WrappedChooseYourPlan />}
    </>
  );
};

export default Registration;
