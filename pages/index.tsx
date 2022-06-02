/* eslint-disable @next/next/no-img-element */
import BasicCard from '@components/cards/BasicCard';
import { useDispatch, useEditorStore } from '@store/EditorContext'
import { toPng } from 'html-to-image';
import { getImgFileBase64 } from 'lib';
import type { NextPage } from 'next'
import { useCallback, useRef } from 'react';

const Home: NextPage = () => {
  const dispatch = useDispatch() as any;
  const editorState = useEditorStore() as any;
  const ref = useRef<HTMLDivElement>(null);

  const handleChange = async (e:any) => {
    const file = e.target.files[0];
    const imgUrl = await getImgFileBase64(file)
    dispatch({ type: "changeCover", payload: imgUrl });
  }

  const handleSave = useCallback(() => {
    if (ref.current === null) return;
    const node = ref.current;
    const scale = 3;
    const style = {
      transform: 'scale(' + scale + ')',
      'transform-origin': 'top left',
      width: node.offsetWidth + "px",
      height: node.offsetHeight + "px",
    }
    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      style
    }
    toPng(node, param)
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'qianyan.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className="grow flex w-full">
      <div className="w-[15%] h-full space-y-6 pr-4 flex flex-col">
        <div className="flex flex-col">
          <div className="font-semibold">Cover</div>
          <label className="w-full rounded" htmlFor="uploader">
            <img className="rounded drop-shadow-md" src={editorState.cover} alt="cover" width="100%" height="100%" />
          </label>
          <input type="file" onChange={handleChange} name="cover" id="uploader" hidden accept="image/*" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="content">Content</label>
          <textarea className="shadow-md p-2 text-xl"
            name="content" id="content" cols={30} rows={5}
            value={editorState.content}
            onChange={(e) => {
              dispatch({ type: "changeContent", payload: e.target.value })
            }}></textarea>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="name">Name</label>
          <input className="h-12 p-2 text-xl shadow-md border-solid rounded-lg border-[#949494]"
            type="text"
            name="name"
            value={editorState.name}
            onChange={(e) => {
              dispatch({ type: "changeName", payload: e.target.value })
            }}
            id="name" />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="author">Author/Ref</label>
          <input className="h-12 p-2 text-xl shadow-md border-solid rounded-lg border-[#949494]"
            type="text"
            name="author"
            value={editorState.author}
            onChange={(e) => {
              dispatch({ type: "changeAuthor", payload: e.target.value })
            }}
            id="author" />
        </div>
      </div>
      <div className="grow py-4 bg-[#F5F5F5] flex flex-col items-center">
        <BasicCard ref={ref} />
        <button className="flex justify-center items-center font-sans text-2xl text-[#3b3b3b] mt-6 w-[320px] h-14 rounded-md shadow-md bg-[#ffffff]" 
          onClick={handleSave}>
            save
        </button>
      </div>
      <div className="w-[15%] flex justify-center items-center">
        Working In Progress...
      </div>
    </div>
  )
}

export default Home
