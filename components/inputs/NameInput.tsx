import useStore from "@store/useStore";

const NameInput = () => {
  const name = useStore(state => state.name);
  const changeName = useStore(state => state.changeName);
  
  return (
    <div className="flex flex-col space-y-4">
      <label className="font-bold text-xl" htmlFor="name">Name</label>
      <input className="h-12 p-2 text-xl shadow-md border-solid rounded-lg border-[#949494]"
        autoComplete="off"
        type="text"
        name="name"
        value={name}
        onChange={(e) => {
          changeName(e.target.value);
        }}
        id="name" />
    </div>
  );
}

export default NameInput;