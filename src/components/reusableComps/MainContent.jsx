import {
  ArrowUturnRightIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import UserInfoBlock from "./UserInfoBlock";

const MainContent = ({
  subReddit,
  postedBy,
  timeCreated,
  titlePost,
  number,
}) => {
  const iconData = [
    {
      icon: <ChatBubbleLeftRightIcon className="h-5" />,
      label: " Comments",
    },
    { icon: <GiftIcon className=" h-5" />, label: <p>Award</p> },
    { icon: <ArrowUturnRightIcon className="hidden md:flex h-5" />, label: <p className="hidden md:flex">Share</p>},
    { icon: <BookmarkIcon className="hidden md:flex h-5" />, label:<p className="hidden md:flex">Save</p> },
    { icon: <EllipsisHorizontalIcon className=" h-5" /> },
  ];
  return (
    <div className="p-2 relative w-full ">
      <UserInfoBlock
        subReddit={subReddit}
        postedBy={postedBy}
        timeCreated={timeCreated}
        titlePost={titlePost}
      />
      <div className="absolute bottom-2 flex items-center md:gap-x-3 gap-x-1 text-[#878A8C] mt-1 mr-1">
        {iconData.map((data, index) => (
          <div
            key={index}
            className={`flex items-center gap-x-1 ${
              index === 0 ? "cursor-pointer" : "cursor-not-allowed"
            } ${
              index === 0
                ? "hover:bg-[#878A8C] hover:rounded-md hover:bg-opacity-20 p-1"
                : ""
            }`}
          >
            <span>{data.icon}</span>
            {index === 0 && (
              <span className={`text-sm ${index === 0 ? number : ""}`}>
                {number}
              </span>
            )}
            <span className="text-sm">{data.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
