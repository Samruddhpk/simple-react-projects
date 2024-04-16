import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  //   console.log(error);
  if (error.status === 404) {
    return (
      <div className="h-screen w-full text-center text-4xl flex flex-col justify-center items-center gap-4">
        <h1>404</h1>
        <h4>The page you're looking for is not found.</h4>
      </div>
    );
  }

  return <div className="h-screen w-full">{error.message}</div>;
};

export default Error;
