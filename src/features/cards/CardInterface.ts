export interface CardsSlice {
    cards: CardsWrapper;
  }
  export interface CardsWrapper {
    cards: SingleCard;
  }
  export interface SingleCard {
    [key: string]: CardProps;
  }
  export interface CardProps {
    id: string;
    front: string;
    back: string;
  }
  

// {"cards": {
//     "cards": {
//       "string": {
//         "id": "string",
//         "front": "string",
//         "back": "string"
//       }
//     }
//   }}