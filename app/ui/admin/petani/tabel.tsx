"use client";
import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
  mdiExpandAll,
} from "@mdi/js";
import { Petani } from "@/app/utils/interface";

export default function Table({ petaniList }: { petaniList: Petani[] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPetani, setSelectedPetani] = useState<Petani | null>(null);

  const handleShowModal = (petani: Petani) => {
    setShowModal(true);
    setSelectedPetani(petani);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdate = (petani: Petani) => {
    // Fungsi untuk mengupdate data petani
  };

  const handleDelete = (petani: Petani) => {
    // Fungsi untuk menghapus data petani
  };

  //   menggunakan useEffect untuk menangani event keyboard
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [handleCloseModal]);

  return (
    <>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">No</th>
            <th className="border border-gray-300 p-2">Nama</th>
            <th className="border border-gray-300 p-2">Alamat</th>
            <th className="border border-gray-300 p-2">Telepon</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {petaniList.map((petani, index) => (
            <tr
              key={petani.id}
              style={{
                backgroundColor: index % 2 === 1 ? "#f2f2f2" : "#ffffff",
              }}
            >
              <td className="border border-gray-300 p-[6px] text-center">
                {index + 1}
              </td>
              <td className="border border-gray-300 p-[6px]">{petani.nama}</td>
              <td className="border border-gray-300 p-[6px]">
                {petani.alamat && petani.alamat.length > 30
                  ? petani.alamat.slice(0, 30) + "..."
                  : petani.alamat}
              </td>
              <td className="border border-gray-300 p-[6px]">{petani.telepon}</td>
              <td className="border border-gray-300 p-[6px]">
                <div className="flex justify-center space-x-2">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleShowModal(petani)}
                  >
                    <Icon path={mdiExpandAll} size={1} color="#fff" />
                  </button>
                  <button
                    className="bg-green-500 hover:bg-green-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleUpdate(petani)}
                  >
                    <Icon
                      path={mdiArrowUpBoldBoxOutline}
                      size={1}
                      color="#fff"
                    />
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold w-fit p-1 rounded"
                    onClick={() => handleDelete(petani)}
                  >
                    <Icon path={mdiDeleteOutline} size={1} color="#fff" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-4 rounded-lg w-1/2 h -1/2 overflow-y-auto z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold mb-2">Deskripsi Petani</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-1">
                <p>Nama</p>
                <p>Telepon</p>
                <p>Alamat</p>
              </div>
              <div className="col-span-4">
                <p>: {selectedPetani?.nama}</p>
                <p>: {selectedPetani?.telepon}</p>
                <p>: {selectedPetani?.alamat}</p>
              </div>
              <div className="col-span-1">
                <div className="text-center rounded-lg shadow-md ">
                  <div className="rounded-t-lg p-2 w-full bg-[#FEE8CC]">
                    <p>{selectedPetani?.produk.nama}</p>
                    <p>{selectedPetani?.produk.total}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="mt-4 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
