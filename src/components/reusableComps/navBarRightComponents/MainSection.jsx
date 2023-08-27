import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { openSignupModal } from "../../../redux/features/modalSlice";

const MainSection = ({
  topImage,
  redditPng,
  mainText,
  disabled,
  Home,
  rFunny,
  rMemes,
}) => {
  let clicked = true;
  const isAuth = useSelector((state) => state.user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreatePost = () => {
    if (isAuth === null) {
      dispatch(openSignupModal());
    } else {
      navigate("/subReddit/");
    }
  };

  const [color, setColor] = useState("#DAE0E6");
  // bg-[#DAE0E6]
  const click = (color) => {
    setColor(color);
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimes = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(loadingTimes);
  }, []);
  return (
    <div
      className={`flex h-[250px] ${
        disabled === true && "h-[270px]"
      }  w-[310px] bg-white rounded-md  mt-10 relative`}
    >
      <figure className="absolute top-0">
        <img src={topImage} alt="" />
      </figure>
      <div className="mt-9 z-10 p-1">
        <div className="flex items-center gap-x-4">
          <img src={redditPng} className="h-16 top-6 left-4 absolute" alt="" />
          {loading ?  <p className="mb-3 ml-16 pt-3 bg-gray-300 animate-pulse h-10 rounded-md w-[200px]"></p> : <p className="mb-3 ml-16 pt-3">{Home}</p> }
         
        </div>

        <h1 className="text-[#1c1c1c] text-sm">{mainText}</h1>
        <hr className="my-2 w-[310px]" />

        {disabled === false ? (
          <>
            <Link to="/subReddit/Everything">
              <button
                className="bg-blue-600 shadow-lg h-[36px] w-full rounded-full
              text-white font-bold"
                onClick={() =>
                  //  { click("yellow", "blue")
                  handleCreatePost
                }
              >
                Create Post
              </button>
            </Link>
            {clicked ? "" : ""}
            <button
              onClick={() =>
                alert(
                  "This feature has not been implemented yet :-( -_-, try create post :=)"
                )
              }
              className="text-blue-600 shadow-lg h-[36px] w-full rounded-full bg-white border-blue-600 border font-bold mt-3"
            >
              Create Community
            </button>
          </>
        ) : (
          ""
        )}
        {disabled === true ? (
          <>
            {loading ? (
             <div className="bg-gray-300 h-[150px] w-[280px] ml-3  animate-pulse"></div>
            ) : (
              <>
                <div className="flex flex-col mr-4 ml-6">
                  <div className="flex items-center gap-x-3">
                    <h1 className="text-lg">1</h1>
                    <h1 className="ml-4 font-bold ">r/Everything</h1>
                    <Link to="/subReddit/Everything">
                      <button className="ml-[65px] hover:bg-opacity-50 bg-blue-500 text-white shadow-md  rounded-full px-3 py-1  ">
                        View
                      </button>
                    </Link>
                  </div>
                  <hr className="mt-4" />
                </div>
                <div className="flex flex-col mr-4 ml-6">
                  <div className="flex items-center gap-x-3">
                    <h1 className="text-lg mt-2">2</h1>
                    <h1 className="ml-4 font-bold mt-2">r/Funny</h1>
                    <Link to="/subReddit/Funny/">
                      <button className="ml-[100px] bg-blue-500 text-white shadow-md  rounded-full px-3 py-1 mt-2 hover:bg-opacity-50">
                        View
                      </button>
                    </Link>
                  </div>
                  <hr className="mt-4" />
                </div>
                <div className="flex flex-col mr-4 ml-6">
                  <div className="flex items-center gap-x-3">
                    <h1 className="text-lg mt-2">3</h1>
                    <h1 className="ml-4 font-bold mt-2">r/ProgrammerHumor</h1>
                    <Link to="/subReddit/ProgrammerHumor/">
                      <button className="hover:bg-opacity-50  bg-blue-500 text-white shadow-md  rounded-full px-3 py-1 mt-2 ">
                        View
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MainSection;
