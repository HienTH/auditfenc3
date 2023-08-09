import Image from "next/image";
import React from "react";
const AuditDestop = () => (
  <div className="grid grid-cols-2 p-48 min-w-fit">
    <div className="flex items-center">
      <Image
        src={"/assets/Business.png"}
        width={388}
        height={50}
        className="w-96 h-96"
        alt="logo"
      ></Image>
    </div>
    <div className="">
      <p className="pb-5 text-3xl font-bold text-left uppercase text-primary">
        Audit
      </p>
      <p className="text-3xl font-bold text-white ">
        Comprehensive & Accurate Auditing Process
      </p>
      <div className="font-medium leading-relaxed text-white ">
        Fenc3 is one of the leading and recognised audit authorities in the
        crypto space. Its audits are recognised from launchpads like PinkSale,
        Unicrypt and DxSale and can earn a badge for your project.
        <br />
        <br />
        The audit service guarantees to build trust and recognition for your
        project. It will improve your smart contract security and will be the
        main building block for all your marketing efforts.
      </div>
      <div className="grid grid-cols-2">
        <div className="pt-14">
          <div className="flex items-center">
            <Image
              src={"/assets/audits.png"}
              width={50}
              height={50}
              className="pr-2"
              alt="logo"
            ></Image>
            <div className="text-xl font-bold text-white">
              Audit Certificate
            </div>
          </div>
          <div className="font-medium leading-relaxed text-white">
            Receive an audit certificate to share with your investors and
            community, alongside the full audit report.
          </div>
          <button className="px-5 py-2 my-4 mr-6 text-center text-black bg-primary rounded-3xl">
            Get a Free quote
          </button>
        </div>
        <div className="pt-14">
          <div className="flex items-center">
            <Image
              src={"/assets/Asset 2 1.png"}
              width={50}
              height={50}
              className="pr-2"
              alt="logo"
            ></Image>
            <div className="text-2xl font-bold text-white">
              Post-Audit Marketing
            </div>
          </div>
          <div className="font-medium leading-relaxed text-white">
            Once you pass the Audit, we will promote your project to Fenc3 the
            leading voting website with more than 500k monthly visitors.
          </div>
        </div>
      </div>
    </div>
  </div>
);
const AuditMobile = () => (
  <>
    <div className="my-4">
      <p className="pb-5 text-3xl font-bold text-left uppercase text-primary">
        Audit
      </p>
      <p className="font-bold text-white ">
        Comprehensive & Accurate
        <br />
        Auditing Process
      </p>
      <div className="my-5 font-medium leading-relaxed text-white ">
        Fenc3 is one of the leading and recognised audit authorities in the
        crypto space. Its audits are recognised from launchpads like PinkSale,
        Unicrypt and DxSale and can earn a badge for your project.
        <br />
        <br />
        The audit service guarantees to build trust and recognition for your
        project. It will improve your smart contract security and will be the
        main building block for all your marketing efforts.
      </div>
      <div className="flex items-center my-4">
        <Image
          src={"/assets/audits.png"}
          width={50}
          height={50}
          className="pr-2"
          alt="logo"
        ></Image>
        <div className="text-xl font-bold text-white">Audit Certificate</div>
      </div>
      <div className="font-medium leading-relaxed text-white">
        Receive an audit certificate to share with your investors and community,
        alongside the full audit report.
      </div>
      <button className="px-5 py-2 my-4 mr-6 text-center text-black bg-primary rounded-3xl">
        Get a Free quote
      </button>
      <div className="flex items-center my-5">
        <Image
          src={"/assets/Asset 2 1.png"}
          width={50}
          height={50}
          className="pr-2"
          alt="logo"
        ></Image>
        <div className="font-bold text-white text">Post-Audit Marketing</div>
      </div>
      <div className="font-medium leading-relaxed text-white">
        Once you pass the Audit, we will promote your project to Fenc3 the
        leading voting website with more than 500k monthly visitors.
      </div>
    </div>
  </>
);
const Audit = () => {
  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block">
        <AuditDestop />
      </div>
      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden">
        <AuditMobile />
      </div>
    </>
  );
};

export default Audit;
