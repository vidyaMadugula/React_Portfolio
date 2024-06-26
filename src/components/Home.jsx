import React from "react";
// import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
// import { Animator, Fade, ScrollContainer, ScrollPage, Sticky ,batch,MoveOut} from "react-scroll-motion";

const Home = () => {
  
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black via-black to-gray-800 sm:w-full sm:h-screen md:h-screen md:w-full h-screen "
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row w-full">
        <div className="flex flex-col justify-center h-full w-full ">
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white ">
            I'm 
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold text-white">Front-End Developer</h2>

          {/* <ScrollContainer>
            <ScrollPage page={0}>
              <Animator animation={batch(Fade(),Sticky(),MoveOut())}>
              <h2 className="text-3xl sm:text-7xl font-bold text-white">Front-End Developer</h2>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
           */}


          {/* <p className="text-gray-500 py-4 max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p> */}

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          {/* <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
