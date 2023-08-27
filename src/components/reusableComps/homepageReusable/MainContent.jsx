import {
  ArrowUturnRightIcon,
  BookmarkIcon,
  ChatBubbleLeftRightIcon,
  EllipsisHorizontalIcon,
  GiftIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSignupModal,
  openCommentModal,
} from "../../../redux/features/modalSlice";
import CommentModal from "../../modals/CommentsModal";
import UserInfoBlock from "./UserInfoBlock";

const MainContent = ({
  subReddit,
  postedBy,
  timeCreated,
  titlePost,
  number,
  text,
  comment,
  handleDeleteButton,
  postId,
  handleDeleteDisabled,
  disabled,
  subtitle,
}) => {
  const dispatch = useDispatch();
  const iconData = [
    {
      icon: <ChatBubbleLeftRightIcon className="h-5" />,
      label: " Comments",
    },
    { icon: <TrashIcon className="h-5" /> },
    { icon: <GiftIcon className=" h-5" />, label: <p>Award</p> },
    {
      icon: <ArrowUturnRightIcon className="hidden md:flex h-5" />,
      label: <p className="hidden md:flex">Share</p>,
    },
    {
      icon: <BookmarkIcon className="hidden md:flex h-5" />,
      label: <p className="hidden md:flex">Save</p>,
    },
    { icon: <EllipsisHorizontalIcon className=" h-5" /> },
  ];

  const isOpen = useSelector((state) => state.modal.commentModalOpen);
  const currentUserEmail = useSelector((state) => state.user.email);

  // console.log()

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimes = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimes);
  }, []);
  return (
    <>
      {isOpen ? (
        <CommentModal />
      ) : (
        <div className="p-2 relative w-full ">
          {loading ? (
            <div className="w-full h-full animate-pulse bg-gray-300 ">

              
            </div>
          ) : (
            <>
              <UserInfoBlock
                subReddit={subReddit}
                postedBy={postedBy}
                timeCreated={timeCreated}
                titlePost={titlePost}
                text={text}
                comment={comment}
                subtitle={subtitle}
              />
              <div className="absolute bottom-2 flex items-center md:gap-x-3 gap-x-1 text-[#878A8C] mt-1 mr-1">
                {iconData.map((data, index) => (
                  <div
                    key={index}
                    className={` flex items-center gap-x-1 ${
                      index === 0 || index === 1
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } ${
                      index === 0 || index === 1
                        ? "hover:bg-[#878A8C] hover:rounded-md hover:bg-opacity-20 p-1"
                        : ""
                    } ${
                      index === 0 && disabled === true ? "bg-opacity-25" : ""
                    }`}
                    onClick={() => {
                      if (index === 0 && disabled === true) {
                        dispatch(openCommentModal());
                      } else if (index === 0 && disabled === false) {
                        return;
                      }
                    }}
                  >
                    <span
                      className={
                        (disabled === false && index === 1) ||
                        (disabled === false && index === 0)
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }
                    >
                      {data.icon}
                    </span>
                    {index === 0 && (
                      <span
                        className={`text-sm opacity-40 ${
                          index === 0 ? number : ""
                        }`}
                      >
                        {number}
                      </span>
                    )}
                    {currentUserEmail === postedBy && index === 1 && (
                      <span
                        className={
                          handleDeleteDisabled
                            ? "opacity-40 cursor-not-allowed"
                            : ""
                        }
                        onClick={() =>
                          !handleDeleteDisabled && handleDeleteButton(postId)
                        }
                      >
                        delete
                      </span>
                    )}
                    <span
                      className={
                        (disabled === false && index === 1) ||
                        (disabled === false && index === 0)
                          ? "opacity-40 cursor-not-allowed text-sm"
                          : "text-sm"
                      }
                    >
                      {data.label}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default MainContent;
