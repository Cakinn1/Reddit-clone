import React, { useState } from "react";

const SubredditPostForm = ({ fetchPost }) => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");

  const handlePostSubmit = () => {
    fetchPost({ text, title });
    setText("");
    setTitle("");
  };
  return (
    <form onSubmit={(e) => e.preventDefault()} className="p-3">
      text
      <textarea
        className="w-[300px]"
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div>
        title
        <textarea onChange={(e) => setTitle(e.target.value)}></textarea>
      </div>
      <button onClick={handlePostSubmit}>Click to create post</button>
    </form>
  );
};

export default SubredditPostForm;
