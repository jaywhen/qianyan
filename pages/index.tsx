import CardInfoList from '@components/cardbar/CardInfoList';
import BasicCard from '@components/cards/BasicCard';
import NovaCard from '@components/cards/NovaCard';
import MemoCard from '@components/cards/MemoCard';
import Editor from '@components/Editor';
import useStore from '@store/useStore';
import { toPng } from 'html-to-image';
import type { NextPage } from 'next'
import { useCallback, useRef, useState } from 'react';

const Home: NextPage = () => {
  const currentCard = useStore(state => state.currentCard);
  const [loading, setLoading] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
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
  
  // TODO cards tmplate
  const cards: any = {
    'Basic': <BasicCard ref={ref} />,
    'Nova': <NovaCard ref={ref} />,
    'Memo': <MemoCard ref={ref} />,
  }

  return (
    <div className="grow flex w-full pl-6 pr-4">
      <Editor />
      <div className="grow py-4 bg-[#F5F5F5] flex flex-col justify-center items-center">
        { cards[currentCard] }
        <button disabled={loading} className="flex justify-center items-center font-sans text-2xl text-[#3b3b3b] mt-6 w-[320px] h-14 rounded-md shadow-md bg-[#fff]"
          onClick={handleSave}>
          {loading ?
            <span className="h-5 w-5 mr-3 border-2 border-t-transparent border-solid rounded-full border-[#aca8a8c9] animate-spin"></span>
            : null
          }
          {loading ? 'Processing...' : 'Save'}
        </button>
      </div>
      <div className="w-[15%] px-2 py-4">
        <CardInfoList />
      </div>
    </div>
  )
}

export default Home
