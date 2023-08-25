import { UserIcon } from "@heroicons/react/24/outline";
import React from "react";

const UserInfoBlock = ({subReddit, postedBy, timeCreated, titlePost}) => {
  return (
    <>
      <div className="flex  items-center gap-x-1 text-[10px]  ">
        <UserIcon className="h-3 rounded-full" />
        <p className="font-semibold">r/{subReddit}</p>
        <p className="text-[#787c7e]">Posted By ul/{postedBy}</p>
        <p className="text-[#787c7e]">{timeCreated}</p>
      </div>
      <div>
        <p className="text-[14px] mt-1">{titlePost}</p>
      </div>
      <hr />
      <textarea className="w-full outline-green-500"
      style={{resize: 'none'}} 
      placeholder="Write in here!"></textarea>
    </>
  );
};

export default UserInfoBlock;

