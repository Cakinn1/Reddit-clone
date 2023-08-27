import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase/firebase";
import {
  closeCommentModal,
  openCommentModal,
} from "../../redux/features/modalSlice";

const CommentModal = ({ currentPostedPost, postId }) => {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.commentModalOpen);

  const handleCommentModalClick = () => {
    dispatch(openCommentModal());
  };

  useEffect(() => {
    async function fetchComments() {
      const commentsCollection = collection(db, "comments");
      const querySnapshot = await getDocs(commentsCollection);
      const postComments = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.postId === postId) {
          // Filter comments for the specific post
          postComments.push({
            ...data,
            id: doc.id,
          });
        }
      });

      setComments(postComments);
    }

    if (currentPostedPost) {
      fetchComments();
    }
  }, [currentPostedPost, postId]);

  return (
    <div>
      <button onClick={handleCommentModalClick}>Open Comment Modal</button>
      {isOpen && (
        <div className="fixed inset-0  z-50 flex justify-center items-center bg-gray-800 bg-opacity-80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-black w-[800px] h-[500px] rounded-xl">
            <div className="flex justify-center items-center flex-col">
              <button onClick={() => dispatch(closeCommentModal())}>
                exit
              </button>
              {comments.map((comment) => (
                <div key={comment.id}>
                  <p>{comment.text}</p>
                  <p>{comment.title}</p>
                  {/* Display other comment information */}
                </div>
              ))}
              I HAVE NOT HAD TIME TO DO THIS SORRY I WILL BE IMPLEMENTING THIS
              SOON!!! -____-
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentModal;
