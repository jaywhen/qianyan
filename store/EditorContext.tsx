import { createContext, useContext, useReducer, useRef } from "react";

const initState = {
  cover: '/cover.png',
  content: '有时候，有时候\n我会相信一切有尽头\n相聚离开，都有时候\n没有什么是永垂不朽',
  name: '红豆',
  author: '林夕',
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "changeCover":
      return { ...state, cover: action.payload };
    case "changeContent":
      return { ...state, content: action.payload };
    case "changeName":
      return { ...state, name: action.payload };
    case "changeAuthor":
      return { ...state, author: action.payload };
    default:
      return state;
  }
}

const EditorStateContext = createContext(null);
const DispatchContext = createContext(null);

const useEditorStore = () => {
  return useContext(EditorStateContext);
}

const useDispatch = () => {
  return useContext(DispatchContext);
}

const EditorStoreProvider = ({ children }: any) => {
  const [state, dispatch]: [any, any] = useReducer(reducer, initState);
  return (
    <EditorStateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </EditorStateContext.Provider>
  );
}

export { useEditorStore, useDispatch, EditorStoreProvider };
