import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import React from "react";

const RedditPremium = () => {
  return (
    <div className="flex h-[90px] w-[310px] bg-white rounded-md  p-1">
      <ShieldCheckIcon className="h-8" />
      <div className="ml-1 text-[12px]">
        <p className="text-[#1A1A1A] ">Reddit Premium</p>
        <p className="text-gray-500">The Best Reddit Experience</p>
        <button className="w-[250px] h-[32px] cursor-not-allowed bg-orange-500 text-white font-bold rounded-full">
          Try Now
        </button>
      </div>
    </div>
  );
};

export default RedditPremium;
