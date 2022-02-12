import NewTopicForm from "../../components/NewTopicForm";
import { Link } from "react-router-dom";
import { TopicParams, SingleTopic, TopicsSlice, TopicProps } from "./TopicsInterface";
import ROUTES from "../../app/routes";
import { useSelector } from "react-redux";
import { selectTopics } from "./topicsSlice";

const Topics: React.FC = () => {
  const topicsObj: TopicsSlice = useSelector(selectTopics);

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topicsObj['topics']['topics']).map((topic) => (
          <li className="topic" key={topic.id}>
          <Link to={ROUTES.topicRoute(topic.id)} className="topic-link">
           <div className="topic-container">
             <img src={topic.icon} alt="" />
             <div className="text-content">
               <h2>{topic.name}</h2>
               <p>{topic.quizIds && topic.quizIds.length} Quizzes</p>
             </div>
           </div>
         </Link>
          </li>
        ))}
      </ul>
      <Link
        to={ROUTES.newTopicRoute()}
        className="button create-new-topic-button"
      >
        Create New Topic
      </Link>
    </section>
  );
}

export default Topics;