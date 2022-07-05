import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import StepOne from "../../../components/Registration/StepOne";
import wrapper from "../../../HOC/registration/wrapper";
import { useSelector, useDispatch } from "react-redux";
import { SET_INPUT_EMAIL_ADDRESS } from "../../../store/actionTypes/signup/signupTypes";

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

  console.log(router.query, "HOHO");

  const WrappedComponent = wrapper(StepOne);

  return <>{stepCount === 1 && <WrappedComponent />}</>;
};

export default Registration;
