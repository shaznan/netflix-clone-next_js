import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/common/Header/Header";

const Registration = () => {
  const router = useRouter();

  console.log(router.query, "HOHO");
  return (
    <div>
      <Header theme="light" />
    </div>
  );
};

export default Registration;
