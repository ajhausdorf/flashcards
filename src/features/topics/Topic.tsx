import NewTopicForm from "../../components/NewTopicForm";
import { Link, useParams } from "react-router-dom";
import { SingleTopic, TopicProps, TopicsSlice, TopicParams } from "./TopicsInterface";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";
import { SingleQuiz, QuizProps } from "../quizzes/QuizzesInterface";

const Topic: React.FC = () => {
  const topicsObj: TopicsSlice = useSelector(selectTopics);
  const quizzes: SingleQuiz = {}; // replace this with a call to your selector to select all the quizzes in state
  let { topicId } = useParams<TopicParams>();

  const topic: TopicProps = topicsObj['topics']['topics'][topicId];
  const quizzesForTopic: QuizProps[] = (topic.quizIds) ? topic.quizIds.map((quizId) => quizzes[quizId]) : [];
  
  return (
    <section>
      <img src={topic.icon} alt="" className="topic-icon" />
      <h1>Topic: {topic.name}</h1>
      <ul className="quizzes-list">
        {quizzesForTopic.map((quiz) => (
          <li className="quiz" key={quiz.id}>
            <Link to={ROUTES.quizRoute(quiz.id)}>{quiz.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/quizzes/new" className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}

export default Topic;