import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const CarouselWithContent = () => {
  return (
    <div>
      <Carousel
        className=""
        autoplay = {true}
        autoplayDelay	= {5000}
        loop = {true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 lg:top-96 md:left-4 -translate-y-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext}) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}          
            className="!absolute top-2/4 lg:top-96 !right-0 md:!right-4 -translate-y-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}>
        <div className="relative h-screen w-full">
          <img
            src="https://i.imgur.com/aP3ZdAV.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 pt-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-3 text-sm lg:text-xl opacity-80">
                OCTOBER 20 - 24, 2023, CANADA
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-6xl">
                Innovation Conference
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 lg:mb-12 text-sm lg:text-xl opacity-80">
                TORONTO EXHIBITION CENTER, CANADA
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Register Now
                </Button>
                <Button
                  size="sm"
                  color="white"
                  variant="text"
                  className="border">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="https://i.imgur.com/TVVjzK8.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 pt-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-3 text-sm lg:text-xl opacity-80">
                OCTOBER 26 - 29, 2023, CANADA
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-6xl">
                Development Conference
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 lg:mb-12 text-sm lg:text-xl opacity-80">
                VANCOUVER EXHIBITION CENTER, CANADA
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Register Now
                </Button>
                <Button
                  size="sm"
                  color="white"
                  variant="text"
                  className="border">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="https://i.imgur.com/g0cayQq.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 pt-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-3 text-sm lg:text-xl opacity-80">
                NOVEMBER 4 - 7, 2023, CANADA
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-6xl">
                Production Conference
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 lg:mb-12 text-sm lg:text-xl opacity-80">
                CALGARY EXHIBITION CENTER, CANADA
              </Typography>
              <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Register Now
                </Button>
                <Button
                  size="sm"
                  color="white"
                  variant="text"
                  className="border">
                  Explore More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselWithContent;
