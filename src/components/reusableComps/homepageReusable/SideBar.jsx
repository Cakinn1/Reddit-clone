import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SideBar = ({
  likes,
  postId,
  handleLikeButton,
  handleUnlikeButton,
  userHasLiked,
}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const sidebarStyle = "w-[35px] h-full bg-[#DAE0E6] bg-opacity-40 ";

  const handleLike = () => {
    if (!userHasLiked) {
      handleLikeButton(postId);
    } 
    handleButtonClick("arrowUp");
  };

  const handleUnlike = () => {
    if (userHasLiked) {
      handleUnlikeButton(postId);
    }
    console.log('userHasLiked after handleUnlike:', userHasLiked)
    handleButtonClick("arrowDown");
  };

  return (
    <div className={sidebarStyle}>
      <div className="pt-2 items-center flex flex-col ">
        <ArrowUpIcon
          className={`h-6 mx-auto cursor-pointer hover:bg-[#DAE0E6] hover:bg-opacity-60 ${
            activeButton === "arrowUp" ? "bg-[#DAE0E6] bg-opacity-60" : ""
          }`}
          onClick={handleLike}
        />
        <p className="font-bold text-[10px] mx-1 my-1">{likes}</p>
        <ArrowDownIcon
          className={`h-6 mx-auto cursor-pointer hover:bg-[#DAE0E6] hover:bg-opacity-60 ${
            activeButton === "arrowDown" ? "bg-[#DAE0E6] bg-opacity-60" : ""
          }`}
          onClick={handleUnlike}
        />
      </div>
    </div>
  );
};

export default SideBar;
