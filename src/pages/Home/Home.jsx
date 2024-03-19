import TextTransition, { presets } from "react-text-transition";
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const TEXTS = ["Hi, I'm Chetan", "I'm a Software Developer"];

function Home() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="home-container">
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
          <TextTransition springConfig={presets.gentle}>
            {TEXTS[index % TEXTS.length].split(" ").map((word, idx) => (
              <span
                key={idx}
                style={
                  word === "Chetan"
                    ? { color: "#d4a98e", fontWeight: "bold" }
                    : { color: "#8ea6d4" }
                }
              >
                {word}{" "}
              </span>
            ))}
          </TextTransition>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-4 mt-4">
          <Link to="/contact">
            <button className="navb bg-[#b58863] hover:bg-[#d3c3b9] text-[#161618] font-bold py-2 px-4 sm:px-6 lg:px-8 rounded-lg mb-4 sm:mb-0">
              Contact
            </button>
          </Link>
          <Link to="/about">
            <button className="navb bg-[#b58863] hover:bg-[#d3c3b9] text-[#161618] font-bold py-2 px-4 sm:px-6 lg:px-8 rounded-lg mb-4 sm:mb-0">
              Know More
            </button>
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="mailto:chetan.anand710@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d3c3b9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </Link>
          <Link
            to="https://www.linkedin.com/in/chetan-anand-791681185/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d3c3b9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
