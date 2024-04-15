import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IntroPage from "./pages/IntroPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />,
  },
  {
    path: "/quotes",
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
