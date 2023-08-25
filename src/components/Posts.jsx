import React from "react";
import ImageSection from "./reusableComps/ImageSection";
import MainContent from "./reusableComps/MainContent";
import SideBar from "./reusableComps/SideBar";

const Posts = ({
  image,
  subReddit,
  postedBy,
  timeCreated,
  titlePost,
  number,
  marginFromImage,
  likes,
  customHeight
}) => {
  const containerStyle = `bg-white rounded-md lg:w-[640px] w-[1000]  mr-10 ${
    customHeight ? `h-${customHeight}` : "h-[500px]"
  } mt-6 ml-10 flex relative xl:ml-40 flex-grow`;

  return (
    <>
      <div className={containerStyle}>
        <SideBar likes={likes} />
        <MainContent
          subReddit={subReddit}
          postedBy={postedBy}
          timeCreated={timeCreated}
          titlePost={titlePost}
          number={number}
          
        />
        <ImageSection image={image} marginFromImage={marginFromImage} />
      </div>
    </>
  );
};

export default Posts;
