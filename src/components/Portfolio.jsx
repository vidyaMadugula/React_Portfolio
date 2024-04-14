

// https://github.com/vidyaMadugula/travel_website
// https://github.com/vidyaMadugula/cryptoapp
// https://github.com/vidyaMadugula/youtube
import React, { useRef } from "react";
import TravelWebsite from "../assets/TravelWebsite.mp4";
import YouTube from "../assets/YouTube.mp4";
import CryptoApp from "../assets/CryptoApp.mp4";

const Portfolio = () => {
  const videoRefs = useRef([]);

  const handleHover = (index) => {
    videoRefs.current[index].play();
  };

  const handleMouseLeave = (index) => {
    videoRefs.current[index].pause();
    videoRefs.current[index].currentTime = 0;
  };

  const portfolios = [
    {
      id: 1,
      src: YouTube,
      description:"ReactPlay is a modern video-sharing platform built with React.js,offering users the ability to stream videos seamlessly With a sleek user interface and responsive design.It is built using modern front-end technologies, including React, Redux Toolkit, Tailwind CSS, and other libraries",
        // "ReactPlay is a modern video-sharing platform built with React.js, offering users the ability to stream and upload videos seamlessly. With a sleek user interface and responsive design, ReactPlay provides an immersive viewing experience",
      link: "https://github.com/vidyaMadugula/youtube",
    },
    {
      id: 2,
      src: CryptoApp,
      description:
        "Cryptoverse is a Cryptocurrency web application developed using Reactjs for providing the latest updates, value statistics, market cap, supply, and news regarding the Cryptocurrency market.",
      link: "https://github.com/vidyaMadugula/cryptoapp",
    },
    {
      id: 3,
      src: TravelWebsite,
      description:
        "The travel website project aims to create an interactive and visually appealing platform for users to explore and provides information about various destinations. Technologies used HTML, CSS, JavaScript.",
      link: "https://github.com/vidyaMadugula/travel_website",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800  text-white md:h-fit md:w-full w-fit h-fit pb-10"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, description, link }, index) => (
            <div className=" flex sm:flex-col md:flex-row flex-col" key={id}>
              <div
                key={id}
                className="z-10 rounded-lg duration-200 hover:scale-125 overflow-hidden mr-10 mb-10 scale-110 sm:w-10/12 sm:pl-20 sm:m-0 md:pl-0 md:m-6 md:w-12/12"
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  loop
                  muted
                  className="w-full h-96"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col items-center justify-center sm:w-10/12 md:w-4/12 w-12/12 mt-10 ml-14">
                <div className="">{description}</div>
                <div className="flex items-center justify-center">
                  <a
                    href={src}
                    className="text-white w-fit px-6 py-3 m-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mr-32"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={link}
                    className="text-white w-fit px-6 py-3 m-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
