"use client";

import Link from "next/link";
import { useState } from "react";
import Pagination from "@/app/ui/pagination";
import { SearchParams } from "@/app/utils/interface";
import Image from "next/image";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
  mdiExpandAll,
} from "@mdi/js";

interface Produk {
  id: number;
  nama: string;
  gambar: string;
  link: string;
  deskripsi: string;
}

export default function Page({ searchParams }: { searchParams: SearchParams }) {
  const [dataProduk, setDataProduk] = useState<Produk[]>([
    {
      id: 1,
      nama: "Produk 1",
      gambar:
        "https://ik.imagekit.io/purnomo/1707564605013_ztTGXktuv.jpg?updatedAt=1707564606221", // Contoh link gambar
      link: "https://www.google.com/",
      deskripsi: "Deskripsi produk 1 Deskripsi produk 1Deskripsi produk 1",
    },
    {
      id: 2,
      nama: "Produk 2",
      gambar:
        "https://ik.imagekit.io/purnomo/1707564460974_zCivY2pwc.jpg?updatedAt=1707564462112", // Contoh link gambar
      link: "https://www.google.com/",
      deskripsi: "Deskripsi produk 2",
    },
    {
      id: 3,
      nama: "Produk 3",
      gambar:
        "https://ik.imagekit.io/purnomo/1707563570936_e-ePqEDTX.jpg?updatedAt=1707563572052", // Contoh link gambar
      link: "https://www.google.com/",
      deskripsi: "Deskripsi produk 3",
    },
    {
      id: 4,
      nama: "Produk 1",
      gambar:
        "https://ik.imagekit.io/purnomo/1724813068777_C7Uf8sZw2.PNG?updatedAt=1724813070480", // Contoh link gambar
      link: "https://www.google.com/",
      deskripsi: "Deskripsi produk 1",
    },
    {
      id: 5,
      nama: "Produk 2",
      gambar:
        "https://ik.imagekit.io/purnomo/1707564460974_zCivY2pwc.jpg?updatedAt=1707564462112", // Contoh link gambar
      link: "https://www.google.com/",
      deskripsi: "Deskripsi produk 2",
    },
    {
      id: 6,
      nama: "Produk 3",
      gambar:
        "https://ik.imagekit.io/purnomo/1707563570936_e-ePqEDTX.jpg?updatedAt=1707563572052", // Contoh link gambar
      link: "https://www.google.com/",
      deskripsi: "Deskripsi produk 3",
    },
  ]);
  const [totalPages, setTotalPages] = useState<number>(3);

  const handleUpdate = (produk: Produk) => {
    // Fungsi untuk mengupdate data petani
  };

  const handleDelete = (produk: Produk) => {
    // Fungsi untuk menghapus data petani
  };

  return (
    <div className="mr-5 p-10 md:mr-8 bg-white rounded-lg mb-5 md:mb-8 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Daftar Produksi</h1>
        <Link
          href={"/admin/produk/add"}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <p className="flex items-center">
            <span className="font-bold text-xl mr-1">+</span> Tambah Produk
          </p>
        </Link>
      </div>

      {/* Produk */}
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
                    <Icon
                      path={mdiArrowUpBoldBoxOutline}
                      size={1}
                      color="#fff"
                    />
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

      {/* pagination */}
      {/* {pagination && ( */}
      <div className="flex flex-row justify-center items-center mt-10">
        <Pagination totalPages={totalPages} />
      </div>
      {/* )} */}
    </div>
  );
}
