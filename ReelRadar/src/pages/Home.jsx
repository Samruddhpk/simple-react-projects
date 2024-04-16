import React from "react";
import Search from "../components/Search";
import MovieContainer from "../components/MovieContainer";

const HomePage = () => {
  return (
    <section className="flex flex-col justify-start items-center p-8">
      <Search />
      <MovieContainer />
    </section>
  );
};

export default HomePage;
