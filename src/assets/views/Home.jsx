import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  //llamado a la api
  const [trivia, setTrivia] = useState([]);

  async function getTrivia(signal) {
    try {
      const url = "https://the-trivia-api.com/v2/questions?region=AR&limit=1";
      const response = await fetch(url, signal);
      const data = await response.json();
      const triviaData = data;
      setTrivia(triviaData);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    console.log(trivia);
    getTrivia(signal);
    //cleanup
    return () => {
      controller.abort();
    };
  }, []);
  console.log(trivia);
  return (
    <div>
      <h1>hola</h1>
      <h1>{trivia[0]?.question.text}</h1>
      <Link to={`/correct/${trivia[0]?.correctAnswer}`}>
        <h3>{trivia[0]?.correctAnswer}</h3>
      </Link>
    </div>
  );
};

export default Home;
