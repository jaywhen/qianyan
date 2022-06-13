import create from 'zustand';
import createCardInfoSlice, { CardInfoSlice } from './createCardInfoSlice';
import createEditorSlice from './createEditorSlice';
import { EdiorSlice } from './createEditorSlice';

export type AppState = EdiorSlice & CardInfoSlice;

const useStore = create<AppState>((set, get) => ({
  ...createEditorSlice(set, get),
  ...createCardInfoSlice(set, get)
}))

export default useStore;