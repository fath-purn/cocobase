"use client";
import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
} from "@mdi/js";
import { Produksi } from "@/app/utils/interface";

export default function Table({ produksiList }: { produksiList: Produksi[] }) {
  const handleUpdate = (produksi: Produksi) => {
    // Fungsi untuk mengupdate data produksi
  };

  const handleDelete = (produksi: Produksi) => {
    // Fungsi untuk menghapus data produksi
  };

  return (
    <>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Petani</th>
            <th className="border border-gray-300 p-2">Produk</th>
            <th className="border border-gray-300 p-2">Jumlah</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {produksiList.map((produksi, index) => (
            <tr
              key={produksi.id}
              style={{
                backgroundColor: index % 2 === 1 ? "#f2f2f2" : "#ffffff",
              }}
            >
              <td className="border border-gray-300 p-[6px] text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-[6px]">
                {produksi.petani}
              </td>
              <td className="border border-gray-300 p-[6px]">
                {produksi.produk}{" "}
              </td>
              <td className="border border-gray-300 p-[6px] text-center">
                {produksi.jumlah}
              </td>
              <td className="border border-gray-300 p-[6px] text-center">
                {produksi.status}
              </td>
              <td className="border border-gray-300 p-[6px]">
                <div className="flex justify-center space-x-2">
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleUpdate(produksi)}
                  >
                    <Icon
                      path={mdiArrowUpBoldBoxOutline}
                      size={1}
                      color="#fff"
                    />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleDelete(produksi)}
                  >
                    <Icon path={mdiDeleteOutline} size={1} color="#fff" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
