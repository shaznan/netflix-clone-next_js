import Header from "../../components/common/Header/Header";
import { MainWrapper } from "../../components/Registration/styles";
import { useSelector, useDispatch } from "react-redux";
import { SET_STEP_COUNT } from "../../store/actionTypes/signup/signupTypes";

const wrapper =
  (Component) =>
  ({ ...props }) => {
    const dispatch = useDispatch();
    const { stepCount } = useSelector((state) => state?.signUp);

    const setStepCount = (count) => {
      dispatch({
        type: SET_STEP_COUNT,
        payload: count,
      });
    };

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
