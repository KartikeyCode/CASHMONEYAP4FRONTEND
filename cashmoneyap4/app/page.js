"use client";
import Navbar from "./components/navbar";
import Front from "./components/front";
import Search from "./components/search";

export default function Home() {
  return (
    <div className="bg-[#e7e8e2] min-h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <Front></Front>
      <Search></Search>
    </div>
  );
}
