import Form from "@/app/ui/admin/petani/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tambah Petani",
};

export default function Page() {
  return (
    <div className="h-[1000px]">
        <Form />
    </div>
  );
}
