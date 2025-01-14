import Table from "@/app/ui/admin/produksi/tabel";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiWhatsapp } from "@mdi/js";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const data = {
    id: 1,
    nama: "Petani 1",
    alamat: "Jalan Petani 1",
    telepon: "08123456789",
    produk: [
      {
        id: 1,
        petani: "Petani 1",
        produk: "Beras",
        jumlah: 100,
        status: "Diayak",
      },
      {
        id: 2,
        petani: "Petani 2",
        produk: "Jagung",
        jumlah: 50,
        status: "Dioven",
      },
      {
        id: 3,
        petani: "Petani 3",
        produk: "Kedelai",
        jumlah: 200,
        status: "Dikemas",
      },
      {
        id: 4,
        petani: "Petani 4",
        produk: "Gandum",
        jumlah: 150,
        status: "Selesai",
      },
      {
        id: 5,
        petani: "Petani 1",
        produk: "Beras",
        jumlah: 50,
        status: "Dikemas",
      },
    ],
  };

  return (
    <div className="mr-5 p-10 md:mr-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{data.nama} id: {id} </h1>

      <div className="flex justify-between items-end mb-4">
        <div className="flex gap-3">
          <div>
            <p>alamat</p>
            <p>telepon</p>
          </div>
          <div>
            <p>: {data.alamat}</p>
            <p>: {data.telepon}</p>
          </div>
        </div>
        <Link
          href={`/`}
          className="flex h-10 items-center rounded-lg bg-green-600 gap-3 px-4 text-sm font-medium text-white transition-colors hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          <Icon path={mdiWhatsapp} size={1} color="white" />
          <p>Kirim Data</p>
        </Link>
      </div>

        <Table produksiList={data.produk} />

        <Link
          href={`/admin/petani`}
          className="w-fit mt-4 flex py-3 rounded-lg bg-red-600 px-4 text-sm font-medium text-white transition-colors hover:bg--500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          <p>Kembali</p>
        </Link>
    </div>
  );
}
