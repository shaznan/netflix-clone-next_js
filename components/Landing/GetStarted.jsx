import React from "react";
import {
  GetStartedWrapper,
  EmailBar,
  ButtonWrapper,
  GetStartedContainer,
  Error,
} from "./style";
import { Button } from "../common/Button/Button";
import { BsChevronRight } from "react-icons/bs";
import useScreenSize from "../../hooks/useScreenSize";
import { breakPoints } from "../../constants";
import { Text } from "../common/Text/Text";
import { useFormik } from "formik";
import * as Yup from "yup";
import Router from "next/router";

const GetStarted = ({ mt }) => {
  const { width } = useScreenSize();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Required"),
    }),
    onSubmit: (values) => {
      Router.push("/hello-nextjs");
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
      </GetStartedWrapper>
      <Error>{formik.errors.email}</Error>
    </GetStartedContainer>
  );
};

export default GetStarted;
