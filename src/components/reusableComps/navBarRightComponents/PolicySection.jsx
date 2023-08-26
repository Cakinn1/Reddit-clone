import React from "react";
import PolicyEN from "./NavBarRightComponentsReusable/PolicyEN";
import UserAgreement from "./NavBarRightComponentsReusable/UserAgreement";

const PolicySection = () => {

  // change component back to nromal take away containerstyle and
  //put useragreement and policy back to here
  const containerStyle =
    "h-[200px] w-[310px] bg-white rounded-md my-10 p-3 text-[11px]";
  return (
    <div className={containerStyle}>
      <UserAgreement
        agreement={"User Agreement"}
        policy={"privacy Policy"}
        conduct={"Moderator Code of conduct"}
        contentPolicy={"Content Policy"}
      />
      <hr />
      <PolicyEN
        language1={"Enligsh"}
        language2={"Francais"}
        language3={"Italiano"}
        language4={"Deutsch"}
        language5={"Espanol"}
        language6={"Portugues"}
      />
      <hr />
      <p className="mt-3">Cakin. Inc &copy; 2023. All rights reserverd.</p>
    </div>
  );
};

export default PolicySection;
