import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SingleMovie from "./pages/SingleMovie";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "/movie/:id",
        element: <SingleMovie />,
        errorElement: <Error />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
