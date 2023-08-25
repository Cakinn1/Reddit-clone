import React from "react";
import HomePage from "./HomePage";
import Posts from "./Posts";
import Sorting from "./Sorting";

const SubReddit = () => {
  return (
    <>
      <Sorting />
      <Posts customHeight={60} />
    </>
  );
};

export default SubReddit;
