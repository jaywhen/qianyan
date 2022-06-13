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
  cover: '/cover.png',
  content: '有时候，有时候\n我会相信一切有尽头\n相聚离开，都有时候\n没有什么是永垂不朽',
  name: '红豆',
  author: '林夕',
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