import useStore from "@store/useStore";

const AuthorInput = () => {
  const changeAuthor = useStore(state => state.changeAuthor);
  const author = useStore(state => state.author);

  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor="author">Author/Ref</label>
      <input className="h-12 p-2 text-xl shadow-md border-solid rounded-lg border-[#949494]"
        autoComplete="off"
        type="text"
        name="author"
        value={author}
        onChange={(e) => {
          changeAuthor(e.target.value);
        }}
        id="author" />
    </div>
  );
}

export default AuthorInput;