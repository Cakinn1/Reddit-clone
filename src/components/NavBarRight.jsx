import React from "react";
import MainSection from "./reusableComps/NavBarReusable/MainSection";
import PolicySection from "./reusableComps/NavBarReusable/PolicySection";
import RedditPremium from "./reusableComps/NavBarReusable/RedditPremium";
import TempSection from "./reusableComps/NavBarReusable/TempSection";

const NavBarRight = () => {
  const styleContainer =
    "hidden lg:flex flex-col float-right h-[1000px] w-[310px] mr-6 xl:mr-20 1100:mr-20 1150:mr-28 1200:mr-40  1250:mr-48 p-1 pt-0";
  return (
    <>
      <div
        className={styleContainer}
      >
        <RedditPremium />
        <MainSection />
        <TempSection />
        <PolicySection />
      </div>
    </>
  );
};

export default NavBarRight;
