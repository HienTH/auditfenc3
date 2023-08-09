import React from "react";
import Image from "next/image";

const TeamPic = ({ image, name, position }) => {
  return (
    <div className="flex flex-col gap-3 w-32 h-32">
      <div className="flex justify-center items-center">
        <Image
          src={`/assets/${image}.png`}
          width={120}
          height={120}
          className="pb-2"
          alt="logo"
        ></Image>
      </div>
      <p className="text-center text-primary text-xl font-bold uppercase">
        {name}
      </p>
      <p className="text-white text-center font-medium leading-relaxed">
        {position}
      </p>
    </div>
  );
};

export default TeamPic;
