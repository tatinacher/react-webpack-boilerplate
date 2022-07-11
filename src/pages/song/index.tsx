import * as React from "react";
import { useParams } from "react-router";

export const Song = () => {
  let { id } = useParams<{ id: string }>();
  return <div>Song {id}</div>;
};
