import React from "react";
import NavBarRight from "./NavBarRight";
import Posts from "./reusableComps/homepageReusable/Posts";
import Sorting from "./Sorting";

const HomePage = () => {
  return (
    <div className="pb-10 max-w-[1248px] mx-auto   ">
      <>
        <NavBarRight />
        <Sorting />
        <Posts
          image={"centerDiv.png"}
          subReddit="ProgrammerHumor"
          postedBy={"klekaelly"}
          timeCreated={"3 years ago"}
          titlePost={"How do i center a div?"}
          number={"92"}
          likes={"4.2k"}
          handleDeleteDisabled={true}
          disabled={false}
        />
        <Posts
          image={"southPark1.jpeg"}
          subReddit="funny"
          postedBy={"Exclamation__Marc"}
          timeCreated={"3 years ago"}
          titlePost={`The Denver Broncos have the entire town of ‘South Park’ in the stands for today’s NFL game.`}
          marginFromImage={20}
          number={"2.8k"}
          likes={"226k"}
          handleDeleteDisabled={true}
          disabled={false}
        />
        <Posts
          image={"foodPost.jpeg"}
          subReddit={"food"}
          postedBy={"cookinwithclint"}
          timeCreated={"2 years ago"}
          titlePost={"[Homemade] Steak Fajitas"}
          number={"914"}
          likes={"49.6k"}
          handleDeleteDisabled={true}
          disabled={false}
        />
        <Posts
          image={"programmingmeme.webp"}
          subReddit={"programmerHumor"}
          postedBy={"hearsdemons"}
          timeCreated={"11 months ago"}
          titlePost={`Why aren't your playing by the rules of the game!`}
          number={"2.6k"}
          likes={"139k"}
          handleDeleteDisabled={true}
          disabled={false}
        />
        <Posts
          image={"memestory.jpeg"}
          subReddit={"memes"}
          postedBy={"rextraneous"}
          timeCreated={"3 years ago"}
          titlePost={"A short story"}
          number={"4.2k"}
          likes={"398k"}
          handleDeleteDisabled={true}
          disabled={false}
        />
      </>
    </div>
  );
};
// ({subReddit, postedBy, timeCreated, titlePost})
export default HomePage;

//bg-[#DAE0E6]. If you change body back to different color use this
// the div

//ad onclick to the subreddit e.g r/anime add a onclick
// so we go to that subreddit
