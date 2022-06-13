import { GetState, SetState } from "zustand";
import { AppState } from "./useStore";

export interface CardInfoSlice {
  currentCard: string;
  changeCard: (cardName: string) => void;
}

const createCardInfoSlice = (
  set: SetState<AppState>,
  get: GetState<AppState>
) => ({
  currentCard: 'Basic',
  changeCard: (cardName: string) => {
    set((prev: AppState) => ({ ...prev, currentCard: cardName }))
  },
})

export default createCardInfoSlice;