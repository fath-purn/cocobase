import Form from "@/app/ui/admin/produk/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Produksi",
};

export default function Page() {
  return (
    <div className="">
        <Form />
    </div>
  );
}
