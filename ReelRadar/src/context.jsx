import { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get movies by name

  const getMovies = async (movieName) => {
    const url = `https://www.omdbapi.com/?s=${
      movieName ? movieName : "avengers"
    }&apikey=${import.meta.env.VITE_API_KEY}`;
    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setMovies(response.data.Search);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <AppContext.Provider value={{ getMovies, movies, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
