import { Typography, Button } from "@material-tailwind/react";
import { useState } from "react";
import Swal from "sweetalert2";
import Sponsors from "../Sponsors/Sponsors";
import Marquee from "react-fast-marquee";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    Swal.fire({
      icon: "success",
      title: "Thank you for subscribing!",
      text: "You're now part of our community. Expect exciting updates in your inbox soon. Stay tuned!",
      confirmButtonColor: "black",
    });
    setEmail("");
  };

  return (
    <div>
      <div className="relative h-80 lg:h-96">
        <img
          style={{
            backgroundImage: "url('https://i.imgur.com/DuFpvMY.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
          alt=""
          className="w-full h-80 lg:h-96"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
          <div className="w-full text-center lg:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mx-auto mb-2 w-max text-2xl font-medium md:text-3xl lg:text-5xl">
              Subscribe to stay informed
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 font-thin lg:mb-12 text-sm lg:text-xl opacity-40">
              Shortest way to explore what will happen on Inconference
            </Typography>
            <div className="flex justify-center">
              <input
                type="email"
                name="email"
                id=""
                value={email}
                placeholder="your email address..."
                className="w-1/2 py-4 rounded-full px-6 rounded-r-none bg-transparent border border-white text-white font-light focus:outline-none placeholder:text-gray-700"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                onClick={handleSubscribe}
                size="lg"
                color="white"
                className="bg-white px-8 md:px-16 rounded-r-full font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Marquee className="py-16">
        <Sponsors></Sponsors>
      </Marquee>{" "}
    </div>
  );
};

export default Subscribe;
