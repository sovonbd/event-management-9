import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CardItem = ({ card }) => {
  const { id, title, image, price, description, date } = card;
  
  return (
    <div className="py-6">
      <Card className="max-w-[24rem] mx-auto overflow-hidden">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none">
          <img src={image} className="h-[260px] w-full" alt="ui/ux review check" />
        </CardHeader>
        <CardBody>
          <Typography className="font-normal">{date}</Typography>
          <Typography variant="h4" color="blue-gray" className="text-xl">
            {title}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 text-base pb-4">
            {description.split(" ").slice(0, 15).join(" ")}
            {description.split(" ").length > 20 ? " ..." : ""}
          </Typography>
          <Link to={`/conferences/${id}`} className="text-blue-800 font-bold">
            Read More
          </Link>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            <Tooltip content="Natali Craig">
              <Avatar
                size="sm"
                variant="circular"
                alt="natali craig"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
            <Tooltip content="Tania Andrew">
              <Avatar
                size="sm"
                variant="circular"
                alt="tania andrew"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                className="border-2 border-white hover:z-10"
              />
            </Tooltip>
          </div>
          <Typography className="font-normal">January 10</Typography>
        </CardFooter> */}
      </Card>
    </div>
  );
};

export default CardItem;
