import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

const Quote = ({ badQuote }) => {
  const { author, quote } = badQuote;

  return (
    <>
      <button className="text-white mx-4 absolute md:left-8 px-4 my-2 text-xs">
        <Link to="/" className="underline mr-2">
          Back to Intro
        </Link>
        /
        <span className="ml-2 cursor-default">
          Refresh the page to get new quote.
        </span>
      </button>
      <article className=" p-4 text-white mx-4 flex justify-center items-center h-screen flex-col   max-w-[800px] md:w-[800px] md:absolute md:top-28 md:left-8 md:h-auto md:block">
        <p className="text-lg tracking-wide font-medium text-start ">
          {author}
        </p>
        <h3 className="text-4xl tracking-wide mt-4 text-yellow-300 font-semibold break-words">
          {quote && (
            <TypeAnimation
              splitter={(str) => str.split(/(?= )/)}
              sequence={[quote, 3000, ""]}
              speed={{ type: "keyStrokeDelayInMs", value: 60 }}
              omitDeletionAnimation={true}
              style={{ fontSize: "1em", display: "block", minHeight: "200px" }}
              repeat={Infinity}
            />
          )}
        </h3>
      </article>
    </>
  );
};

export default Quote;
