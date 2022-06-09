import { GetState, SetState } from "zustand";

const createEditorSlice = (set: SetState<EdiorSlice>, get: GetState<EdiorSlice>) => ({
  cover: '/cover.png',
  content: '有时候，有时候\n我会相信一切有尽头\n相聚离开，都有时候\n没有什么是永垂不朽',
  name: '红豆',
  author: '林夕',
  changeCover: (newCover: string) => {
    set((prev: EdiorSlice) => ({...prev, cover: newCover}))
  },
  changeContent: (newContent: string) => {
    set((prev: EdiorSlice) => ({...prev, content: newContent}))
  },
  changeName: (newName: string) => {
    set((prev: EdiorSlice) => ({...prev, name: newName}))
  },
  changeAuthor: (newAuthor: string) => {
    set((prev: EdiorSlice) => ({...prev, author: newAuthor}))
  },
})

export default createEditorSlice;