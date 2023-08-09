import Image from "next/image";
import React from "react";
const IntroDesktop = () => (
  <div className="w-full h-[752px] pt-[156px] flex justify-center">
    <div className="flex flex-row gap-8">
      <div className="bg-transparent border rounded-lg border-primary py-10 h-[350px] px-5">
        <div className="flex justify-center">
          <Image
            src={"/assets/audits.png"}
            width={388}
            height={50}
            className="w-[50px] h-[50px]"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <p className="text-center pt-12 mb-2 text-white text-[24px] font-bold">
            1200+ Audits
          </p>
          <div className="w-[314px] h-[126px] text-center text-white text-[18px] font-medium leading-relaxed">
            We've performed more than 1200 smart contract audits across all
            different networks like BSC, Ethereum, Solana, Polygon, AVAX, etc.
          </div>
        </div>
      </div>
      <div className="bg-transparent border rounded-lg border-primary py-10 h-[350px] px-5">
        <div className="flex justify-center">
          <Image
            src={"/assets/kyc.png"}
            width={388}
            height={50}
            className="w-[50px] h-[50px]"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <p className="text-center mt-12 mb-2 text-white text-[24px] font-bold">
            500+ KYCs
          </p>
          <div className="w-[314px] h-[126px] text-center text-white text-[18px] font-medium leading-relaxed">
            We've KYC’d more than 500 teams and we haven’t received any reports
            from investors so far!
          </div>
        </div>
      </div>
      <div className="bg-transparent border rounded-lg border-primary py-10 h-[350px] px-5">
        <div className="flex justify-center">
          <Image
            src={"/assets/consulting.png"}
            width={388}
            height={50}
            className="w-[50px] h-[50px]"
            alt="logo"
          ></Image>
        </div>
        <div className="">
          <p className="text-center mt-12 mb-2 text-white text-[24px] font-bold">
            Consulting
          </p>
          <div className="w-[314px] h-[126px] text-center text-white text-[18px] font-medium leading-relaxed">
            We've identified vulnerabilities and improved the smart contract
            security in well-known DAO projects.
          </div>
        </div>
      </div>
    </div>
  </div>
);
const IntroMobile = () => (
  <div className="flex flex-col gap-5">
    <div className="flex p-2 bg-transparent border rounded-lg border-primary">
      <div className="flex items-center justify-center mr-3">
        <Image src={"/assets/audits.png"} width={100} height={100} />
      </div>
      <div className="">
        <p className="font-bold text-center text-white">1200+ Audits</p>
        <div className="font-medium leading-relaxed text-white ">
          We've performed more than 1200 smart contract audits across all
          different networks like BSC, Ethereum, Solana, Polygon, AVAX, etc.
        </div>
      </div>
    </div>
    <div className="flex p-2 bg-transparent border rounded-lg border-primary">
      <div className="flex items-center justify-center mr-3">
        <Image src={"/assets/kyc.png"} width={70} height={70} />
      </div>
      <div className="">
        <p className="font-bold text-center text-white">500+ KYCs</p>
        <div className="font-medium leading-relaxed text-white ">
          We've KYCd more than 500 teams and we havent received any reports from
          investors so far!
        </div>
      </div>
    </div>
    <div className="flex p-2 bg-transparent border rounded-lg border-primary">
      <div className="flex items-center justify-center mr-3">
        <Image src={"/assets/consulting.png"} width={70} height={70} />
      </div>
      <div className="">
        <p className="font-bold text-center text-white">Consulting</p>
        <div className="font-medium leading-relaxed text-white ">
          We've identified vulnerabilities and improved the smart contract
          security in well-known DAO projects.
        </div>
      </div>
    </div>
  </div>
);
const Intro = () => {
  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block">
        <IntroDesktop />
      </div>

      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden">
        <IntroMobile />
      </div>
    </>
  );
};

export default Intro;
