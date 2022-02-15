import { createSlice } from "@reduxjs/toolkit";
import { CardsWrapper } from "./CardInterface";
import { RootState } from "../../app/store";

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {cards: {}} as CardsWrapper,
    reducers: {
        addCard: (state, action) => {
            return {
                ...state,
                cards: {
                    ...state.cards,
                    [action.payload.id]: action.payload
                }
            }
        }
    }
})

export const selectCards = (state: RootState) => state.cards
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;