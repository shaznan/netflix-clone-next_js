import React, { useEffect } from "react";
import { useRouter } from "next/router";
import StepOne from "../../../components/Registration/StepOne";
import wrapper from "../../../HOC/registration/wrapper";
import { useSelector, useDispatch } from "react-redux";
import { SET_INPUT_EMAIL_ADDRESS } from "../../../store/actionTypes/auth/authTypes";
import StepTwo from "../../../components/Registration/StepTwo";

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
  const WrappedComponent = wrapper(StepTwo);

  return <>{stepCount === 1 && <WrappedComponent />}</>;
};

export default Registration;
