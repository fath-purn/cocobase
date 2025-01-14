import Form from "@/app/ui/admin/cocoblog/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Petani",
};

export default function Page() {
  return (
    <div className="">
        <Form />
    </div>
  );
}
