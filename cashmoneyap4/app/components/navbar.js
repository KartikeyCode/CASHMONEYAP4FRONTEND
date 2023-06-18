"use client";
import Link from "next/link";
import Image from "next/image";
import menu from "../../public/menu.png";
import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const [hide, setHide] = useState(true);
  const { username } = useGlobalContext();
  return (
    <div className=" z-10 relative">
      <div className=" w-screen md:py-0 py-4 md:h-16 xl:h-24 bg-gradient-to-r from-[#940242] to-[#f15483] md:justify-between md:flex md:items-center">
        <div className="flex justify-between">
          <a
            href="/"
            className="text-white mx-5 xl:mx-10 self-center font-bold font-Cinzel xl:text-6xl select-none"
          >
            UniBarter
          </a>
          <Image
            onClick={() => setHide((current) => !current)}
            className="self-center md:hidden mr-6 cursor-pointer"
            src={menu}
          ></Image>
        </div>

        <div
          className={`md:my-0 z-15 md:z-auto mr-20 md:px-0 md:py-0 px-4 py-2 md:block ${
            hide ? "hidden" : ""
          }`}
        >
          <div className="flex flex-col md:flex-row">
            <Link
              href="/"
              className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"
            >
              {" "}
              Home{" "}
            </Link>
            {username ? (
              <>
                <h2 className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl">
                  {username}
                </h2>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"
                >
                  {" "}
                  Log In{" "}
                </Link>
                <Link
                  href="/signup"
                  className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"
                >
                  {" "}
                  Sign Up{" "}
                </Link>
              </>
            )}
            <Link
              href="/requests"
              className="text-white text-sm font-bold font-Cinz mr-6 xl:text-2xl"
            >
              {" "}
              Requests{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
