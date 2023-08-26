import React from "react";
import ImageSection from "./ImageSection";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

const Posts = ({
  image,
  subReddit,
  postedBy,
  timeCreated,
  titlePost,
  number,
  marginFromImage,
  likes,
  customHeight,
  text,
  comment,
  handleLikeButton,
  handleUnlikeButton,
  userHasLiked,
  postId,
  handleDeleteButton,
  handleDeleteDisabled,
  disabled,
  subtitle 
}) => {
  const containerStyle = `bg-white rounded-md lg:w-[640px] w-[1000]  mr-10 ${
    customHeight ? `${customHeight}` : "h-[500px]"
  } mt-6 ml-10 flex relative xl:ml-40 flex-grow`;

  return (
    <>
      <div className={containerStyle}>
        <SideBar
          likes={likes}
          postId={postId}
          userHasLiked={userHasLiked}
          handleLikeButton={handleLikeButton}
          handleUnlikeButton={handleUnlikeButton}
        />
        <MainContent
          subReddit={subReddit}
          postedBy={postedBy}
          timeCreated={timeCreated}
          titlePost={titlePost}
          number={number}
          text={text}
          comment={comment}
          postId={postId}
          handleDeleteButton={handleDeleteButton}
          handleDeleteDisabled={handleDeleteDisabled}
          disabled={disabled}
          subtitle={subtitle}
        />
        <ImageSection image={image} marginFromImage={marginFromImage} />
      </div>
    </>
  );
};

export default Posts;
