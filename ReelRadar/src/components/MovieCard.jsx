import { Link } from "react-router-dom";

const MovieCard = ({ Title, Year, Type, Poster, imdbID }) => {
  return (
    <Link to={`/movie/${imdbID}`}>
      <article className=" w-[300px] md:w-[350px] flex flex-col items-center bg-black-300 rounded-lg h-full bg-slate-950 shadow-slate-400  shadow-sm hover:scale-105 transition-all duration-300 hover:shadow-slate-600 hover:shadow-lg">
        <div className="w-full ">
          <img
            src={Poster ? Poster : ""}
            alt="movieImg"
            className="block object-center w-full h-[300px] rounded-t-lg "
          />
        </div>

        <div className="text-center p-8">
          <h3 className=" text-xl tracking-wide  whitespace-pre-wrap font-semibold  text-violet-100 mb-2">
            {Title}
          </h3>
          <h4 className="tracking-wider font-semibold text-sm mb-4 text-violet--300 whitespace-nowrap text-ellipsis">
            {Year && Year}
          </h4>
          <h5 className="text-slate-500 font-semibold">{Type && Type}</h5>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
