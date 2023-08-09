import Image from "next/image";
import Link from "next/link";
import React from "react";
const FooterDesktop = () => (
  <>
    <div className="h-[457px] w-full text-white flex justify-between px-48 py-20">
      <div className="">
        <Link
          href={"#"}
          className="text-left text-primary text-[30px] font-bold mb-[45px]"
        >
          Website
        </Link>
        <div className="flex flex-col gap-1">
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Sitemap
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Privacy Policy
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Term & Conditions
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Audits
          </Link>
          <Link
            href={"#"}
            className="text-left text-white text-[18px] leading-relaxed"
          >
            Brand Assets
          </Link>
        </div>
        <div className="flex flex-row gap-4 social mt-[27px]">
          <Link href={"https://twitter.com/fenc3_com"}>
            <Image
              src={"/assets/social network (1).png"}
              width={20}
              height={20}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>

          <Link href={"https://t.me/Fenc3ecosystem_ann"}>
            <Image
              src={"/assets/social network (3).png"}
              width={20}
              height={20}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/uncle-dre-056a50280?trk=contact-info"
            }
          >
            <Image
              src={"/assets/social network (2).png"}
              width={20}
              height={20}
              className="pb-2"
              alt="logo"
            ></Image>
          </Link>
        </div>
      </div>
      <div className="flex items-end">
        <svg
          width="136"
          height="49"
          viewBox="0 0 136 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M59.1852 25.9443V27.8624V29.4831V31.4011V35.5344H61.1006V31.4011H68.7625V29.4831H61.1006V27.8624H68.7625V25.9443H61.1006H59.1852Z"
            fill="#9BE4FB"
          />
          <path
            d="M75.2943 25.9443V27.8624V29.7804V31.6984V33.6164V35.5344H77.2097H84.8716V33.6164H77.2097V31.6984H82.8364V29.7804H77.2097V27.8624H84.8716V25.9443H77.2097H75.2943Z"
            fill="#9BE4FB"
          />
          <path

            d="M106.899 25.9443V27.8624V33.6164V35.5344H108.815H116.477V33.6164H108.815V27.8624H116.477V25.9443H108.815H106.899Z"
            fill="#9BE4FB"
          />
          <path
            d="M98.5647 32.5519L92.9715 25.9443L92.8997 26.0043V25.9443H90.9843V35.5344H92.8997V28.8262L98.5647 35.52V35.5344H100.48V25.9443H98.5647V32.5519Z"
            fill="#9BE4FB"
          />
          <path
            d="M118.639 21.8779V39.2623H136V21.8779H118.639ZM132.107 27.6943V35.3664H122.53V33.4484H130.191V31.5303H124.565V29.6123H130.191V27.6943H122.53V25.7763H132.107V27.6943Z"
            fill="#9BE4FB"
          />
          <path
            d="M22.0459 0L0.120898 5.54311V5.5971C-0.036577 7.80625 -0.51575 14.5507 2.67424 27.6706C5.34006 38.6376 14.9393 44.5811 20.0954 47.7711L22.0459 48.9746L23.9941 47.7643C29.1502 44.5721 38.7495 38.6376 41.4153 27.6706C42.9315 21.4526 44.5355 8.83658 44.9045 5.77707L22.0459 0ZM39.7708 27.2791C37.2714 37.56 28.0592 43.2673 23.1055 46.3336L22.0459 46.986L20.9841 46.3426C16.0348 43.2763 6.81133 37.569 4.31873 27.2881C2.76197 20.8879 1.45718 13.4506 1.75639 6.8704L3.02068 6.5487H3.04543L3.09942 6.53295L22.0459 1.74572L41.0531 6.5487H41.0688L42.7583 6.97388C42.5176 13.5766 41.1543 21.5965 39.7708 27.2791Z"
            fill="#7CD8F8"
          />
          <path
            d="M18.2709 24.8247V30.8267H21.4317L20.1539 30.3161V24.8247H18.2709Z"
            fill="#7CD8F8"
          />
          <path
            d="M23.9516 24.8247V30.8267H27.1146L25.8368 30.3161V24.8247H23.9516Z"
            fill="#7CD8F8"
          />
          <path
            d="M12.5863 24.8247V30.8267H15.7808L14.4715 30.3161V24.8247H12.5863Z"
            fill="#7CD8F8"
          />
          <path
            d="M14.4715 32.71H12.5975V36.7841C13.2094 37.4185 13.8378 38.0184 14.4827 38.5838L14.4715 32.71Z"
            fill="#7CD8F8"
          />
          <path
            d="M18.2709 41.5353C18.9143 41.9852 19.5442 42.4014 20.1539 42.7928V32.71H18.2709V41.5353Z"
            fill="#7CD8F8"
          />
          <path
            d="M39.8586 8.85921C39.285 8.73323 38.4593 8.52851 37.2963 8.23156L22.046 4.37793L6.79342 8.23156C5.63036 8.52851 4.81374 8.73323 4.23108 8.85921C4.23108 10.6747 4.42005 16.8927 6.79342 26.6719C7.15004 28.1064 7.66303 29.4975 8.32317 30.8202H10.1049L8.7956 30.3095V24.8249H7.70227V22.9465H10.1926L8.7866 22.3705V21.2817L10.7033 20.1951L12.5975 21.2817V22.9465H15.8752L14.4714 22.3705V19.9702L16.3881 18.8971L18.2711 19.9814V22.9465H21.5601L20.154 22.3705V18.4067L22.046 17.3224L23.9604 18.4067V22.9465H27.2494L25.8456 22.3705V19.9702L27.7218 18.8971L29.6048 19.9814V22.9465H32.9252L31.5192 22.3705V21.2817L33.4022 20.1951L35.2874 21.2817V22.9465H36.4122V24.8294H35.2874V30.8202H35.7688C36.4273 29.4954 36.9373 28.1019 37.2895 26.6651C39.6697 16.8927 39.8654 10.6747 39.8586 8.85921Z"
            fill="#7CD8F8"
          />
          <path
            d="M29.6049 24.8247V30.8267H32.7971L31.5216 30.3161V24.8247H29.6049Z"
            fill="#7CD8F8"
          />
          <path
            d="M23.9516 42.7838C24.5613 42.3902 25.1934 41.9717 25.8368 41.5241V32.71H23.9516V42.7838Z"
            fill="#7CD8F8"
          />
          <path
            d="M31.5193 32.71H29.6049V38.5973C30.2573 38.0236 30.8984 37.414 31.5193 36.7683V32.71Z"
            fill="#7CD8F8"
          />
        </svg>
      </div>
    </div>
  </>
);
const FooterMobile = () => (
  <div className="py-10">
    <div className="flex justify-center ">
      <Link
        href={"#"}
        className="text-center text-primary text-[30px] font-bold mb-[45px]"
      >
        Website
      </Link>
    </div>
    <div className="flex flex-col gap-1">
      <Link href={"#"} className="leading-relaxed text-center text-white">
        Sitemap
      </Link>
      <Link href={"#"} className="leading-relaxed text-center text-white">
        Privacy Policy
      </Link>
      <Link href={"#"} className="leading-relaxed text-center text-white">
        Term & Conditions
      </Link>
      <Link href={"#"} className="leading-relaxed text-center text-white">
        Audits
      </Link>
      <Link href={"#"} className="leading-relaxed text-center text-white">
        Brand Assets
      </Link>
    </div>
    <div className="flex flex-row justify-center gap-4 my-6">
      <Link href={"https://twitter.com/fenc3_com"}>
        <Image
          src={"/assets/social network (1).png"}
          width={20}
          height={20}
          className="pb-2"
          alt="logo"
        ></Image>
      </Link>

      <Link href={"https://t.me/Fenc3ecosystem_ann"}>
        <Image
          src={"/assets/social network (3).png"}
          width={20}
          height={20}
          className="pb-2"
          alt="logo"
        ></Image>
      </Link>
      <Link
        href={
          "https://www.linkedin.com/in/uncle-dre-056a50280?trk=contact-info"
        }
      >
        <Image
          src={"/assets/social network (2).png"}
          width={20}
          height={20}
          className="pb-2"
          alt="logo"
        ></Image>
      </Link>
    </div>
  </div>
);
const Footer = () => {
  // Use the window.innerWidth to check the screen size

  return (
    <>
      {/* Display the desktop footer on screens larger than sm (640px) */}
      <div className="hidden sm:block">
        <FooterDesktop />
      </div>

      {/* Display the mobile footer on screens smaller than sm (640px) */}
      <div className="block sm:hidden">
        <FooterMobile />
      </div>
    </>
  );
};

export default Footer;
