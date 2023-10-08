import CarouselWithContent from "../../components/Header/Carousel/CarouselWithContent";
import StickyNavbar from "../../components/Header/Navbar/StickyNavbar";
import { useEffect, useState } from "react";
import CardItem from "../../components/Card/CardItem";
import Subscribe from "../../components/Subscribe/Subscribe";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [cards, setCards] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    // fetch("data.json")
    //   .then((res) => res.json())
    //   .then((data) => setCards(data));
    if (data) {
      setCards(data);
    }
  }, [data]);

  return (
    <div>
      <div className="relative">
        <StickyNavbar></StickyNavbar>
        <div className="absolute top-0">
          <CarouselWithContent className=""></CarouselWithContent>
        </div>
      </div>
      <div className="relative top-[300px] lg:top-[600px] lg:px-24 lg:py-10 text-center">
        <h2 className="text-3xl lg:text-5xl lg:pb-4">Featured Conferences</h2>
        <img
          src="https://i.imgur.com/BGzObsJ.jpg"
          className="mx-auto lg:pb-10"
          alt=""
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-0 lg::grid-cols-3 px-3 justify-around">
          {cards.slice(0, 6).map((card) => (
            <CardItem key={card.id} card={card}></CardItem>
          ))}
        </div>
      </div>
      <div className="relative top-[360px] lg:top-[620px] pb-10">
        <Subscribe></Subscribe>
      </div>
    </div>
  );
};

export default Home;
