import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { Button } from "./Button";

interface Props extends RouteComponentProps {}

export const Home: React.FC<props> = ({ history, location, match }) => {
  console.log(match, location);
  return (
    <div>
      <div>home</div>
      <Link to="/about">go to about</Link>
      <button
        onClick={() => {
          history.push("/about");
        }}
      >
        click to go to about
      </button>
      <Button />
    </div>
  );
};
