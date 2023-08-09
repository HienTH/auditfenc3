import Image from "next/image";
import React from "react";
import TeamPic from "./TeamPic";
const TeamDesktop = () => (
  <>
    <div className="flex flex-col justify-center w-full">
      <p className="w-full py-10 text-3xl font-bold text-center uppercase text-primary">
        team
      </p>
      <div className="flex flex-row justify-between px-10 pb-20 gap-28">
        <div className="">
          <div className="anh">
            <Image
              src={"/assets/CEO.png"}
              width={224}
              height={224}
              className="pb-2"
              alt="logo"
            ></Image>
          </div>
          <p className="text-xl font-bold text-center uppercase text-primary">
            Uncle Dre
          </p>
          <p className="text-white text-center text-[18px] font-medium leading-relaxed">
            CEO
          </p>
        </div>
        <div className="">
          <div className="anh">
            <Image
              src={"/assets/CTO.png"}
              width={224}
              height={224}
              className="pb-2"
              alt="logo"
            ></Image>
          </div>
          <p className="text-center text-primary text-[24px] font-bold uppercase">
            Matthew Jones
          </p>
          <p className="text-white text-center text-[18px] font-medium leading-relaxed">
            Designer
          </p>
        </div>
        <div className="">
          <div className="anh">
            <Image
              src={"/assets/Designer.png"}
              width={224}
              height={224}
              className="pb-2"
              alt="logo"
            ></Image>
          </div>
          <p className="text-center text-primary text-[24px] font-bold uppercase">
            K.Muller
          </p>
          <p className="text-white text-center text-[18px] font-medium leading-relaxed">
            CTO
          </p>
        </div>
      </div>
    </div>
  </>
);
const TeamMobile = () => (
  <>
    <div className="py-10">
      <p className="py-24 text-3xl font-bold text-center uppercase text-primary">
        team
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-row justify-between gap-5">
          <TeamPic image={"CEO"} name={"Uncle Dre"} position={"CEO"} />
          <TeamPic image={"CTO"} name={"Matthew Jones"} position={"CTO"} />
        </div>
        <div className="flex items-center justify-center py-32">
          <TeamPic image={"Designer"} name={"K.Muller"} position={"Designer"} />
        </div>
      </div>
    </div>
  </>
);
const Team = () => {
  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block">
        <TeamDesktop />
      </div>

      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden">
        <TeamMobile />
      </div>
    </>
  );
};

export default Team;
