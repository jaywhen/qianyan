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
  content: '我住的城市从不下雪\n记忆却堆满冷的感觉\n思念的旺季\n霓虹扫过喧哗的街',
  name: '圣诞结',
  author: '何启弘',
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