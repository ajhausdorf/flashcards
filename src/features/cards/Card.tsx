import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { SingleCard, CardProps, CardsWrapper } from "./CardInterface";
import { selectCards } from './cardsSlice';

interface Props {
  id: string
}

const Card: React.FC<Props> = ({ id }) => {
  const cards: CardsWrapper = useSelector(selectCards); // replace this with a call to your selector to get all the cards in state
  const card: CardProps = cards['cards'][id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}

export default Card;