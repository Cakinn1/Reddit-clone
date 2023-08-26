import { UserIcon } from "@heroicons/react/24/outline";
import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/firebase";
import { openSignupModal } from "../../../redux/features/modalSlice";

const UserInfoBlock = ({
  subReddit,
  postedBy,
  timeCreated,
  titlePost,
  comment,
  subtitle 
}) => {
  const [textin, setTextin] = useState("");
  const [title, setTitle] = useState("");
  const [posts, setPost] = useState([]);
  const isAuth = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  async function sendPost() {
    if (!isAuth) {
      dispatch(openSignupModal());
      return;
    }

    const newPost = {
      userEmail: isAuth,
      post: textin,
      title: title,
    };

    const docRef = await addDoc(collection(db, "posts"), newPost);
    const updatedPosts = [...posts, newPost]; // Update the posts array
    setPost(updatedPosts); // Update the state
    setTextin("");
    setTitle("");
  }
  return (
    <>
      <div className="flex  items-center gap-x-1 text-[10px]  ">
        <UserIcon className="h-3 rounded-full" />
        <p className="font-semibold">r/{subReddit}</p>
        <p className="text-[#787c7e]">
          {postedBy ? <p>Posted by ul/{postedBy || null} </p> : null}
        </p>
        {posts.map((post, index) => (
          <p className="text-[#787c7e]" key={index}>
            Posted By ul/{post.title ? post.title : postedBy}
            <p>{post.email}</p>
          </p>
        ))}
        <p className="text-[#787c7e]">{timeCreated}</p>
        
      </div>
      <div>
        <p className="text-[14px] mt-1 w-[600px] no-scrollbar overflow-y-scroll h-[20px]">
          {titlePost}
        </p>
      </div>
      <hr />
      <div className="w-[600px] h-[100px] no-scrollbar overflow-y-scroll  ">
        <p>{comment}</p>
      </div>
    </>
  );
};

export default UserInfoBlock;
