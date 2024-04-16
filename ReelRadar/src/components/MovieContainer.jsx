import { useGlobalContext } from "../context";
import MovieCard from "./MovieCard";

const MovieContainer = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return <h1 className="text-4xl animate-pulse font-semibold">Loading...</h1>;
  }

  if (!movies) {
    return (
      <section className="w-full text-center ">
        <h3 className="font-bold text-3xl text-violet-400">
          No results found... try different one!
        </h3>
      </section>
    );
  }

  return (
    <section className=" w-full grid justify-items-center grid-cols-1 gap-8 md:grid-cols-2 md:gap-28 lg:grid-cols-3 lg:gap-20">
      {movies.map((movie) => {
        return <MovieCard {...movie} key={movie.imdbID} />;
      })}
    </section>
  );
};

export default MovieContainer;
