import React, { useState, useEffect } from "react";
import questions from "./question";
import "./App.css";

function App() {
  const [displayQuestion, setDisplayQuestion] = useState(false);
  const [displayAnswer, setDisplayAnswer] = useState(false);
  const [displayStart, setDisplayStart] = useState(true);
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [numberOfGoodAnswers, setNumberOfGoodAnswers] = useState(0);
  const [title, setTitle] = useState("Prêt à réviser pour ton TP?");
  let [x, setX] = useState(0);

  useEffect(() => {
    function shuffleArray(array) {
      for (let i = array.length - 2; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    shuffleArray(questions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions]);

  const startGame = () => {
    setDisplayStart(false);
    setDisplayQuestion(true);
    setX(0)
    setNumberOfQuestions(1)
    setNumberOfGoodAnswers(0)

  };

  const giveAnswer = () => {
    setDisplayQuestion(false);
    setDisplayAnswer(true);
  };
  const newQuestionGood = () => {
    setX(x+1);
    setNumberOfQuestions(numberOfQuestions + 1);
    setNumberOfGoodAnswers(numberOfGoodAnswers+1)
    if (x === questions.length-2){
      setTitle("Tu as fait toutes les questions, tu peux recommencer");
      setDisplayAnswer(false);
      setDisplayQuestion(false);
      setDisplayStart(true);
    }
    else{
    setDisplayQuestion(true);
    setDisplayAnswer(false);
    }
  };
  const newQuestionBad = () => {
    setX(x+1);
    setNumberOfQuestions(numberOfQuestions + 1);
    if (x === questions.length-2){
      setTitle("Tu as fait toutes les questions, tu peux recommencer");
      setDisplayAnswer(false);
      setDisplayQuestion(false);
      setDisplayStart(true);
    }
    else{
    setDisplayQuestion(true);
    setDisplayAnswer(false);
    }
  };
console.log(questions)
  return (
    <div className="revision">
      {displayStart ? (
        <div>
          {" "}
          <p className="title"> {title}</p>
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
          <button onClick={newQuestionGood}>J'ai bien répondu</button>{" "}
          <button onClick={newQuestionBad}>J'ai mal répondu</button>{" "}
        </div>
      ) : null}
       <p>Score : {numberOfGoodAnswers} / {numberOfQuestions-1}</p>
    </div>
  );
}

export default App;
