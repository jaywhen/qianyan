/* eslint-disable @next/next/no-img-element */
import useStore from "@store/useStore";
import Image from "next/image";
import { ForwardedRef, forwardRef } from "react"

const BasicCard = forwardRef((props: any, ref: ForwardedRef<HTMLDivElement>) => {
  const cover = useStore(state => state.cover);
  const content = useStore(state => state.content);
  const name = useStore(state => state.name);
  const author = useStore(state => state.author);
  return (
    <div ref={ref} className="flex justify-center items-center font-serif py-8 bg-white w-[380px]">
      <div className="flex flex-col font-serif items-center py-4 px-6 bg-white w-[320px] shadow-md">
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
    </div>
  )
})

BasicCard.displayName = 'BasicCard';

export default BasicCard;