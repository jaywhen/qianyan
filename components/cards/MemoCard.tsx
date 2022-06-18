/* eslint-disable @next/next/no-img-element */
import useStore from "@store/useStore";
import { ForwardedRef, forwardRef } from "react"

const MemoCard = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
  const cover = useStore(state => state.cover);
  const content = useStore(state => state.content);
  const name = useStore(state => state.name);
  const author = useStore(state => state.author);
  return (
    <div ref={ref}>
      <div className="flex justify-center items-center font-serif py-8 bg-white w-[380px]">
        <div style={{ "backgroundImage": `url(${cover})` }}
          className="drop-shadow-md bg-no-repeat bg-contain rounded flex font-serif items-center text-white w-[320px] h-[320px]">
          <div className="bg-black/20 w-full h-full rounded flex flex-col justify-center">
            <div className="text-center text-xl leading-loose whitespace-pre-line">
              {content}
            </div>
            <div className="text-center italic mt-4">
              {name} —— {author}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center items-center font-serif py-8 bg-white w-[380px]">
        <div style={{ "backgroundImage": `url(${cover})` }}
          className="drop-shadow-md bg-no-repeat bg-contain rounded flex font-serif items-center text-white w-[320px] h-[320px]">
          <div className="bg-white/30 backdrop-blur-md w-full h-full rounded flex flex-col justify-center">
            <div className="text-center text-xl leading-loose whitespace-pre-line">
              {content}
            </div>
            <div className="text-center text-lg italic">
              {name} —— {author}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
})

MemoCard.displayName = 'MemoCard';

export default MemoCard;