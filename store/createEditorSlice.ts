import { GetState, SetState } from "zustand";
import { AppState } from "./useStore";

export interface EdiorSlice {
  cover: string;
  content: string;
  name: string;
  author: string;
  changeCover: (newCover: string) => void;
  changeContent: (newContent: string) => void;
  changeName: (newName: string) => void;
  changeAuthor: (newAuthor: string) => void;
}

const createEditorSlice = (
  set: SetState<AppState>,
  get: GetState<AppState>
) => ({
  cover: '/cover.jpg',
  content: '沒有新的衣服能让你爱恋\n总有一种天气让我怀念',
  name: '热河',
  author: '李志',
  changeCover: (newCover: string) => {
    set((prev: AppState) => ({ ...prev, cover: newCover }))
  },
  changeContent: (newContent: string) => {
    set((prev: AppState) => ({ ...prev, content: newContent }))
  },
  changeName: (newName: string) => {
    set((prev: AppState) => ({ ...prev, name: newName }))
  },
  changeAuthor: (newAuthor: string) => {
    set((prev: AppState) => ({ ...prev, author: newAuthor }))
  },
})

export default createEditorSlice;