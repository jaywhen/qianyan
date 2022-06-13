import { Card } from "@components/cards";
import useStore from "@store/useStore";
import { FC } from "react";

const CardInfo: FC<{info: Card}> = ({ info }) => {
  const changeCard = useStore(state => state.changeCard);
  const currentCard = useStore(state => state.currentCard);
  const theme = currentCard === info.name ? 
  "cursor-pointer rounded shadow-gray-600 shadow-md border-solid border-2 border-gray-600 p-2 w-full h-36 flex flex-col justify-between" : 
  "cursor-pointer rounded text-[#838383] border-solid border-2 p-2 w-full h-36 flex flex-col justify-between";
  return (
    <div onClick={e => changeCard(info.name)}
      className={theme}>
      <div className="text-2xl font-bold">{info.name}</div>
      <div className="font-serif text-[#838383]">
        by <a href={info.homepage} target="_blank" rel="noreferrer">{info.author}</a>
      </div>
    </div>
  );
};

export default CardInfo;