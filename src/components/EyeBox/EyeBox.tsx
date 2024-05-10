"use client";

import { useState } from "react";

export const EyeBox = () => {
  const [visibility, setVisibility] = useState(false);

  const handleVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <div
      className={`absolute top-[9.230vw] xs:top-9 right-[5.128vw] xs:right-5 w-[6.153vw] xs:w-[24px] h-[6.153vw] xs:h-[24px] z-20 bg-no-repeat bg-contain ${
        visibility
          ? "bg-[url('/opened-eye.svg')]"
          : "bg-[url('/closed-eye.svg')]"
      }`}
      onClick={handleVisibility}
    ></div>
  );
};
