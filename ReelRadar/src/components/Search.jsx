import { useState } from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { getMovies } = useGlobalContext();
  const [movieName, setMovieName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(movieName);
    setMovieName("");
  };

  return (
    <div className="form-container mb-24">
      <h2 className=" text-3xl md:text-5xl tracking-widest font-bold mb-8 text-white text-center">
        ReelRadar
      </h2>

      <form
        className="max-w-[500px] md:w-[600px] flex gap-4 flex-col items-center md:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Avengers: End Game"
          className="w-full p-4 rounded-md  outline-none bg-violet-50 font-semibold text-black "
          name="movieName"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button
          className="p-4 rounded-md text-white font-semibold tracking-wide cursor-pointer bg-violet-700 hover:bg-violet-500 transition-all duration-300 ease-in-out "
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
