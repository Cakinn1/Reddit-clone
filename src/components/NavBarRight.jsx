import React from "react";
import MainSection from "./reusableComps/navBarRightComponents/MainSection";
import PolicySection from "./reusableComps/navBarRightComponents/PolicySection";
import RedditPremium from "./reusableComps/navBarRightComponents/RedditPremium";

const NavBarRight = () => {
  const styleContainer =
    "hidden lg:flex flex-col float-right h-[1000px] w-[310px] mr-6 xl:mr-20 1100:mr-20 1150:mr-28 1200:mr-40  1250:mr-48 p-1 pt-0";
  return (
    <>
      <div className={styleContainer}>
        <RedditPremium />
        <MainSection
          mainText={
            "Your personal Reddit fontpage. Come here to check in with yourfavorite communities"
          }
          redditPng={"redditpng.png"}
          topImage={"redditBanner.png"}
          Home={"Home"}
          disabled={false}
        />

        <PolicySection />
      </div>
    </>
  );
};

export default NavBarRight;
