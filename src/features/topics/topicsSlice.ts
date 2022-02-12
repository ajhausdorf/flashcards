import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TopicsSlice, TopicProps, SingleTopic } from './TopicsInterface';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {topics: {}} as TopicsSlice,
    reducers: {
        addTopic: (state, action: PayloadAction<TopicProps>) => {
            return {
                ...state, 
                [action.payload.id]: action.payload
            }
        },
        addQuizId: (state, action) => {
            return {
                ...state,
                [action.payload.id]: {
                    quizIds:  [action.payload]
                }
            }
        }
    },
})

export const { addTopic, addQuizId } = topicsSlice.actions;
export const selectTopics = (state: RootState) => state.topics;

export default topicsSlice.reducer;