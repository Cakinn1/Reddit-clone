import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCommentModal, openCommentModal } from "../../redux/features/modalSlice";

const CommentModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.commentModalOpen);

  const handleCommentModalClick = () => {
    dispatch(openCommentModal());
  };

  return (
    <div>
      {/* <button onClick={handleCommentModalClick}>Open Comment Modal</button> */}
      {isOpen && (
        <div className="fixed inset-0  z-50 flex justify-center items-center bg-gray-800 bg-opacity-80">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-black w-[800px] h-[500px] rounded-xl">
            <div className="flex justify-center items-center flex-col">

            {/* Modal content */} WILL BE ADDING SOON// HAVE NOT HAD TIME SORRY :-0
            <button onClick={() => dispatch(closeCommentModal())}>exit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentModal;
