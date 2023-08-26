import React from "react";

const SubredditText = ({text, setText, title}) => {
  return (
    <>
      <div className="">
        <textarea
          placeholder={`${
            title === "" ? "Please include a title" : "Write The Text"
          }`}
          className="bg-transparent w-full outline-none  no-scrollbar  overflow-y-scroll resize-none h-[80px]"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <hr className="pb-2 " />
      </div>
    </>
  );
};

export default SubredditText;
