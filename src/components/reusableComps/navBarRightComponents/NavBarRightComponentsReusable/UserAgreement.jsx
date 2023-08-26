import React from "react";

const UserAgreement = ({ agreement, policy, contentPolicy, conduct }) => {
  return (
    <div className="flex mb-4 cursor-not-allowed">
      <div className="mr-12">
        <p className="w-[120px]">{agreement}</p>
        <p>{policy}</p>
      </div>
      <div>
        <p>{contentPolicy}</p>
        <p>{conduct}</p>
      </div>
    </div>
  );
};

export default UserAgreement;
