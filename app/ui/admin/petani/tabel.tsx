'use client'
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
  mdiExpandAll,
} from "@mdi/js";
import { Petani } from "@/app/utils/interface";
import Link from "next/link";

export default function Table({ petaniList }: { petaniList: Petani[] }) {
  const handleUpdate = (petani: Petani) => {
    // Fungsi untuk mengupdate data petani
  };

  const handleDelete = (petani: Petani) => {
    // Fungsi untuk menghapus data petani
  };

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
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-fit p-1 rounded"
                    href={`/admin/petani/${petani.id}`}
                  >
                    <Icon path={mdiExpandAll} size={1} color="#fff" />
                  </Link>
                  <Link
                    href={`/admin/petani/${petani.id}/edit`}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold w-fit p-1 rounded"
                  >
                    <Icon
                      path={mdiArrowUpBoldBoxOutline}
                      size={1}
                      color="#fff"
                    />
                  </Link>
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
    </>
  );
}
