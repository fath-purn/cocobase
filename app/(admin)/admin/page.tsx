import Icon from "@mdi/react";
import { mdiTrendingUp, mdiFilterVariant, mdiCalendarRange, mdiPackageVariantClosed, mdiCheckboxMarkedOutline, } from "@mdi/js";
import Petani from "../../../public/petani.svg";
import Produk from "../../../public/produk.svg";
import Artikel from "../../../public/artikel.svg";
import Aktivitas from "../../../public/proses.svg";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import LineChart from "@/app/ui/admin/chart";
import CardTopAdmin from "@/app/ui/admin/cardTopAdmin";
import CardRightAdmin from "@/app/ui/admin/cardRightAdmin";

export default function Page() {

  
  

  return (
    <div className="h-[1000px] mr-5 md:mr-8">
      <h1 className="text-3xl font-bold tracking-wide">Dashboard</h1>

      {/* card atas */}
      <CardTopAdmin />

      {/* Card kanan */}
      <CardRightAdmin />
    </div>
  );
}
