import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { QuizzesSlice, QuizProps } from "./QuizzesInterface";
import { useAppDispatch } from "../../app/hooks";
import { addQuizId } from "../topics/topicsSlice";
import { ThunkAction } from "@reduxjs/toolkit";
import { AnyAction } from "@reduxjs/toolkit";

export const createQuizAndAddIdToTopic = (payload: QuizProps): ThunkAction<void, RootState, unknown, AnyAction> => {
    return(useAppDispatch) => {
        useAppDispatch(addQuiz(payload));
        useAppDispatch(addQuizId(payload.id));
    }
}

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