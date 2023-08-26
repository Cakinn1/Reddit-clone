import React from "react";

const PolicyEN = ({
  language1,
  language2,
  language3,
  language4,
  language5,
  language6,
}) => {
  return (
    <div className="flex mb-2">
      <div className="pt-2 mr-32 cursor-not-allowed">
        <p> {language1}</p>
        <p>{language2}</p>
        <p>{language3}</p>
      </div>
      <div className="pt-2 cursor-not-allowed">
        <p>{language4}</p>
        <p>{language5}</p>
        <p>{language6}</p>
      </div>
    </div>
  );
};

export default PolicyEN;
