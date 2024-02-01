import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscSearch } from "react-icons/vsc";
import { HiShoppingCart } from "react-icons/hi2";
import { IoCloseCircleSharp } from "react-icons/io5";
import { CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { LuHelpingHand } from "react-icons/lu";
import { AiFillTags } from "react-icons/ai";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { BsFillSaveFill } from "react-icons/bs";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <GiHamburgerMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
        <VscSearch size={30} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 px-2 rounded-full">
        <HiShoppingCart size={30} className="mr-2" /> Cart
      </button>

      {/* mobile GiHamburgerMenu overly */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <IoCloseCircleSharp
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-400">
            <li className="text-xl py-4 flex">
              <CiDeliveryTruck size={30} className="mr-2" />
              Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavoriteBorder size={30} className="mr-2" />
              Favorite
            </li>
            <li className="text-xl py-4 flex">
              <CiWallet size={30} className="mr-2" />
              Wallet
            </li>
            <li className="text-xl py-4 flex">
              <LuHelpingHand size={30} className="mr-2" />
              Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTags size={30} className="mr-2" />
              Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={30} className="mr-2" />
              Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <LiaUserFriendsSolid size={30} className="mr-2" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
