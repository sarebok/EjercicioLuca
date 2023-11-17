import React from "react";
import { useParams } from "react-router-dom";

const Correct = () => {
  const { respuestaCorrecta } = useParams();
  return <div>{respuestaCorrecta}</div>;
};

export default Correct;
