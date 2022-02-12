export type QuizzesParams = {
    quizId: string;
};

  export interface QuizzesSlice {
    quizzes: QuizzesWrapper;
  }
  export interface QuizzesWrapper {
    [key: string]: SingleQuiz;
  }
  export interface SingleQuiz {
    id: string;
    topicId: string;
    name: string;
    cardIds: string[]
  }
  

// {"quizzes": {
//     "quizzes": {
//        "456": {
//         "id": "string",
//         "topicId": "string",
//         "name": "string",
//         "cardIds": ["789", "101"];
//       }
//     }
//   }}