import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import SocialLinks from "./SocialLinks.jsx";

const Speakers = () => {
  const [cards, setCards] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);
  return (
    <div className="lg:px-24 text-center py-20">
      <div className="space-y-4">
        <p className="uppercase tracking-[5px] text-xs">Team Member</p>
        <p className="text-6xl">Our Speakers</p>
        <img
          src="https://i.imgur.com/BGzObsJ.jpg"
          className="mx-auto py-4"
          alt=""
        />
      </div>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            return (
              <div key={card.id} className="rounded-lg hover:shadow-lg py-4">
                <img
                  src={card.image}
                  className="rounded-full h-60 w-60 mx-auto"
                  alt={card.name}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{card.name}</h3>
                  <p className="text-black/50 text-sm tracking-[4px]">{card.job_position}</p>
                  <SocialLinks></SocialLinks>
                </div>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
};

export default Speakers;
