export type QuizzesParams = {
    quizId: string;
};

  export interface QuizzesSlice {
    quizzes: QuizzesWrapper;
  }

  export interface QuizzesWrapper {
    quizzes: SingleQuiz;
  }
  export interface SingleQuiz {
    [key: string]: QuizProps;
  }
  export interface QuizProps {
    id: string;
    topicId: string;
    name: string;
    cardIds?: string[] | null;
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