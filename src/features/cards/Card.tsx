import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CardsWrapper, SingleCard } from "./CardInterface";

interface Props {
  id: string
}

const Card: React.FC<Props> = ({ id }) => {
  const cards: CardsWrapper = {}; // replace this with a call to your selector to get all the cards in state
  const card: SingleCard = cards[id];
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