import * as React from "react";
import { withRouter } from "react-router-dom";

export const Button = withRouter(({ history }) => {
  return (
    <button
      onClick={() => {
        history.push("/posts/special");
      }}
    >
      {" "}
      special button{" "}
    </button>
  );
});
