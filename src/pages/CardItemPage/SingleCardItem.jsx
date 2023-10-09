import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import StickyNavbar from "../../components/Header/Navbar/StickyNavbar";
import { toast } from "react-toastify";

const SingleCardItem = ({ cardItem }) => {
  const { id, title, image, price, description, date, location } = cardItem;

  const handleButton = () => {
    toast.success("Congratulations!!! Event booking complete.");

  };

  return (
    <div>
      <Card className="lg:px-32 lg:py-10 overflow-hidden">
        <div className="relative h-screen w-full">
          <img src={image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4 pt-10">
              <Typography
                variant="lead"
                color="white"
                className="mb-3 text-sm lg:text-xl opacity-80">
                {date}
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-6xl">
                {title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-6 lg:mb-12 text-sm lg:text-xl opacity-80">
                {location}
              </Typography>
              <div className="flex justify-center gap-2">
                <Button
                  onClick={handleButton}
                  size="lg"
                  color="white"
                  className="normal-case text-xl">
                  Buy Ticket for ${price}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <CardBody className="px-8 lg:px-0">
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 text-base pb-4">
            {description}
          </Typography>
        </CardBody>
        <div></div>
      </Card>
    </div>
  );
};

export default SingleCardItem;
