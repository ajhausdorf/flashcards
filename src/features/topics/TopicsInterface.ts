export type TopicParams = {
    topicId: string;
};

export interface TopicsSlice {
    topics: TopicsWrapper
}

export interface TopicsWrapper {
    [key: string]: SingleTopic
}

export interface SingleTopic {
    id: string;
    name: string;
    icon: string;
    quizIds: string[];
}

// topics: {
//     topics: {
//       '123': {
//         id: '123',
//         name: 'example topic',
//         icon: 'icon url',
//         quizIds: ['456']
//       }
//     }
//   }