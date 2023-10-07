import { useLoaderData } from "react-router-dom";
import CarouselWithContent from "../../components/Header/Carousel/CarouselWithContent";
import StickyNavbar from "../../components/Header/Navbar/StickyNavbar";
import { useEffect, useState } from "react";
import CardItem from "../../components/Card/Card";
import Subscribe from "../../components/Subscribe/Subscribe";

const Home = () => {
  const [cards, setCards] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    if (data) {
      setCards(data);
    }
  }, [data]);
  // console.log(cards);

  return (
    <div>
      <div className="relative">
        <StickyNavbar></StickyNavbar>
        <div className="absolute top-0">
          <CarouselWithContent className=""></CarouselWithContent>
        </div>
      </div>
      <div className="relative top-[300px] lg:top-[600px] lg:px-24 lg:py-10 text-center">
        <h2 className="text-3xl lg:text-5xl lg:pb-10">Featured Conferences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-0 lg::grid-cols-3 justify-around">
          {cards.slice(0,6).map((card) => (
            <CardItem key={card.key} card={card}></CardItem>
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
