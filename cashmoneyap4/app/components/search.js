"use client";

import Image from "next/image";
import logo from "../../public/chatgpt.png";
import sicon from "../../public/search.png";
import { useState } from "react";
import { useRouter } from "next/navigation";
import getReview from "../lib/ai/GetReview";

export default function Search() {
  const [show, setShow] = useState("hidden");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");
  const router = useRouter();
  const handleClick = async (e) => {
    e.preventDefault();
    if (input === "") {
      console.log("its empty");
    } else {
      // console.log(input);
      const formdata = { userInput: input };
      const resp = await getReview(formdata);
      const outputText = resp.data.output.text;
      setOutput(outputText);
    }
  };

  return (
    <>
      <div className=" xl:-mt-11 flex justify-center">
        <button
          onClick={() => {
            setShow("");
          }}
          className="bg-[#958f89] z-10 font-bold xl:text-xl font-Cinz xl:w-44 rounded-full p-4 xl:mb-16 mb-10 hover:scale-110"
        >
          Access GPT
        </button>
      </div>

      <div className=" xl:-mt-10 md:mb-14 flex justify-center">
        <input
          className="z-10 outline-none text-lg px-4 lg:px-6 text-white md:text-2xl xl:text-4xl font-Roboto rounded-l-full h-12 w-60 lg:w-[900px] xl:h-20 xl:w-[1200px] bg-[#940242]"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
        <button
          onClick={() => router.push(`/itemlist/${search}`)}
          className="z-10 outline-none text-lg px-4 lg:px-6 text-white md:text-2xl xl:text-4xl font-Roboto rounded-r-full h-12 w-20 lg:w-[100px] xl:h-20 xl:w-[200px] bg-[#940242]"
        >
          <Image className="w-6 ml-6 xl:w-12 xl:ml-16" src={sicon}></Image>
        </button>

        <div className="box z-0 opacity-50">
          <div className="">
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
          <div>
            <Image className="w-12 md:w-32" src={logo} alt="logo"></Image>
          </div>
        </div>
      </div>

      <div
        className={` ${show} z-20 fixed flex justify-center items-center  bg-opacity-30 inset-0 bg-[#f15483] backdrop-blur-md `}
      >
        <div className="bg-[#ee9db5] rounded-xl w-80 h-[550px] xl:w-[1400px] xl:h-[600px]">
          <div className="select-none  float-right mr-5 mt-2 xl:mt-4">
            <h1
              onClick={() => {
                setShow("hidden");
              }}
              className="xl:text-xl font-bold text-black hover:scale-125"
            >
              {" "}
              X{" "}
            </h1>
          </div>

          <h1 className="text-black font-Cinz xl:ml-16 xl:text-3xl text-xl ml-4 mt-6 font-bold ">
            {" "}
            What is.....
          </h1>

          <div className="flex flex-col justify-center items-center">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              className=" bg-[#e7e8e2] border rounded-full px-4 border-black xl:w-[1300px] mt-4 w-72 h-14"
            />
            <button
              onClick={handleClick}
              className="mt-5 font-Cinz font-bold bg-[#958f89] p-3 rounded-full xl:hover:scale-125"
            >
              {" "}
              Submit{" "}
            </button>
          </div>
          <h1 className="text-black xl:ml-16 font-Cinz text-xl xl:text-3xl ml-4 mt-6 font-bold ">
            {" "}
            Output:
          </h1>
          <div className="xl:ml-16 xl:w-[1300px] p-4 ml-4 h-72 w-72 rounded-2xl bg-[#e7e8e2] overflow-x-scroll ">
            {output}
          </div>
        </div>
      </div>
    </>
  );
}
