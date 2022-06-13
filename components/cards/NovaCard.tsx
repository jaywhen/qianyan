/* eslint-disable @next/next/no-img-element */
import useStore from "@store/useStore";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react"

const NovaCard = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
  const cover = useStore(state => state.cover);
  const content = useStore(state => state.content);
  const name = useStore(state => state.name);
  const author = useStore(state => state.author);
  return (
    <div ref={ref}
      className="flex justify-center items-center font-serif py-4 px-6 bg-white w-[320px]">
      <div className="flex flex-col space-y-6 py-4 px-6 bg-white w-[3000px] rounded shadow-md">
        <div className="flex items-center space-x-2">
          <img className="drop-shadow-xl rounded" alt="cover" src={cover} width="60px" height="60px" />
          <div className="flex flex-col">
            <div>{name}</div>
            <div>{author}</div>
          </div>
        </div>
        <div className="leading-loose text-xl whitespace-pre-line">
          {content}
        </div>
        <div>
          <Image src="/card-logo.svg" alt="card-log" width="86px" height="17px" />
        </div>
      </div>
    </div>
  )
})

NovaCard.displayName = 'NovaCard';

export default NovaCard;