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
import * as Yup from "yup";
import { useRouter } from "next/router";
import { Formik } from "formik";

const GetStarted = ({ mt }) => {
  const { width } = useScreenSize();
  const router = useRouter();

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Required"),
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
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={({ email }) => {
          const redirectPath = "/signup/registration";
          router.push(
            {
              pathname: redirectPath,
              query: { email },
              // shallow: true,
            },
            redirectPath
          );
        }}
      >
        {({
          values: { email },
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
        }) => {
          return (
            <>
              <GetStartedWrapper>
                <EmailBar
                  width={width}
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="email"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSubmit();
                    }
                  }}
                />
                <ButtonWrapper width={width} onClick={handleSubmit}>
                  <Button
                    customType={
                      width < breakPoints.TAB_SCREEN
                        ? "simplePrimary"
                        : "heroBtn"
                    }
                  >
                    Get Started
                    <BsChevronRight />
                  </Button>
                </ButtonWrapper>
              </GetStartedWrapper>
              <Error>{errors.email}</Error>
            </>
          );
        }}
      </Formik>
    </GetStartedContainer>
  );
};

export default GetStarted;
