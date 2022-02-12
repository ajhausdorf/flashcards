  export interface CardsSlice {
    cards: CardsWrapper;
  }
  export interface CardsWrapper {
    [key: string]: SingleCard;
  }
  export interface SingleCard {
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