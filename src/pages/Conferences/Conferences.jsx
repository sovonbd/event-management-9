import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CardItem from "../../components/Card/CardItem";
import { Button } from "@material-tailwind/react";

const Conferences = () => {
  const [cards, setCards] = useState([]);
  const [dataLength, setDataLength] = useState(6);

  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);

  const handleSeeAllBtn = () => {
    setDataLength(cards.length);
  };
  return (
    <div className="lg:px-24">
      <div className="py-10 text-center">
        <h2 className="text-3xl lg:text-5xl lg:pb-4">Featured Conferences</h2>
        <img
          src="https://i.imgur.com/BGzObsJ.jpg"
          className="mx-auto lg:pb-10"
          alt=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-0 lg::grid-cols-3 px-3 justify-around">
          {cards.slice(0, dataLength).map((card) => (
            <CardItem key={card.id} card={card}></CardItem>
          ))}
          <div className="md:col-span-2 lg:col-span-3 text-center">
            <div
              className={
                cards.length < 6 || dataLength === cards.length ? "hidden" : ""
              }>
              <Button
                onClick={handleSeeAllBtn}
                className="py-3 rounded-md normal-case text-base">
                See All
              </Button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Conferences;
