import React, { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import {
  ArrowPathIcon,
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSignupModal,
  openSignupModal,
} from "../../redux/features/modalSlice";
import { setUser, clearUser } from "../../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const SignupModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let clicked = false;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector((state) => state.modal.signupModalOpen);
  console.log(isOpen);

  async function registerUser() {
    setIsLoading(true);
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(dispatch(setUser({ uid: user.uid, email: user.email })));
        setIsLoading(false);
        authChange();
      })
      .catch((error) => {
        setIsLoading(false);
        alert("An error occurred: " + error.message);
      });
  }
  function authChange() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        dispatch(closeSignupModal());
      }
    });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        setEmail(user.email)
      }
    })
  }, [])

  async function guestSignIn() {
    await signInWithEmailAndPassword(
      auth,
      "guest123@gmail.com",
      "guest123"
    ).then((userCredential) => {
      setIsLoading(true)
      const user = userCredential.user;
      dispatch(setUser({ uid: user.uid, email: user.email }));
      authChange();
      setIsLoading(false)
    });
  }
  // console.log(guestSignIn)
  // make the tick as required, maybe make the while thing a form?

  return (
    <>
      <button onClick={() => dispatch(openSignupModal())}>Sign Up</button>
      {isOpen ? (
        <div className="fixed inset-0  z-50 flex justify-center items-center bg-gray-800 bg-opacity-50 ">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white  border-black
        w-[400px] h-[500px] rounded-xl"
          >
            <XMarkIcon
              className="h-6 absolute right-0 m-4 cursor-pointer"
              onClick={() => dispatch(closeSignupModal())}
            />
            <div className="p-16 ">
              <h1 className="font-semibold text-xl">Sign Up</h1>
              <p className="text-xs pt-2">
                By continuing, you are setting up a Reddit account and agree to
                our
                <span className="text-blue-600 cursor-not-allowed">
                  {" "}
                  User Agreement{" "}
                </span>
                and
                <span className="text-blue-600 cursor-not-allowed">
                  {" "}
                  Privacy Policy.
                </span>
              </p>
              <p className="text-[11px] pt-4 flex">
                <input type="checkbox" className="mr-2 " />
                {clicked && (
                  <span className="absolute inset-0 flex items-center justify-center text-green-500">
                    ✓
                  </span>
                )}
                I agree to get emails about cool stuff on Reddit
              </p>
              <hr className="mt-14" />
              <form onSubmit={(e) => e.preventDefault()} className="pt-4">
                <input
                  type="text"
                  className="bg-[#f6f7f8] outline-none
              text-sm font-bold
              rounded-full w-full h-12 pl-4"
                  placeholder="Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="bg-[#d93a00] outline-none
              text-sm 
              rounded-full w-full h-12 pl-4 mt-6
              placeholder:text-white font-bold text-white"
                  required
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  onClick={registerUser}
                  className="w-full font-bold bg-[#f6f7f8]  rounded-full mt-6 h-12"
                >
                  {isLoading ? (
                    <>
                      <ArrowPathIcon className="animate-spin h-10 mx-auto" />
                    </>
                  ) : (
                    "Click To Sign Up"
                  )}
                </button>
              </form>
              <button
                onClick={guestSignIn}
                className="mt-4 text-blue-600 ml-1 underline"
              >
                Sign in as Guest
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SignupModal;
