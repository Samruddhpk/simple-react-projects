import mainBanner from "../assets/main_banner.jpeg";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <main
      style={{ backgroundImage: `url(${mainBanner})` }}
      className="h-screen w-full flex justify-center items-center bg-cover bg-center bg-no-repeat "
    >
      <div className="h-screen w-full bg-black bg-opacity-60 flex justify-center items-center relative tracking-wider">
        <Link to="/quotes" className="absolute top-24">
          <button className="bg-black text-white rounded-sm opacity-50 shadow-lg font-medium p-4 px-12 text-3xl  hover:bg-yellow-200 transition duration-300 hover:text-black">
            Get Quote
          </button>
        </Link>
      </div>
    </main>
  );
};

export default IntroPage;
