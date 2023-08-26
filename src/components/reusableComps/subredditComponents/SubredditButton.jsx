import React from "react";

const SubredditButton = ({ text, title, fetchPost }) => {
  return (
    <>
      <div className="flex justify-end mr-4 ">
        {text && title ? (
          <>
            <button
              className="bg-blue-500 text-white shadow-md  rounded-full px-5 py-2 "
              onClick={fetchPost}
            >
              Create post
            </button>
          </>
        ) : (
          <>
            <button
              className="bg-blue-500 text-white rounded-full  shadow-md  px-5 py-2 cursor-not-allowed opacity-50"
              disabled
            >
              Create post
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default SubredditButton;
