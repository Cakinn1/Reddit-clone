import React from "react";

const ImageSection = ({ image, marginFromImage }) => {
  const imageSectionStyleMargin = {
    marginTop: `${marginFromImage}px`,
  };
  return (
    <div>
      {image && (
        <img
          src={image}
          className={`rounded-sm absolute object-contain ${
            image ? `w-[300px] md:w-[400px] h-[400px]` : ""
          } mt-2   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
          style={imageSectionStyleMargin}
          alt=""
        />
      )}
    </div>
  );
};

export default ImageSection;
