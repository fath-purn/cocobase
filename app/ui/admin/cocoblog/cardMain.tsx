import Link from "next/link";
import Image from "next/image";
import Icon from "@mdi/react";
import {
  mdiDeleteOutline,
  mdiArrowUpBoldBoxOutline,
  mdiExpandAll,
  mdiArrowRight,
} from "@mdi/js";
import Pagination from "@/app/ui/pagination";
import { getData } from "@/app/utils/fetchData";
import { Cocoblog } from "@/app/utils/interface";

export default async function Card({
  currentPage,
  limit,
  search,
  admin = true,
}: {
  limit: number;
  currentPage: number;
  search: string;
  admin?: boolean;
}) {
  const data = await getData({
    path: "/cocoblog",
    limit: limit,
    currentPage: currentPage,
    search: search,
  });

  const cocoblogList = data?.cocoblog;

  return (
    <div className="grid grid-cols-1 text-left md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center m-auto w-full mt-5 gap-3">
      {cocoblogList?.map((data: Cocoblog, index: number) => {
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
              className="object-cover rounded-lg w-full h-[200px] "
            />
            <div className="flex justify-center my-3 ml-1 md:ml-0 w-[50%] md:w-full">
              <div className="w-[90%]">
                <h3 className="text-black text-xl font-medium mb-3">
                  {data.judul}
                </h3>
                <p className="text-black text-sm line-clamp-3">{data.isi}</p>
              </div>
            </div>

            <div className="w-[90%] mx-auto mb-3 mt-auto flex gap-2">
              <Link
                href={`/cocoblog/${data.id}`}
                target="_blank"
                className=" text-[#E37D2E] grow p-1 rounded"
              >
                <div className="flex w-fit items-center gap-2">
                  <p className="text-left hover:underline">
                    <span>Selengkapnya</span>{" "}
                  </p>
                  <Icon path={mdiArrowRight} size={0.7} color="#E37D2E" />
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
