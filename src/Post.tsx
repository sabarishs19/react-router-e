import * as React from "react";
import { RouterComponentProps } from "react-router";

interface Props
  extends RouterComponentProps<{
    id: string;
  }> {}

export const Post: React.FC<Props> = ({ match }) => {
  React.useEffect(() => {
    fetch(`api/posts/${match.params.id}`);
  }, [match.params.id]);

  return <div>rendering post {match.params.id}</div>;
};
