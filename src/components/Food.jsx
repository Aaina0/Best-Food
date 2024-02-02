import React, { useState } from "react";
import { data } from "../data/data";

export default function Food() {
  //   console.log(data);

  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12">
      <h1 className="text-indigo-950 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between ">
        <div>
          <p
            className="font-b
           text-gray-700 "
          >
            Filter Type{" "}
          </p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white rounded-lg p-1"
            >
              All
            </button>
            <button
              onClick={() => filterType("burger")}
              className="m-1 border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white rounded-lg p-1"
            >
              Burger
            </button>
            <button
              onClick={() => filterType("pizza")}
              className="m-1 border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white rounded-lg p-1"
            >
              Pizza
            </button>
            <button
              onClick={() => filterType("salad")}
              className="m-1 border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white rounded-lg p-1"
            >
              Chicken
            </button>
            <button
              onClick={() => filterType("chicken")}
              className="m-1 border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white rounded-lg p-1"
            >
              Salad
            </button>
          </div>
        </div>
        <div>
          <p
            className="font-b
           text-gray-700 "
          >
            Filter Price
          </p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterPrice("$")}
              className="border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white m-1 rounded-lg p-1"
            >
              $
            </button>
            <button
              onClick={() => filterPrice("$$")}
              className="border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white m-1 rounded-lg p-1"
            >
              $$
            </button>
            <button
              onClick={() => filterPrice("$$$")}
              className="border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white m-1 rounded-lg p-1"
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice("$$$$")}
              className="border border-indigo-800 text-indigo-800 hover:bg-indigo-700 hover:text-white m-1 rounded-lg p-1"
            >
              $$$$
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            key={index}
          >
            <img
              className="w-full h-[200px] object-cover rounded-t-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{item.name}</p>
              <p className="bg-indigo-700 text-white p-1 rounded-full">
                <span>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
