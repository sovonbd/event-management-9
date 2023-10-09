import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

const ErrorPage = () => {
  return (
    <div className="h-[70vh] my-auto flex flex-col justify-center items-center gap-2 text-center">
      <div>
        <h1 className="text-8xl font-bold">404</h1>
        <p className="font-semibold">Page Not Found</p>
      </div>
      <Link to="/">
        <Button
          variant="filled"
          size="sm"
          fullWidth
          className="mb-2 px-8 py-4 bg-black/90 text-white">
          <Link to="/login">Return to Home</Link>
        </Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
