import React from "react";

const SubRedditHeader = ({ header }) => {
  return (
    <>
      <div className="flex items-center pt-3  pb-2 ">
        <img src="/ReddiT.png" className="h-10 pl-2 hidden md:flex" alt="" />
        <h1 className="md:ml-4 ml-1 font-bold text-md ">{header}</h1>
      </div>
      <hr className="ml-[94px] mr-[40px] hidden md:flex " />
    </>
  );
};

export default SubRedditHeader;
