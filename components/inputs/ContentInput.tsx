import useStore from "@store/useStore";

const ContentInput = () => {
  const content = useStore(state => state.content);
  const changeContent = useStore(state => state.changeContent);

  return (
    <div className="flex flex-col">
      <label className="font-semibold" htmlFor="content">Content</label>
      <textarea className="shadow-md p-2 text-xl"
        name="content" id="content" cols={30} rows={5}
        value={content}
        onChange={(e) => {
          changeContent(e.target.value);
        }}></textarea>
    </div>
  );
}

export default ContentInput;