import create from 'zustand';
import createEditorSlice from './createEditorSlice';

const useStore = create<EdiorSlice>((set, get) => ({
  ...createEditorSlice(set, get)
}))

export default useStore;