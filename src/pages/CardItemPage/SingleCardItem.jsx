import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import StickyNavbar from "../../components/Header/Navbar/StickyNavbar";
import Swal from "sweetalert2";

const SingleCardItem = ({ cardItem }) => {
  const { id, title, image, price, description, date } = cardItem;

  const handlebutton = () => {
    Swal.fire({
      icon: "success",
      title: "Congratulations !!!",
      text: "Event booking complete! Get ready to have a blast.",
      confirmButtonColor: "black",
    });
  };

  return (
    <div>
      <div className="bg-black">
        <StickyNavbar></StickyNavbar>
      </div>
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
                TORONTO EXHIBITION CENTER, CANADA
              </Typography>
              <div className="flex justify-center gap-2">
                <Button
                  onClick={handlebutton}
                  size="lg"
                  color="white"
                  className="normal-case text-xl">
                  Buy Ticket for ${price}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <CardBody className="px-0">
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
