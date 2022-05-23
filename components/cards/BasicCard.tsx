import { toPng } from "html-to-image"
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react"
import Button from "../Button";

const BasicCard = () => {
  // useEffect(() => {
  //   alert(navigator.platform)
  // }, [])
  const ref = useRef<HTMLDivElement>(null)
  const [content, setContent] = useState('Typing something...');
  const [isHidden, setIsHidden] = useState(true);
  const [imgUrl, setImgUrl] = useState('');
  const [imgWidth, setImgWidth] = useState('');
  const [imgHight, setImgHight] = useState('');

  const onClose = () => {
    setIsHidden(true);
  }

  const typing = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }
    const node = ref.current;
    const scale = 12;
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
        // const link = document.createElement('a')
        // link.download = 'my-image-name.png'
        // link.href = dataUrl
        // link.click()
        const hight = ref.current?.clientHeight
        const width = ref.current?.clientWidth
        setImgHight(`${hight}px`)
        setImgWidth(`${width}px`)
        setImgUrl(dataUrl)
        setIsHidden(false);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  // bg-gradient-[-50deg] from-[#ffffff80] to-[#ffffffd9]
  return (
    <div className='relative flex justify-center flex-col items-center'>
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
      </div>
      <div style={{ display: isHidden ? 'none' : 'flex' }} onClick={() => setIsHidden(true)} className='fixed top-0 justify-center items-center h-full min-w-full z-10 bg-white/30 backdrop-blur-lg'>
        <div id='saveImg' className='left-1/2 top-1/2'>
          <img width={imgWidth} height={imgHight} src={imgUrl} alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default BasicCard;