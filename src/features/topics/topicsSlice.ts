import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TopicProps, TopicsWrapper } from './TopicsInterface';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}} as TopicsWrapper,
    reducers: {
        addTopic: (state, action: PayloadAction<TopicProps>) => {
            return {
                ...state, 
                topics: {
                    ...state.topics,
                    [action.payload.id]: action.payload
                }
            }
        },
        addQuizId: (state, action) => {
            const {topicId, quizId} = action.payload;
            const quizIds = state.topics[topicId].quizIds;
            if(quizIds === null || quizIds === undefined) {
                state.topics[topicId].quizIds = [quizId]
            }
            else if(quizIds?.length > 0) {
                state.topics[topicId].quizIds?.push(quizId)
            }
        }
    },
})

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state: RootState) => state.topics;

export default topicsSlice.reducer;