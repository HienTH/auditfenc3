import Image from "next/image";
import React from "react";
import Link from 'next/link';
const HeroDesktop = () => (
  <>
    <div className="flex justify-center w-full p-32">
      <div className="">
        <div className="anh">
          <Image
            src={"/assets/text logo.png"}
            width={238}
            height={54}
            alt="logo"
          ></Image>
          <Image
            src={"/assets/Ecosystem.png"}
            width={388}
            height={85}
            alt="logo"
          ></Image>
        </div>
        <div className="text-3xl font-medium text-white">
          Decentralized, web3 security, trusted.
          <br />
          Welcome to Fenc3.
        </div>
        <div className="flex mt-16">
        <Link href="/audits">
          <button className="px-5 py-2 mr-10 text-2xl text-center text-black bg-primary rounded-3xl">
            Go to App
          </button>
        </Link>
          <button className="px-5 py-2 mr-6 text-2xl text-center text-white bg-transparent border border-primary rounded-3xl">
            Documentation
          </button>
        </div>
      </div>
      <div className="">
        <Image
          src={"/assets/Hero.png"}
          width={388}
          height={50}
          className="w-[511px] h-[511px]"
          alt="logo"
        ></Image>
      </div>
    </div>
    <div className="flex pt-[156px] flex-row justify-center w-full gap-9 bg-slate-900 ">
      <div className="flex bg-slate-900 rounded-xl">
        <div className="w-1/2">
          <Image
            src={"/assets/Asset 1@300x 2 (1).png"}
            width={388}
            height={50}
            className="w-[194px] h-[150px]"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <div className="w-[185px] mb-10 h-[44px] text-center text-white text-[24px] font-semibold">
            Audit &<br />
            Audit Certificate{" "}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl">
            <Link href="/audits">
            <button className="w-40 h-8 bg-primary rounded-[88px]">
              Go to app
            </button>
            </Link>
            <button className="w-40 h-8 text-white bg-transparent border border-primary bg-primary rounded-[88px]">
              Documentation
            </button>
          </div>
        </div>
      </div>
      <div className="h-[292px] bg-slate-900 rounded-xl flex">
        <div className="w-1/2">
          <Image
            src={"/assets/Asset 2@300x 1.png"}
            width={388}
            height={50}
            className="w-[194px] h-[150px]"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <div className="w-[185px] h-[44px] mb-10 text-center text-white text-[24px] font-semibold">
            Super
            <br />
            Degen Bot{" "}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl">
            <button className="w-40 h-8 bg-primary rounded-[88px]">
            <a href="https://bot.fenc3.com" target="_blank" rel="noopener noreferrer">
              Go to app
            </a>
            </button>
            <button className="w-40 h-8 text-white bg-transparent border border-primary bg-primary rounded-[88px]">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
const HeroMobile = () => (
  <div className="flex flex-col gap-2">
    <div className="flex justify-center image">
      <Image
        src={"/assets/Hero.png"}
        width={261}
        height={261}
        alt="logo"
      ></Image>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div className="fenc3">
        <Image
          src={"/assets/text logo.png"}
          width={106}
          height={24}
          alt="logo"
        ></Image>
      </div>
      <div className="ecosystem">
        <Image
          src={"/assets/Ecosystem.png"}
          width={194}
          height={42}
          alt="logo"
        ></Image>
      </div>
      <div className="text-center text-white">
        Decentralized, web3 security, trusted. <br />
        Welcome to Fenc3.
      </div>
    </div>
    <div className="flex flex-col items-center justify-center gap-2 my-5 font-bold">
      <div className="">
      <Link href="/audits">
        <button className="px-5 py-2 text-center text-black bg-primary rounded-3xl">
          Go to App
        </button>
      </Link>
      </div>
      <div className="">
        <button className="px-5 py-2 text-center text-white bg-transparent border border-primary rounded-3xl">
          Documentation
        </button>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center mx-4 my-20 gap-9 ">
      <div className="flex p-5 bg-slate-900 rounded-xl">
        <div className="flex items-center justify-center w-1/2">
          <Image
            src={"/assets/Asset 1@300x 2 (1).png"}
            width={388}
            height={50}
            alt="logo"
          ></Image>
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="font-semibold text-center text-white">
            Audit &<br />
            Audit Certificate{" "}
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl">
          <Link href="/audits">
            <button className="w-40 h-8 bg-primary rounded-[88px]">
              Go to app
            </button>
          </Link>
            <button className="w-40 h-8 text-white bg-transparent border border-primary bg-primary rounded-[88px]">
              Documentation
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-3 bg-slate-900 rounded-xl">
        <div className="flex items-center justify-center w-1/2">
          <Image
            src={"/assets/Asset 2@300x 1.png"}
            width={388}
            height={50}
            alt="logo"
          ></Image>
        </div>
        <div className="flex flex-col gap-3 my-5 ">
          <div className="font-semibold text-center text-white">
            Super
            <br />
            Degen Bot
          </div>
          <div className="flex flex-col items-center justify-center gap-3 rounded-xl">
            <button className="w-40 h-8 bg-primary rounded-[88px]">
            <a href="https://bot.fenc3.com" target="_blank" rel="noopener noreferrer">
              Go to app
            </a>
            </button>
            <button className="w-40 h-8 text-white bg-transparent border border-primary bg-primary rounded-[88px]">
              Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const Hero = () => {
  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block">
        <HeroDesktop />
      </div>

      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden">
        <HeroMobile />
      </div>
    </>
  );
};

export default Hero;
