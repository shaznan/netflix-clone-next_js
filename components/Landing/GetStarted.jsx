import React, { useState } from "react";
import {
  GetStartedWrapper,
  EmailBar,
  ButtonWrapper,
  GetStartedContainer,
} from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";
import useScreenSize from "../../hooks/useScreenSize";
import { breakPoints } from "../../constants";
import { Text } from "../common/Text/Text";
import { useFormik } from "formik";

const GetStarted = ({ mt }) => {
  const { width } = useScreenSize();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <GetStartedContainer mt={mt}>
      <Text
        type={
          width < breakPoints.TAB_SCREEN_SMALL ? "secondary-small" : "secondary"
        }
      >
        Ready to watch? Enter your email to create or restart your membership..
      </Text>
      <GetStartedWrapper>
        <EmailBar
          width={width}
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
        />
        <ButtonWrapper width={width} onClick={formik.handleSubmit}>
          <Button
            type={width < breakPoints.TAB_SCREEN ? "simplePrimary" : "heroBtn"}
          >
            Get Started
            <BsChevronRight />
          </Button>
        </ButtonWrapper>
      </GetStartedWrapper>
    </GetStartedContainer>
  );
};

export default GetStarted;
