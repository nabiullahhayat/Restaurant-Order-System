import BrekFast from "../Components/BrekFast";
import LunchAndDinner from "../Components/LunchAndDinner";
import Drinks from "../Components/Drinks";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-4 bg-black text-white">
      <title>Home</title>
      <div className="flex flex-col justify-center items-center row-start-1 row-span-1">
      <h1 className=" text-yellow-500 font-bold text-6xl">WILLCOME</h1>
      </div>
      <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-[41px] justify-center space-y-[45px] items-center row-start-2 row-span-2">
       <Link className="text-shadow-2xs text-shadow-black w-fit p-3 text-4xl sm:text-5xl rounded-2xl border-r-[1.5px] border-b-[1.5px] border-yellow-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50" to="/breakfast"> BrekFast </Link>
       <Link className=" text-shadow-2xs text-shadow-black w-fit p-3 text-4xl sm:text-5xl rounded-2xl border-r-[1.5px] border-b-[1.5px] border-yellow-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50" to="/lunch">Lunch & Dinner</Link>
       <Link className=" text-shadow-2xs text-shadow-black w-fit p-3 text-4xl sm:text-5xl rounded-2xl border-r-[1.5px] border-b-[1.5px] border-yellow-600 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/50" to="/drinks">Drinks</Link>
      </div>
    </div>
  );
}

export default HomePage;



