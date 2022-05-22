import { toPng } from "html-to-image"
import html2canvas from "html2canvas";
import { ChangeEvent, useCallback, useRef, useState } from "react"
import Button from "../Button";

const BasicCard = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [content, setContent] = useState('Typing something...');

  const typing = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }
    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'my-image-name.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  const html2can = useCallback(() => {
    if (ref.current === null) {
      return
    }
    html2canvas(ref.current, {
      scale: window.devicePixelRatio * 12
    }).then(canvas => {
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a')
      link.download = 'my-image-name.png'
      link.href = dataUrl
      link.click()
    })
  }, [ref])
  // bg-gradient-[-50deg] from-[#ffffff80] to-[#ffffffd9]
  return (
    <div className='flex justify-center flex-col items-center'>
      <textarea placeholder='Typing something...'
        onChange={typing}
        wrap='hard'
        autoFocus={true}
        className='caret-pink-500 my-4 p-2 shadow-md text-lg w-80'></textarea>
      <div ref={ref} className='p-4 w-[24rem] h-[18rem]  sm:w-[42rem] sm:h-[28rem] bg-gradient-135 from-[#0a6d53bc] via-[#4269d3dc] to-[#6f63daca] shadow-xl'>
        <div className='w-full h-full flex flex-col justify-center items-center'>
          <div className='text-xl sm:text-4xl border-2 border-slate-100 font-SourceCodePro flex justify-center items-center backdrop-blur-md bg-gray-50 text-black p-2 w-full h-8/12 flex-1 rounded-xl shadow-xl'>
            {content}
          </div>
          <div className='text-zinc-100 text-md self-end font-Righteous'>
            Made by qianyan
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center space-x-6 mt-6'>
        <Button text='html2image' onClick={onButtonClick} />
        <Button text='html2canvas' onClick={html2can} />
      </div>
    </div>
  )
}

export default BasicCard;