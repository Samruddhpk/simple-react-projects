import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const url = `https://www.omdbapi.com/?`;

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    setLoading(true);
    try {
      const response = await axios(
        `${url}i=${id}&apikey=${import.meta.env.VITE_API_KEY}`
      );
      setMovie(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getMovie();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center w-full mt-20">
        <h1 className="text-4xl  font-semibold animate-pulse">Loading...</h1>
      </div>
    );
  }

  const {
    Actors,
    Awards,
    BoxOffice,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Rated,
    Released,
    Runtime,
    Title,
    Type,
    Writer,
    imdbRating,
    imdbVotes,
    Ratings,
  } = movie;

  return (
    <section className="p-6 ">
      <span className="font-semibold mb-8">
        <Link to="/">Home /</Link>
        <span className="underline ml-1  text-slate-200">{Title}</span>
      </span>

      {movie && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 my-10">
          {/* image container */}
          <div className="block w-[500px] h-full rounded-lg ">
            <img
              src={Poster}
              alt="image"
              className="w-full rounded-lg object-center block h-[30rem]"
            />
          </div>
          {/* movie info */}
          <div className=" font-semibold">
            {/* title */}
            <h1 className="text-4xl tracking-widest font-semibold text-slate-100 mb-8 ">
              {Title}
            </h1>
            {/* cast : actors,directors */}
            <div className="flex flex-col gap-3 mt-4 tracking-wide text-slate-300 text-sm lg:text-md">
              <h4>Actors: {Actors}</h4>
              <h4>Director: {Director}</h4>
              <h4>Writer: {Writer}</h4>
              <h4>Awards: {Awards}</h4>
              <p>Genre: {Genre}</p>
              <p>Language: {Language}</p>
              <h4>Plot: {Plot}</h4>
              {/* released year,run time,imdbRating,imdbVotes */}
              <div className="flex  justify-between">
                <div className="flex flex-col gap-1 ">
                  <h4>Released: {Released}</h4>
                  <h4>Run Time: {Runtime}</h4>
                </div>
                <div className="flex flex-col gap-1 ">
                  <h4>Country: {Country}</h4>
                  <h4>BoxOffice: {BoxOffice}</h4>
                </div>
                <div className="flex flex-col gap-1 ">
                  <h4>Rated: {Rated}</h4>
                  <h4 className="capitalize">Type: {Type}</h4>
                </div>
              </div>
              <div className="flex flex-col gap-1 ">
                <h4>imdb Rating: {imdbRating}</h4>
                <h4>imdb Votes: {imdbVotes}</h4>
              </div>

              <h4 className="flex gap-4 whitespace-pre-line">
                Ratings:
                {Ratings?.map((rating) => {
                  const { Source, Value } = rating;
                  return (
                    <p key={Value}>
                      <span>{Source}:</span> <span>{Value}</span>
                    </p>
                  );
                })}
              </h4>
            </div>
          </div>
        </section>
      )}
    </section>
  );
};

export default SingleMovie;
