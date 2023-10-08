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
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="py-20">
      <Card className="w-96 mx-auto">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">
            Create Account
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
            Sign Up
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Already have an account?
            <Link to="/login">
              <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold">
                Login here
              </Typography>
            </Link>
          </Typography>
          
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
