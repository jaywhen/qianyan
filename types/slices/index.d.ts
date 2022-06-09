interface EdiorSlice {
  cover: string;
  content: string;
  name: string;
  author: string;
  changeCover: (newCover: string) => void;
  changeContent: (newContent: string) => void;
  changeName: (newName: string) => void;
  changeAuthor: (newAuthor: string) => void;
}