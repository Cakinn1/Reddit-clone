import {
  Bars3Icon,
  ChatBubbleLeftRightIcon,
  EllipsisHorizontalIcon,
  RocketLaunchIcon,
  SunIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sorting = ({ bgColor }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  const bg = {
    backgroundColor: `${bgColor}`,
  };

  useEffect(() => {
    const loadingTimes = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimes);
  }, []);

  return (
    <>
      <div
        className={`bg-white rounded-sm  mr-10 lg:w-[640px] h-[60px] mt-6 ml-10 xl:ml-40`}
        style={bg}
      >
        <div className="pt-2 pl-4">
          <div className="flex gap-x-4 relative">
            {loading ? (
              new Array(6).fill().map((_, index) => (
                <button
                  key={index}
                  className={`bg-gray-300 mt-2  animate-pulse justify-center items-center gap-x-2 bg-opacity-40 font-semibold 
               hover:bg-[#DAE0E6] hover:bg-opacity-60 ease-in-out flex
                rounded-full p-2 ${
                  activeButton === "best" ? "bg-[#DAE0E6]" : null
                }`}
                  onClick={() => {
                    handleButtonClick("best");
                    return alert(
                      "have not had time to create this ;-(, will be able to sort by likes ;-)"
                    );
                  }}
                >
                  <span className=" h-4 w-12" />
                  <p className="w-4"></p>
                  {/* most liked */}
                </button>
              ))
            ) : (
              <>
                <button
                  className={` justify-center items-center gap-x-2 bg-opacity-40 font-semibold 
               hover:bg-[#DAE0E6] hover:bg-opacity-60 ease-in-out flex
                rounded-full p-2 ${
                  activeButton === "best" ? "bg-[#DAE0E6]" : null
                }`}
                  onClick={() => {
                    handleButtonClick("best");
                    return alert(
                      "have not had time to create this ;-(, will be able to sort by likes ;-)"
                    );
                  }}
                >
                  <RocketLaunchIcon className="h-5" />
                  <p>Best</p>
                  {/* most liked */}
                </button>

                <button
                  className={`justify-center items-center gap-x-2 font-semibold 
            hover:bg-[#DAE0E6] hover:bg-opacity-60 ease-in-out  md:flex
              rounded-full p-2 lg:cursor-not-allowed ${
                activeButton === "comments" ? "bg-opacity-40 bg-[#DAE0E6]" : ""
              }`}
                  onClick={() => handleButtonClick("comments")}
                >
                  <ChatBubbleLeftRightIcon className="h-5 hidden lg:flex" />
                  <p className="hidden lg:flex">Comments</p>
                  <Link to="/subReddit/Everything">
                    <button className="lg:hidden">Create Post</button>
                  </Link>
                  {/* comments obivs lol */}
                </button>
                <button
                  className={`justify-center items-center gap-x-2 font-semibold 
            hover:bg-[#DAE0E6] hover:bg-opacity-60 ease-in-out hidden md:flex
              rounded-full p-2 cursor-not-allowed 
              `}
                  onClick={() => handleButtonClick("New")}
                >
                  <SunIcon className="h-5" />
                  <p>New</p>
                </button>
                <button
                  className={`hidden md:flex justify-center items-center gap-x-2 font-semibold 
            hover:bg-[#DAE0E6] hover:bg-opacity-60 ease-in-out
              rounded-full p-2 cursor-not-allowed 
            `}
                  onClick={() => handleButtonClick("Top")}
                >
                  <TrophyIcon className="h-5" />
                  <p>Top</p>
                </button>
                <button
                  className={`md:flex justify-center items-center gap-x-2 font-semibold 
            hover:bg-[#DAE0E6] hover:bg-opacity-60 cursor-not-allowed ease-in-out absolute right-0 mr-14 mt-1 md:static
              rounded-full p-2 
              `}
                >
                  <EllipsisHorizontalIcon className="h-5 cursor-not-allowed" />
                </button>
                <div className="absolute right-0  m-3 mr-5 cursor-not-allowed">
                  <Bars3Icon className="h-5" />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
