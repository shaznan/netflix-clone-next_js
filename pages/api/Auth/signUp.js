import UserPool from "../../../Auth/userPool";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export default function signUp(req, res) {
  if (res.method === "POST") {
    const { email, password } = res.body || {};

    console.log(email, password);
    let attributeList = [
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      }),
    ];

    UserPool.signUp(email, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });

    res.status(200).json({ name: "John Doe" });
  }
}
