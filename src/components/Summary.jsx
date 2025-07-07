import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, i) => answer === QUESTIONS[i].answers[0]
  );
  const wrongAnswers = userAnswers.filter(
    (answer, i) => answer !== QUESTIONS[i].answers[0] && answer !== null
  );

  const skippedAnswersShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersShare = Math.round(
    (wrongAnswers.length / userAnswers.length) * 100
  );

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="Trofeo" />
      <h2>Quiz Completato!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Saltate</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Risposte Corrette</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Risposte Sbagliate</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, i) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[i].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={QUESTIONS[i].id}>
              <h3>{i + 1}</h3>
              <p className="question">{QUESTIONS[i].text}</p>
              <p className={cssClass}>{answer ?? "Saltata"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
