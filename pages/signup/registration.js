import React from "react";
import { useRouter } from "next/router";

const registration = () => {
  const router = useRouter();

  console.log(router.query, "HOHO");
  return <div style={{ color: "white" }}>registration</div>;
};

export default registration;
