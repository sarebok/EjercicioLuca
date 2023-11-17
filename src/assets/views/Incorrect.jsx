import React from "react";
import { useParams } from "react-router-dom";

const Incorrect = () => {
  const { respuestaIorrecta } = useParams();
  return <div>Incorrect</div>;
};

export default Incorrect;
