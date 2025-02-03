import Profile from "@/public/home.png";
import Image from "next/image";
import Search from "@/app/ui/admin/search";
import { Suspense } from "react";

const TopBar: React.FC = () => {

  return (
    <div className="bg-white items-center flex justify-between py-3 mb-5 md:mb-8 pl-4">
      {/* Div kosong untuk mendorong search bar ke tengah */}
      <div className=""></div>
      {/* Search bar di tengah */}
      <Suspense fallback={<div>Loading...</div>}>
        <Search placeholder="Search.." />
      </Suspense>
      {/* Div terakhir di bagian belakang */}
      <div className="flex flex-row items-center gap-3 mr-10">
        <Image
          src={Profile}
          alt="logo"
          width={100}
          height={100}
          className="border border-gray-500 rounded-full object-cover aspect-square"
        />
        <div className="flex items-center">
          <p className="text-[#202224]">Admin Cocobase</p>
          {/* <Icon path={mdiMenuDown} size={1.5} className="w-6" /> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
