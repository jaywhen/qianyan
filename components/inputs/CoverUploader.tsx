/* eslint-disable @next/next/no-img-element */
import useStore from "@store/useStore";
import { getCroppedImg, getImgFileBase64 } from "lib";
import { ChangeEvent, useCallback, useState } from "react";
import Cropper from "react-easy-crop";

const CoverUploader = () => {
  const cover = useStore(state => state.cover)
  const changeCover = useStore(state => state.changeCover);
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
      ) as string
      changeCover(cropedImg);
      setCropImg("");
    } catch (e) {
      console.log(e)
    }
  }, [cropImg, croppedAreaPixels, changeCover])

  const chooseImgFromLocal = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    const imgFile = files[0];
    // TODO type optimize
    const imgUrl = await getImgFileBase64(imgFile) as string;
    setCropImg(imgUrl)
  }
  
  return (
    <div className="flex flex-col">
      <div className="font-semibold">Cover</div>
      <label className="w-full rounded" htmlFor="uploader">
        <img className="rounded drop-shadow-md"
          src={cover} alt="cover" width="100%" height="100%" />
      </label>
      <input type="file" onChange={chooseImgFromLocal} name="cover" id="uploader" hidden accept="image/*" />
      {cropImg ?
        <div className="fixed flex flex-col justify-center items-center left-0 top-0 z-10 w-full h-full backdrop-blur-md bg-white/30">
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
    </div>
  );
}

export default CoverUploader;