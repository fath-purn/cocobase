// "use client";
import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiAccount, mdiMenu, mdiMagnify } from "@mdi/js";
import Profile from "../../../public/cblogo.png";
import Image from "next/image";

const TopBar: React.FC = () => {
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="bg-white items-center flex justify-between py-3 mb-5 md:mb-8 pl-4">
      {/* Div kosong untuk mendorong search bar ke tengah */}
      <div className=""></div>
      {/* Search bar di tengah */}
      <div className="flex flex-row border border-gray-300 rounded-full p-2 w-80">
        <Icon path={mdiMagnify} size={1.2} color={"gray"} className="ml-1" />
        <input
          type="text"
          placeholder="Cari"
          className="w-full outline-none px-2 text-[#202224]"
        />
      </div>
      {/* Div terakhir di bagian belakang */}
      <div className="flex flex-row items-center gap-3 mr-10">
        <Image src={Profile} alt="logo" width={44} height={44} className="border border-gray-500 rounded-full object-cover aspect-square" />
        <div className="flex items-center">
          <p className="text-[#202224]">nama saya</p>
          {/* <Icon path={mdiMenuDown} size={1.5} className="w-6" /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
