import React from "react";
import instructor from "../assets/png/instructor.png";

const Featurecard = () => {
  return (
    <div>
      <h3 className="text-[#101828] font-normal text-xsm">
        New features available!
      </h3>
      <p className="text-[#667085] font-light text-xsm">
        Check out the new dashboard view. Pages now load faster.{" "}
      </p>

      <img
        src={instructor}
        alt="instructor"
        className="mt-[1rem] mb-[1rem] rounded-[0.375rem]"
      />
      <p className="font-normal text-xsm leading-[20px]">
        <span>Dismiss</span> <span className="text-purple">What’s new?</span>
      </p>
    </div>
  );
};

export default Featurecard;
