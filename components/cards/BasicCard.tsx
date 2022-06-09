/* eslint-disable @next/next/no-img-element */
import useStore from "@store/useStore";
import { toPng } from "html-to-image"
import Image from "next/image";
import { forwardRef, useCallback } from "react"

const BasicCard = (props: any, ref: any) => {
  const saveImg = useCallback(() => {
    if (ref.current === null) {
      return
    }
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
          link.download = 'qianyan.png'
          link.href = dataUrl
          link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])
  const cover = useStore(state => state.cover);
  const content = useStore(state => state.content);
  const name = useStore(state => state.name);
  const author = useStore(state => state.author);
  return (
    <>
      <div ref={ref} className="flex font-serif flex-col items-center py-4 px-6 bg-white w-[320px] h-[660px]">
        <img className="drop-shadow-xl rounded" alt="cover" src={cover} width="270px" height="270px" />
        <div className="mt-6 py-4 leading-loose text-xl whitespace-pre-line w-full border-t-2 border-b-2 border-dashed border-[#2C2C2C]">
          {content}
        </div>
        <div className="text-lg mt-4 text-[#414141] self-end">
          {`「${name}」—— ${author}`}
        </div>
        <div className="self-end mt-8">
          <Image src="/card-logo.svg" alt="card-log" width="86px" height="17px" />
        </div>
      </div>
    </>
  )
}

export default forwardRef(BasicCard);