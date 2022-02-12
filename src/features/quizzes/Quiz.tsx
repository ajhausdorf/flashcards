import { Link, useParams } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import { QuizzesParams, QuizProps, SingleQuiz } from './QuizzesInterface'

const Quiz: React.FC = () => {
  const quizzes: SingleQuiz = {}; // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams<QuizzesParams>()
  const quiz: QuizProps = quizzes[quizId];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds && quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}

export default Quiz;
