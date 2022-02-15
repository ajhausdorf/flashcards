export type TopicParams = {
    topicId: string;
};

export interface TopicsSlice {
    topics: TopicsWrapper
}

export interface TopicsWrapper {
    topics: SingleTopic
}

export interface SingleTopic {
    [key: string]: TopicProps
}

export interface TopicProps {
    id: string;
    name: string;
    icon: string;
    quizIds?: string[] | null;
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