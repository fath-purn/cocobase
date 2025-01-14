import Link from "next/link";
import Table from "@/app/ui/admin/produksi/tabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produksi",
};

export default async function Page(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const produksiList = [
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
    {
      id: 6,
      petani: "Petani 2",
      produk: "Jagung",
      jumlah: 100,
      status: "Diayak",
    },
    {
      id: 7,
      petani: "Petani 3",
      produk: "Kedelai",
      jumlah: 250,
      status: "Dioven",
    },
    {
      id: 8,
      petani: "Petani 4",
      produk: "Gandum",
      jumlah: 200,
      status: "Selesai",
    },
  ];

  return (
    <div className="mr-5 p-10 md:mr-8 bg-white rounded-lg mb-5 md:mb-8 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Daftar Produksi</h1>
        <Link
          href={"/admin/produksi/add"}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <p className="flex items-center">
            <span className="font-bold text-xl mr-1">+</span> Tambah Produksi
          </p>
        </Link>
      </div>

      {/* Tabel */}
      <Table produksiList={produksiList} />

    </div>
  );
}
