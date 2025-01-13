"use client";

import Link from "next/link";
import { Produk } from "@/app/utils/interface";
import Image from "next/image";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
  mdiExpandAll,
} from "@mdi/js";

export default function Card({ dataProduk }: { dataProduk: Produk[] }) {
  const handleUpdate = (produk: Produk) => {
    // Fungsi untuk mengupdate data petani
  };

  const handleDelete = (produk: Produk) => {
    // Fungsi untuk menghapus data petani
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center m-auto w-full mt-5 gap-3">
      {dataProduk?.map((produk, index) => {
        return (
          <div
            key={index}
            className="flex flex-row justify-start md:flex-col bg-white rounded-lg shadow-md mt-3 h-full transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <Image
              src={produk.gambar}
              alt={produk.nama}
              width={237}
              height={200}
              className="object-cover rounded-lg w-[237px] h-[200px] "
            />
            <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
              <div className="w-[90%]">
                <h3 className="text-black text-xl font-medium mb-3">
                  {produk.nama}
                </h3>
                <p className="text-black text-sm">{produk.deskripsi}</p>
              </div>
            </div>
            <div className="mt-auto flex justify-center mb-3">
              <div className="w-[90%] flex gap-2">
                <Link
                  href={produk.link}
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-700 text-white grow font-bold w-fit p-1 rounded"
                >
                  <Icon path={mdiExpandAll} size={1} color="#fff" />
                </Link>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold w-fit p-1 rounded"
                  onClick={() => handleUpdate(produk)}
                >
                  <Icon path={mdiArrowUpBoldBoxOutline} size={1} color="#fff" />
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold w-fit p-1 rounded"
                  onClick={() => handleDelete(produk)}
                >
                  <Icon path={mdiDeleteOutline} size={1} color="#fff" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
