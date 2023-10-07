import CarouselWithContent from "../../components/Header/Carousel/CarouselWithContent";
import StickyNavbar from "../../components/Header/Navbar/StickyNavbar";

const Home = () => {
  return (
    <div className="relative">
      <StickyNavbar></StickyNavbar>
      <div className="absolute top-0">
        <CarouselWithContent className=""></CarouselWithContent>
      </div>
    </div>
  );
};

export default Home;
