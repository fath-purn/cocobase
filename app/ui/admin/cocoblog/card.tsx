"use client";

import Link from "next/link";
import { Cocoblog } from "@/app/utils/interface";
import Image from "next/image";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
  mdiExpandAll,
} from "@mdi/js";
import { useState, useEffect } from "react";
import Pagination from "@/app/ui/pagination";
import { getData } from "@/app/utils/fetchData";

export default function Card({
  currentPage,
  limit,
  search,
}: {
  limit: number;
  currentPage: number;
  search: string;
}) {
  const [cocoblogList, setCocoblogList] = useState<Cocoblog[]>([]);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData({
          path: "/cocoblog",
          limit: limit,
          currentPage: currentPage,
          search: search,
        });

        setCocoblogList(data.cocoblog);
        setTotalItems(Math.ceil(data.pagination.total_items / limit));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [currentPage, search, limit]);

  const handleUpdate = (cocoblog: Cocoblog) => {
    // Fungsi untuk mengupdate data produk
  };

  const handleDelete = (cocoblog: Cocoblog) => {
    // Fungsi untuk menghapus data produk
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center m-auto w-full mt-5 gap-3">
        {cocoblogList ? (
          cocoblogList?.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-row justify-start md:flex-col bg-white rounded-lg shadow-md mt-3 h-full"
              >
                <Image
                  src={data.gambar}
                  alt={data.judul}
                  width={237}
                  height={200}
                  className="object-cover rounded-lg w-[237px] h-[200px] "
                />
                <div className="flex items-center justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
                  <div className="w-[90%]">
                    <h3 className="text-black text-xl font-medium mb-3">
                      {data.judul}
                    </h3>
                    <p className="text-black text-sm line-clamp-3">
                      {data.isi}
                    </p>
                  </div>
                </div>
                <div className="mt-auto flex justify-center mb-3">
                  <div className="w-[90%] flex gap-2">
                    <Link
                      href={`/cocoblog/${data.id}`}
                      target="_blank"
                      className="bg-blue-500 hover:bg-blue-700 text-white grow font-bold w-fit p-1 rounded"
                    >
                      <Icon path={mdiExpandAll} size={1} color="#fff" />
                    </Link>
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold w-fit p-1 rounded"
                      onClick={() => handleUpdate(data)}
                    >
                      <Icon
                        path={mdiArrowUpBoldBoxOutline}
                        size={1}
                        color="#fff"
                      />
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold w-fit p-1 rounded"
                      onClick={() => handleDelete(data)}
                    >
                      <Icon path={mdiDeleteOutline} size={1} color="#fff" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <p>kosong</p>
          </div>
        )}
      </div>
    <div className="flex justify-center mt-8">

      <Pagination totalPages={totalItems} />
    </div>
    </div>
  );
}
