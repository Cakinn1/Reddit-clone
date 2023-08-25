import React from "react";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="flex h-[320px] w-[310px] bg-white rounded-md  my-10 relative">
      <figure className="absolute top-0">
        <img src="redditBanner.png" alt="" />
      </figure>
      <div className="mt-9 z-10 p-1">
        <div className="flex items-center gap-x-4">
          <img
            src="redditpng.png"
            className="h-16 top-6 left-4 absolute"
            alt=""
          />
          <p className="mb-3 ml-16 pt-3">Home</p>
        </div>

        <h1 className="text-[#1c1c1c] text-sm">
          Your personal Reddit fontpage. Come here to check in with your
          favorite communities
        </h1>
        <hr className="my-2" />
        <Link to="/subReddit/">

        <button className="bg-blue-600 shadow-lg h-[36px] w-full rounded-full text-white font-bold">
          Create Post
        </button>
        </Link>
        <button className="text-blue-600 shadow-lg h-[36px] w-full rounded-full bg-white border-blue-600 border font-bold mt-3">
          Create Community
        </button>
      </div>
    </div>
  );
};

export default MainSection;
