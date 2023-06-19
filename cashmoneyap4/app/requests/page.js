import Navbar from "../components/navbar";

export default function Requests() {
  return (
    <div className="min-h-screen bg-[#e7e8e2]">
      <Navbar />
      <div className="xl:text-4xl mt-8  xl:mt-12  flex justify-between items-center">
        <h1 className="font-Cinz font-bold ml-5 xl:ml-8">Current Requests: </h1>
        <button className="font-Cinz font-bold mr-5 bg-[#958f89] p-3 rounded-full">
          {" "}
          Submit a Request
        </button>
      </div>
    </div>
  );
}
