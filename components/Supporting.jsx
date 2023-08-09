import Image from "next/image";
import React from "react";

const Supporting = () => {
  return (
    <>
      <div className="my-20">
        <p className="text-center text-2xl text-primary font-bold uppercase">
          supporting all blockchain networks
        </p>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Image
            src={"/assets/suppport network (3).png"}
            width={65}
            height={65}
            alt="logo"
            className="mx-auto"
          ></Image>
          <Image
            src={"/assets/suppport network (4).png"}
            width={65}
            height={65}
            alt="logo"
            className="mx-auto"
          ></Image>
          <Image
            src={"/assets/suppport network (5).png"}
            width={65}
            height={65}
            alt="logo"
            className="mx-auto"
          ></Image>
          <Image
            src={"/assets/suppport network (2).png"}
            width={65}
            height={65}
            alt="logo"
            className="mx-auto"
          ></Image>
          <Image
            src={"/assets/suppport network (1).png"}
            width={65}
            height={65}
            alt="logo"
            className="mx-auto"
          ></Image>
          <Image
            src={"/assets/suppport network (6).png"}
            width={65}
            height={65}
            alt="logo"
            className="mx-auto"
          ></Image>
        </div>
      </div>
      {/* <div className=" bg-black">
        <p className="w-full text-center text-primary text-[30px] pt-[53px] font-bold uppercase">
          supporting all blockchain networks
        </p>
        <div className="flex flex-row justify-center gap-16 mt-16">
          <Image
            src={"/assets/suppport network (3).png"}
            width={120}
            height={120}
            alt="logo"
          ></Image>
          <Image
            src={"/assets/suppport network (4).png"}
            width={120}
            height={120}
            alt="logo"
          ></Image>
          <Image
            src={"/assets/suppport network (5).png"}
            width={120}
            height={120}
            alt="logo"
          ></Image>
          <Image
            src={"/assets/suppport network (2).png"}
            width={120}
            height={120}
            alt="logo"
          ></Image>
          <Image
            src={"/assets/suppport network (1).png"}
            width={120}
            height={120}
            alt="logo"
          ></Image>
          <Image
            src={"/assets/suppport network (6).png"}
            width={120}
            height={120}
            alt="logo"
          ></Image>
        </div>
      </div> */}
    </>
  );
};

export default Supporting;
