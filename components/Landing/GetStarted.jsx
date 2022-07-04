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
import * as Yup from "yup";

const GetStarted = ({ mt }) => {
  const { width } = useScreenSize();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
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
          onBlur={formik.handleBlur}
          name="email"
        />
        <ButtonWrapper width={width} onClick={formik.handleSubmit}>
          <Button
            customType={
              width < breakPoints.TAB_SCREEN ? "simplePrimary" : "heroBtn"
            }
          >
            Get Started
            <BsChevronRight />
          </Button>
        </ButtonWrapper>
        <p>{formik.errors.email}</p>
      </GetStartedWrapper>
    </GetStartedContainer>
  );
};

export default GetStarted;
