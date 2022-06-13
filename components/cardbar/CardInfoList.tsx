import cards, { Card } from "@components/cards";
import { FC, Fragment } from "react";
import CardInfo from "./CardInfo";

const CardInfoList = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="font-bold text-xl">Templates</div>
      {cards.map((cardInfo: Card, index: number) => {
        return (
          <Fragment key={index}>
            <CardInfo info={cardInfo} />
          </Fragment>
        )
      })}
    </div>
  );
};

export default CardInfoList;