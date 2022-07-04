import React from "react";
import { useRouter } from "next/router";

const Registration = () => {
  const router = useRouter();

  console.log(router.query, "HOHO");
  return <div style={{ color: "white" }}>Registration</div>;
};

export default Registration;
