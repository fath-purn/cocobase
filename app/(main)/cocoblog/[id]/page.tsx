import { getData } from "@/app/utils/fetchData";
import Image from "next/image";
import { Footer, Chat } from "@/app/(main)/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocoblog",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const data = await getData({
    path: `/cocoblog/${id}`,
  });

  return (
    <div className="mt-10">
      <Chat />
      {!data ? (
        <div>Loading...</div>
      ) : (
        <div className="container w-[50%] mx-auto mt-20">
          <Image
            src={data.gambar}
            alt={data.judul}
            width={237}
            height={500}
            className="object-cover rounded-lg w-full max-h-[400px]"
          />
          <div className="mt-5 mb-10">
            <h1 className="text-2xl text-center font-semibold">{data.judul}</h1>
            <p className="mt-2">{data.isi}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
