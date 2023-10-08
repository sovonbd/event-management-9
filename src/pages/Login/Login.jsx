import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-20">
      <Card className="w-96 mx-auto">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">
            Sign In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input label="Email" size="lg" />
          <Input label="Password" size="lg" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Sign In
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Don&apos;t have an account?
            <Link to="/register">
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                Sign up
              </Typography>
            </Link>
          </Typography>
          <div
            className="my-8 text-center border-b border-gray-400"
            style={{ lineHeight: "0px" }}>
            <span
              className="p-2 text-xs font-semibold tracking-wide text-gray-600  bg-white"
              style={{ lineHeight: "0px" }}>
              Or login with
            </span>
          </div>
          <div className="flex gap-4">
            <Button
              fullWidth
              className="bg-transparent text-black border border-gray-400 shadow-none normal-case flex items-center gap-2 text-base py-2">
              <FcGoogle className="text-3xl"></FcGoogle>
              <span>Google</span>
            </Button>
            <Button
              fullWidth
              className="bg-transparent text-black border border-gray-400 shadow-none normal-case flex items-center gap-2 text-base py-2">
              <FaGithub className="text-3xl"></FaGithub> <span>Github</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
