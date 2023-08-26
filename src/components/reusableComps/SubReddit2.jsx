import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Posts from "../reusableComps/homepageReusable/Posts";
import SubRedditHeader from "../reusableComps/subredditComponents/SubRedditHeader";
import SubredditButton from "../reusableComps/subredditComponents/SubredditButton";
import SubredditText from "../reusableComps/subredditComponents/SubredditText";
import SubredditTitle from "../reusableComps/subredditComponents/SubredditTitle";
import Sorting from "../Sorting";

import { openSignupModal } from "../../redux/features/modalSlice";
import MainSection from "./navBarRightComponents/MainSection";
import PolicySection from "./navBarRightComponents/PolicySection";

const SubReddit2 = () => {
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [userLikedPosts, setUserLikedPosts] = useState(new Map());
  const isAuth = useSelector((state) => state.user.email);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPosts() {
      const funnyCollection = collection(db, "funny");
      const querySnapshot = await getDocs(funnyCollection);
      const fetchedPosts = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        fetchedPosts.push({
          ...data,
          id: doc.id,
        });

        if (data.likedBy?.includes(isAuth)) {
          setUserLikedPosts((prevMap) => prevMap.set(doc.id, true));
        }
      });

      setPosts(fetchedPosts);
    }

    fetchPosts();
  }, [isAuth]);

  async function fetchPost() {
    if (!isAuth) {
      dispatch(openSignupModal());
      return;
    }

    const newPost = {
      userEmail: isAuth,
      text: text,
      title: title,
      likes: 0,
      likedBy: [],
    };
    const docRef = await addDoc(collection(db, "funny"), newPost);
    const updatedPosts = [{ ...newPost, id: docRef.id }, ...posts];
    setPosts(updatedPosts);
    setText("");
    setTitle("");
  }

  const handleLikeButton = async (postId) => {
    const postRef = doc(db, "funny", postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const currentLikes = postDoc.data().likes;
      const likedBy = postDoc.data().likedBy || [];

      const newLikes = currentLikes + 1;

      await updateDoc(postRef, {
        likes: newLikes,
        likedBy: [...likedBy, isAuth],
      });

      const updatedPosts = posts.map((post) =>
        post.id === postId ? { ...post, likes: newLikes } : post
      );
      setPosts(updatedPosts);

      setUserLikedPosts((prevMap) => new Map(prevMap).set(postId, true));
    }
  };

  const handleUnlikeButton = async (postId) => {
    const postRef = doc(db, "funny", postId);
    const postDoc = await getDoc(postRef);

    if (postDoc.exists()) {
      const currentLikes = postDoc.data().likes;
      const likedBy = postDoc.data().likedBy || [];

      const userHasLiked = likedBy.includes(isAuth);

      const newLikes = userHasLiked ? currentLikes - 1 : currentLikes;

      if (userHasLiked) {
        const updatedLikedBy = likedBy.filter(
          (userEmail) => userEmail !== isAuth
        );
        await updateDoc(postRef, { likes: newLikes, likedBy: updatedLikedBy });

        const updatedPosts = posts.map((post) =>
          post.id === postId ? { ...post, likes: newLikes } : post
        );
        setPosts(updatedPosts);

        setUserLikedPosts((prevMap) => {
          const updatedMap = new Map(prevMap);
          updatedMap.delete(postId);
          return updatedMap;
        });
      } else {
        await updateDoc(postRef, {
          likes: newLikes,
          likedBy: [...likedBy, isAuth],
        });

        const updatedPosts = posts.map((post) =>
          post.id === postId ? { ...post, likes: newLikes } : post
        );
        setPosts(updatedPosts);

        setUserLikedPosts((prevMap) => new Map(prevMap).set(postId, true));
      }
    }
  };

  const handleDeleteButton = async (postId, userEmail) => {
    // if (userEmail !== isAuth) {
    //   return
    // }
    const postRef = doc(db, "funny", postId);

    await deleteDoc(postRef);

    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);

    setUserLikedPosts((prevMap) => {
      const updatedMap = new Map(prevMap);
      updatedMap.delete(postId);
      return updatedMap;
    });
  };

  const subRedditCreatePostContainer =
    "w-[640px] ml-10 mt-6 h-[250px] flex flex-col bg-white rounded-md ";
  const subRedditOuterContainer = "relative h-full flex flex-col ";
  const subRedditInnerContainer = "p-1  text-md pt-2 lg:ml-[90px] mr-[40px]";

  const containerStyle = `bg-white rounded-md lg:w-[640px] w-[1000]  mr-10  mt-6 ml-10 flex relative xl:ml-40 flex-grow`;

  return (
    <div className="max-w-[1248px] mx-auto mb-10">
      <div className="hidden lg:flex flex-col float-right h-[1000px] w-[310px] mr-6 xl:mr-20 1100:mr-20 1150:mr-28 1200:mr-40  1250:mr-48 p-1 pt-0">
        <MainSection
          redditPng={"/redditpng.png"}
          Home={"View Our Communities"}
          disabled={true}
          topImage={"/redditBanner.png"}
        />
        <PolicySection />
      </div>
      <Sorting />
      <div className={containerStyle}>
        <div className={subRedditCreatePostContainer}>
          <SubRedditHeader header="r/Funny" />
          <div className={subRedditOuterContainer}>
            <div className={subRedditInnerContainer}>
              <SubredditTitle title={title} setTitle={setTitle} />
              <SubredditText title={title} setText={setText} text={text} />
              <SubredditButton
                text={text}
                title={title}
                fetchPost={fetchPost}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-0">
        {posts.map((post, index) => (
          <div className="max-w-[1248px] mx-auto" key={index}>
            <Posts
              subReddit={"r/Funny"}
              postedBy={post.userEmail}
              titlePost={post.title}
              comment={post.text}
              customHeight={"h-[200px]"}
              likes={post.likes}
              handleLikeButton={handleLikeButton}
              handleUnlikeButton={handleUnlikeButton}
              userHasLiked={userLikedPosts.get(post.id) || false}
              postId={post.id}
              handleDeleteButton={handleDeleteButton}
              disabled={true}
              subtitle={true}
            />

            <button
              className="hidden"
              onClick={() => handleLikeButton(post.id)}
            >
              Like
            </button>
            <button
              className="hidden"
              onClick={() => handleUnlikeButton(post.id)}
            >
              Unlike
            </button>
            <button
              className="hidden"
              onClick={() => handleDeleteButton(post.id)}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubReddit2;
