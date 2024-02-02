import React from "react";
import food from "../assets/food.jpg";

export default function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 ">
      <div className="max-h-[500px] relative">
        {/* overlay */}
        <div className="absolute w-full h-full text-gray-300 max-h-[500px] bg-black/40 flex-col justify-center">
          <h1 className="px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-indigo-950 ">Best</span>
          </h1>
          <h1 className="px-4 text-xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods<span className="text-indigo-950 ">Delivery</span>
          </h1>
        </div>
        <img className="w-full max-h-[500px] object-cover" src={food} alt="img" />
      </div>
    </div>
  );
}
