import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const CardItem = ({ card }) => {
  const { id, title, image, description, date, location } = card;

  // const parts = locaiton.split(' ');

  return (
    <div className="py-6">
      <Card className="max-w-[24rem] mx-auto overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none">
          <img
            src={image}
            className="h-[260px] w-full"
            alt="ui/ux review check"
          />
        </CardHeader>
        <CardBody>
          <div className="flex justify-between pb-6">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt></FaMapMarkerAlt>
              <Typography className="font-normal normal-case">
                {location.split(" ")[0]},{" "}
                {location.split(" ")[location.split(" ").length - 1]}
              </Typography>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCalendarAlt></FaRegCalendarAlt>
              <Typography className="font-normal">{date}</Typography>
            </div>
          </div>
          <Typography variant="h4" color="blue-gray" className="text-xl">
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 text-base pb-4 text-start">
            {description.split(" ").slice(0, 13).join(" ")}
            {description.split(" ").length > 20 ? "... " : ""}
            <Link to={`/conferences/${id}`} className="text-blue-800 font-bold">
              Read More
            </Link>
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
};

export default CardItem;
