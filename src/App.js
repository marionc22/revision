import React, { useState } from "react";
import questions from "./question";
import "./App.css";

function App() {
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [displayStart, setDisplayStart] = useState(true);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [numberOfGoodAnswers, setNumberOfGoodAnswers] = useState(0);
  let [x, setX] = useState(Math.floor(Math.random() * questions.length));
  console.log(x);
  const startGame = () => {
    setDisplayStart(false);
    setDisplayQuestion(true);
  };

  const giveAnswer = () => {
    setDisplayQuestion(false);
    setDisplayAnswer(true);
  };
  const newQuestionGood = () => {
    setX(Math.floor(Math.random() * questions.length));
    setNumberOfQuestions(numberOfQuestions + 1);
    setDisplayQuestion(true);
    setDisplayAnswer(false);
    setNumberOfGoodAnswers(numberOfGoodAnswers+1)
  };
  const newQuestionBad = () => {
    setX(Math.floor(Math.random() * 5));
    setNumberOfQuestions(numberOfQuestions + 1);
    setDisplayQuestion(true);
    setDisplayAnswer(false);

  };

  return (
    <div className="revision">
      {displayStart ? (
        <div>
          {" "}
          <p className="title"> Prêt à révisier pour avoir ton TP?</p>
          <button
           onClick={startGame}>C'est parti ! </button>
        </div>
      ) : (
        <div>
          <h3>Question {numberOfQuestions} </h3>
        </div>
      )}
      {displayQuestion ? (
        <div>
          {" "}
          <p className="title">{questions[x].question}</p>{" "}
          <button onClick={giveAnswer}>La Réponse</button>{" "}
        </div>
      ) : null}
      {displayAnswer ? (
        <div>
          {" "}
          <p className="title">{questions[x].answer}</p>{" "}
          <button onClick={newQuestionGood}>Bonne réponse</button>{" "}
          <button onClick={newQuestionBad}>Mauvaise réponse</button>{" "}
        </div>
      ) : null}
      {displayStart? null : <p>Score : {numberOfGoodAnswers} / {numberOfQuestions-1}</p>}
    </div>
  );
}

export default App;
