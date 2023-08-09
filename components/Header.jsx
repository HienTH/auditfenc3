import Image from "next/image";
import React from "react";
import Logo from "../icons/Logo";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
const HeaderDraft = () => (
  <div className="w-full h-[140px] bg-black flex justify-between items-center p-16">
    <div className="logo">
      <Image
        src={"/assets/logo header.png"}
        width={50}
        height={50}
        className="w-[108px] h-[38.89px]"
        alt="logo"
      ></Image>
    </div>
    <div className="flex flex-row items-center gap-14">
      <Link
        href={'"#'}
        className="text-center text-white text-[18px] leading-relaxed"
      >
        Products
      </Link>
      <Link
        href={'"#'}
        className="text-center text-white text-[18px] leading-relaxed"
      >
        Meet the team
      </Link>
      <Link
        href={'"#'}
        className="text-center text-white text-[18px] leading-relaxed"
      >
        Network
      </Link>
      <Link
        href={'"#'}
        className="text-center text-white text-[18px] leading-relaxed"
      >
        Blog
      </Link>

      <button className="w-36 h-[50px] bg-primary rounded-[88px] text-center text-black text-[18px]">
        Go to App
      </button>
    </div>
  </div>
);
const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 text-white bg-black mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="logo">
              <Image
                src={"/assets/logo header.png"}
                width={50}
                height={50}
                className="w-[108px] h-[38.89px]"
                alt="logo"
              ></Image>
            </div>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                width="24"
                height="20"
                viewBox="0 0 24 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="4" fill="white" />
                <rect y="8" width="24" height="4" fill="white" />
                <rect y="16" width="24" height="4" fill="white" />
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Product</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Meet the team</span>
                </a>
              </li>
              <li className="nav-item mx-auto">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Network</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Blog</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <button className=" bg-primary rounded-3xl text-center text-black p-2">
                    Go to App
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
