import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { TopicsSlice, TopicProps, SingleTopic } from './TopicsInterface';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {} as TopicsSlice,
    reducers: {
        addTopic: (state, action: PayloadAction<TopicProps>) => {
            return {
                ...state, 
                [action.payload.id]: action.payload
            }
        },
    },
})

export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state: RootState) => state.topics;

export default topicsSlice.reducer;