import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
import { QuizProps, QuizzesWrapper } from "./QuizzesInterface";
import { selectQuizzes } from './quizzesSlice';

const Quizzes: React.FC = () => {
  const quizzes: QuizzesWrapper = useSelector(selectQuizzes); // replace this with a call to your selector to get all the quizzes in state
  return (
    <section className="center">
      <h1>Quizzes</h1>
      <ul className="quizzes-list">
        {Object.values(quizzes['quizzes']).map((quiz: QuizProps) => (
          <Link key={quiz.id} to={ROUTES.quizRoute(quiz.id)}>
            <li className="quiz">{quiz.name}</li>
          </Link>
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button">
        Create New Quiz
      </Link>
    </section>
  );
}

export default Quizzes;