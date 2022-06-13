import AuthorInput from "./inputs/AuthorInput";
import ContentInput from "./inputs/ContentInput";
import CoverUploader from "./inputs/CoverUploader";
import NameInput from "./inputs/NameInput";

const Editor = () => {
  return (
    <div className="w-[15%] h-full space-y-6 pr-4 py-4 flex flex-col">
      <CoverUploader />
      <ContentInput />
      <NameInput />
      <AuthorInput />
    </div>
  );
}

export default Editor;