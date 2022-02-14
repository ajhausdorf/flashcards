import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { QuizzesSlice, QuizProps, QuizzesWrapper } from "./QuizzesInterface";
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
    initialState: {quizzes: {}} as QuizzesWrapper,
    reducers: {
        addQuiz: (state, action) => {
            return {
                ...state,
                quizzes: {
                    ...state.quizzes,
                    [action.payload.id]: action.payload
                }
            }
        }
    },
})

export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state: RootState) => state.quizzes;

export default quizzesSlice.reducer;