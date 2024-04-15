import { useEffect, useState } from "react";

import heroImg from "../assets/hero-img.jpg";
import Quote from "../components/Quote";

const url = "https://api.breakingbadquotes.xyz/v1/quotes";

const HomePage = () => {
  const [badQuote, setBadQuote] = useState("");

  const getQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const quoteData = data[0];
    setBadQuote(quoteData);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <main
      className="h-screen w-full bg-right-bottom bg-cover bg-no-repeat flex items-center justify-start sm:justify-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="h-screen w-full bg-black opacity-60 relative ">
        <Quote badQuote={badQuote} />
      </div>
    </main>
  );
};

export default HomePage;

//
