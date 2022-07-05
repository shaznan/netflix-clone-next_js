import React, { useEffect } from "react";
import Header from "../../components/common/Header/Header";
import { MainWrapper } from "../../components/Registration/styles";
import { useSelector, useDispatch } from "react-redux";
import { SET_STEP_COUNT } from "../../store/actionTypes/signup/signupTypes";
import { useRouter } from "next/router";

const wrapper =
  (Component) =>
  ({ ...props }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { stepCount } = useSelector((state) => state?.signUp);

    const setStepCount = (count) => {
      dispatch({
        type: SET_STEP_COUNT,
        payload: count,
      });
    };

    useEffect(() => {
      router.beforePopState(({ as }) => {
        if (as !== router.asPath) {
          setStepCount(stepCount - 1);
        }
        return true;
      });

      return () => {
        router.beforePopState(() => true);
      };
    }, [router]);

    const countProps = {
      stepCount,
      setStepCount,
    };
    return (
      <>
        <Header theme="light" />
        <MainWrapper>
          <Component {...props} {...countProps} />
        </MainWrapper>
      </>
    );
  };

export default wrapper;
