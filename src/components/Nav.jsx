import React, { useEffect, useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  BellIcon,
  ChatBubbleBottomCenterIcon,
  FireIcon,
  MagnifyingGlassIcon,
  MegaphoneIcon,
  PlusIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import SignupModal from "./modals/SignupModal";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../redux/features/authSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import LoginModal from "./modals/LoginModal";
const Nav = () => {
  const [loading, setLoading] = useState(true);

  const userAuth = useSelector((state) => state.user.email);

  const dispatch = useDispatch();
  console.log(userAuth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({ uid: user.uid, email: user.email }));
      }
      // setLoading(false);
    });
  }, []);

  async function logout() {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const loadingTimes = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(loadingTimes);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div
        className={`flex justify-between items-center px-4 mx-auto max-w-[1400px] `}
      >
        <Link to="/">
          {loading ? (
            <figure className="h-14 w-24 bg-gray-300 animate-pulse"></figure>
          ) : (
            <figure>
              <img className="h-14" src="/ReddiT.png" alt="" />
            </figure>
          )}
        </Link>
        {loading ? (
          <div className="flex relative rounded-full  bg-gray-300 animate-pulse opacity-0 ">
            <div
              type="text"
              className="h-10 w-[180px]  sm:w-[300px] lg:w-[500px] xl:w-[600px] md:w-[260px] placeholder:text-[0] outline-none border md:placeholder:text-sm sm:placeholder:text-sm lg:placeholder:text-sm  lg:h-10  rounded-full pl-8"
            />
            <div className="h-5 absolute  top-1/2 transform -translate-y-1/2 left-2" />
          </div>
        ) : (
          <div className="flex relative rounded-full  bg-[#F6F7F8] ">
            <input
              type="text"
              placeholder="Search Reddit"
              className="h-10 w-[180px]  sm:w-[300px] lg:w-[500px] xl:w-[600px] md:w-[260px] placeholder:text-[0] outline-none border md:placeholder:text-sm sm:placeholder:text-sm lg:placeholder:text-sm bg-[#F6F7F8] lg:h-10  rounded-full pl-8"
            />
            <MagnifyingGlassIcon className="h-5 absolute  top-1/2 transform -translate-y-1/2 left-2" />
          </div>
        )}

        {loading ? (
          new Array(1)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="hidden md:flex justify-center  items-center animate-pulse bg-gray-300 w-[250px] h-7 rounded-md"
              ></div>
            ))
        ) : (
          <div className="hidden md:flex justify-center items-center space-x-4">
            <ArrowTopRightOnSquareIcon className="h-5 cursor-not-allowed" />
            <ChatBubbleBottomCenterIcon className="h-5 cursor-not-allowed" />
            <BellIcon className="h-5 cursor-not-allowed" />
            <PlusIcon className="h-5 cursor-not-allowed" />
            <div className="bg-[#F6F7F8] rounded-full p-[6px]">
              <MegaphoneIcon className="h-5 cursor-not-allowed" />
            </div>
          </div>
        )}

        <div className="flex justify-center items-center">
          <div className="relative">
            <UserIcon className="h-6 bg-[#f6f7f8] " />
            {userAuth ? (
              <div className="bg-green-400 w-2 h-2 absolute rounded-full right-0 bottom-0 "></div>
            ) : (
              <div className="bg-red-400 w-2 h-2 absolute rounded-full right-0 bottom-0 "></div>
            )}
          </div>
          <div className="flex flex-col">
            <h3 className="text-[12px] flex justify-start pl-1 gap-x-1">
              {loading ? (
                <div className="bg-gray-300 animate-pulse w-full h-5 rounded-md"></div>
              ) : userAuth ? (
                <>
                  <p
                    className="cursor-pointer space-x-1"
                    onClick={() => {
                      dispatch(clearUser());
                      return logout;
                    }}
                  >
                    {userAuth.split("@")[0]}
                  </p>
                </>
              ) : (
                <>
                  <SignupModal />
                  | <LoginModal />
                </>
              )}
            </h3>
            <div className="flex items-center">
              <FireIcon className="h-4  rounded-full" />
              <h5 className="text-[12px] text-[#DAE0E6]">1 karma</h5>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

// Add color to fire element

// add if the user is not null (basically if the user is online) then show green
// but if the user is not null/has not signed up then show red

//Change static name to username when logged in
