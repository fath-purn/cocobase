import Link from "next/link";
import Table from "@/app/ui/admin/petani/tabel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petani",
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

  const petaniList = [
    {
      id: 1,
      nama: "Petani 1",
      alamat: "Jalan Petani 1",
      telepon: "08123456789",
    },
    {
      id: 2,
      nama: "Petani 2 tapi boong",
      alamat:
        "1234567 891 23456789 123456789123456789 1234567891 23456789123456789123456789 123456789123456789123456789123",
      telepon: "08123456789",
    },
    {
      id: 3,
      nama: "Petani 3",
      alamat: "Jalan Petani 3",
      telepon: "08123456789",
    },
  ];

  return (
    <div className="mr-5 p-10 md:mr-8 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold mb-4">Daftar Petani</h1>
        <Link
          href={"/admin/petani/add"}
          className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          <p className="flex items-center">
            <span className="font-bold text-xl mr-1">+</span> Tambah Petani
          </p>
        </Link>
      </div>
      <Table petaniList={petaniList} />
    </div>
  );
}
