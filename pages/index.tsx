/* eslint-disable @next/next/no-img-element */
import BasicCard from '@components/cards/BasicCard';
import { useDispatch, useEditorStore } from '@store/EditorContext'
import { toPng } from 'html-to-image';
import { getCroppedImg, getImgFileBase64, rotateSize } from 'lib';
import type { NextPage } from 'next'
import { useCallback, useRef, useState } from 'react';
import Cropper from 'react-easy-crop';

const Home: NextPage = () => {
  const dispatch = useDispatch() as any;
  const editorState = useEditorStore() as any;
  const ref = useRef<HTMLDivElement>(null);

  // button state test
  const [loading, setLoading] = useState(false);

  // crop
  const [cropImg, setCropImg] = useState('');
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])
  const onCropOKClick = useCallback(async () => {
    try {
      const cropedImg = await getCroppedImg(
        cropImg,
        croppedAreaPixels,
      )
      dispatch({ type: "changeCover", payload: cropedImg });
      setCropImg("");
    } catch(e) {
      console.log(e)
    }
  }, [cropImg, croppedAreaPixels, dispatch])

  const handleChange = async (e: any) => {
    const file = e.target.files[0];
    const imgUrl = await getImgFileBase64(file) as string;
    // dispatch({ type: "changeCover", payload: imgUrl });
    setCropImg(imgUrl)
  }


  const handleSave = useCallback(() => {
    setLoading(true);
    if (ref.current === null) return;
    const node = ref.current;
    const scale = 6;
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
        link.download = 'your-masterpiece.png'
        link.href = dataUrl
        link.click()
        setLoading(false)
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
        {cropImg ?
          <div className="fixed flex flex-col justify-center items-center top-0 z-10 w-full h-full backdrop-blur-md bg-white/30">
            <div className="font-serif text-2xl font-bold text-[#232323] mb-4">Resizing ...</div>
            <div className="relative shadow-md shadow-[#0b0a0a] w-[800px] h-[600px] bg-[#483737]">
              <Cropper
                image={cropImg}
                crop={crop}
                aspect={1 / 1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
              />
            </div>
            <button onClick={onCropOKClick} className="mt-4 w-60 h-14 bg-[#ffffff] shadow-lg">OK</button>
          </div> :
          null
        }
        <BasicCard ref={ref} />
        <button disabled={loading} className="flex justify-center items-center font-sans text-2xl text-[#3b3b3b] mt-6 w-[320px] h-14 rounded-md shadow-md bg-[#fff]"
          onClick={handleSave}>
          {loading ?
            <span className="h-5 w-5 mr-3 border-2 border-t-transparent border-solid rounded-full border-[#aca8a8c9] animate-spin"></span>
            : null
          }
          {loading ? 'Processing...' : 'Save'}
        </button>
      </div>
      <div className="w-[15%] flex justify-center items-center">
        Working In Progress...
      </div>
    </div>
  )
}

export default Home
