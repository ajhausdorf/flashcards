import React, { SyntheticEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { CardsWrapper, SingleCard, CardProps } from "../features/cards/CardInterface";
import { SingleTopic, TopicProps } from "../features/topics/TopicsInterface";

const NewQuizForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [cards, setCards] = useState<CardProps[]>([]);
  const [topicId, setTopicId] = useState<string>("");
  const history = useHistory();
  const topics: SingleTopic= {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length === 0) {
      return;
    }

    const cardIds: string[] = [];

    // create the new cards here and add each card's id to cardIds
    // create the new quiz here

    history.push(ROUTES.quizzesRoute());
  };

  const addCardInputs = (e: React.SyntheticEvent) => {
    e.preventDefault();
    //setCards(cards.concat({ front: "", back: "" }));
  };

  const removeCard = (e: React.SyntheticEvent, index: number) => {
    e.preventDefault();
    setCards(cards.filter((card, i) => index !== i));
  };

  const updateCardState = (index: number, side: string, value: string) => {
    const newCards = cards.slice();
    // newCards[index][side] = value;
    // setCards(newCards);
  };

  return (
    <section>
      <h1>Create a new quiz</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="quiz-name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Quiz Title"
        />
        <select
          id="quiz-topic"
          onChange={(e) => setTopicId(e.currentTarget.value)}
          placeholder="Topic"
        >
          <option value="">Topic</option>
          {Object.values(topics).map((topic: TopicProps) => (
            <option key={topic.id} value={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
        {cards.map((card, index) => (
          <div key={index} className="card-front-back">
            <input
              id={`card-front-${index}`}
              value={cards[index].front}
              onChange={(e) =>
                updateCardState(index, "front", e.currentTarget.value)
              }
              placeholder="Front"
            />

            <input
              id={`card-back-${index}`}
              value={cards[index].back}
              onChange={(e) =>
                updateCardState(index, "back", e.currentTarget.value)
              }
              placeholder="Back"
            />

            <button
              onClick={(e) => removeCard(e, index)}
              className="remove-card-button"
            >
              Remove Card
            </button>
          </div>
        ))}
        <div className="actions-container">
          <button onClick={addCardInputs}>Add a Card</button>
          <button>Create Quiz</button>
        </div>
      </form>
    </section>
  );
}

export default NewQuizForm;