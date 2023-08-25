import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SideBar = ({ likes }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const sidebarStyle = "w-[35px] h-[500px] bg-[#DAE0E6] bg-opacity-40 ";
  return (
    <>
      <div className={sidebarStyle}>
        <div className="pt-2 items-center flex flex-col ">
          <ArrowUpIcon
            className={`h-6 mx-auto cursor-pointer hover:bg-[#DAE0E6] hover:bg-opacity-60 ${
              activeButton === "arrowUp" ? "bg-[#DAE0E6] bg-opacity-60" : ""
            }`}
            onClick={() => handleButtonClick("arrowUp")}
          />
          <p className="font-bold text-[10px] mx-1 my-1 ">{likes}</p>
          <ArrowDownIcon
            className={`h-6 mx-auto cursor-pointer hover:bg-[#DAE0E6] hover:bg-opacity-60 ${
              activeButton === "arrowDown" ? "bg-[#DAE0E6] bg-opacity-60" : ""
            }`}
            onClick={() => handleButtonClick("arrowDown")}
          />
        </div>
      </div>
    </>
  );
};

export default SideBar;
