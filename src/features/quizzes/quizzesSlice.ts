import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { QuizzesSlice, QuizProps } from "./QuizzesInterface";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {quizzes: {}} as QuizzesSlice,
    reducers: {
        addQuiz: (state, action) => {
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        }
    },
})

const { addQuiz } = quizzesSlice.actions;
const selectQuizzes = (state: RootState) => state.quizzes;

export default quizzesSlice.reducer;