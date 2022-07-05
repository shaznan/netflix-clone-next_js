import Header from "../common/Header/Header";
import { MainWrapper } from "./styles";

const wrapper =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Header theme="light" />
        <MainWrapper>
          <Component {...props} />
        </MainWrapper>
      </>
    );
  };

export default wrapper;
