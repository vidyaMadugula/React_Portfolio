import React from "react";
import Travel from "../assets/portfolio/Travel.jpeg";
import Crypto from "../assets/portfolio/Crypto.jpeg";
import Youtube from "../assets/portfolio/Youtube.jpeg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Travel,
      description:"The travel website project aims to create an interactive and visually appealing platform for users to explore and provides information about various destinations. Technologies used HTML,CSS,Java Script.",
    },
    {
      id: 2,
      src: Crypto,
      description:"Cryptoverse is a Cryptocurrency web application developed using Reactjs for providing the latest updates, value statistics, market cap ,supply and news regarding the Cryptocurrency market. ",
    },
    {
      id: 3,
      src: Youtube,
      description:"ReactPlay is a modern video-sharing platform built with React.js, offering users the ability to stream and upload videos seamlessly. With a sleek user interface and responsive design, ReactPlay provides an immersive viewing experience",
    },
    
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,description}) => (
          <div className="flex sm:flex-row md:flex-row flex-col ">
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg mr-10 h-96 sm:h-48">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-fit md:h-fit h-96"
              />
              </div>
              <div className="flex flex-col items-center justify-center sm:w-8/12 w-10/12 mt-10">
                <div className="">
                  {description}
                </div>
                <div className="flex items-center justify-center">
                <button className="text-white w-fit px-6 py-3 m-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mr-32">
                  Demo
                </button>
                <button className=" text-white w-fit px-6 py-3 m-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Code
                </button>
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



{/* <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-fit h-fit pb-28"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 pt-24">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 gap-8 px-12 sm:px-0 h-3/6 ">
          {portfolios.map(({ id, src ,description}) => (
          <div className="flex flex-row">
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg mr-10">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-fit md:h-fit"
              />
              </div>
              <div className="flex flex-col items-center justify-center w-8/12">
                <div className="">
                  {description}
                </div>
                <div className="flex items-center justify-center">
                <button className="text-white w-fit px-6 py-3 m-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer mr-32">
                  Demo
                </button>
                <button className=" text-white w-fit px-6 py-3 m-10 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                    Code
                </button>
                </div>
  
              </div>
              
              
          </div>
            
             */}

