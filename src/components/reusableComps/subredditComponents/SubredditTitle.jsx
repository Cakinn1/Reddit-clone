import React, { useState } from "react";

const SubredditTitle = ({title, setTitle}) => {
  return (
    <>
      <textarea
        placeholder={`Write the Title`}
        className="bg-transparent w-full outline-none overflow-y-scroll no-scrollbar resize-none h-[20px] mb-2"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      ></textarea>
      <hr />
    </>
  );
};

export default SubredditTitle;
