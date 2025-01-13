'use client'

import Link from "next/link";
import { useState } from "react";
import { Produk } from "@/app/utils/interface";
import Card from "@/app/ui/admin/produk/card";

export default function Page() {

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
      <Card dataProduk={dataProduk} />

    </div>
  );
}
