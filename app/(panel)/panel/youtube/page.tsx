import Icon from "@mdi/react";
import { mdiMenuDown, mdiAccount, mdiCartOutline  } from "@mdi/js";
import Link from "next/link";
import ServerAppForm from "@/app/ui/panel/youtube/formAppServer";
import TransactionHistory from "@/app/ui/panel/youtube/tabel";

export default function Page() {
  return (
    <div className="h-[1000px] mr-5 md:mr-8">

      {/* menu */}
        <div className="flex flex-row bg-[#f9f9f9] py-4 gap-3 w-full rounded-xl shadow-lg border border-gray-200 text-slate-400 text-xs tracking-wider">
          <Link href={'/panel/dashboard'} className="ml-5 font-bold" >Dashboard</Link>
          <p>{">"}</p>
          <p>Youtube</p>
        </div>

      {/* pengumuman */}
      <div className="bg-[#F0EAFF] border border-gray-200 mt-5 text-sm tracking-wide text-[#5D37B3] leading-5  rounded shadow p-5">
        <p>OTP ini sekali pakai. Jika tidak masuk, coba server lain. Gunakan Proxy Residensial untuk hasil terbaik.</p>
        <p>Auto-Refund jika OTP gagal & Cancel.</p>
        <p>Tidak menemukan aplikasi? Ajukan di Request Layanan.</p>
        <p>Cara kerja OTP dan tips sukses di KLIK DISINI. </p>
        <p className="text-red-600">OTP dengan harga lebih tinggi akan memiliki tingkat keberhasilan yang lebih tinggi</p>
      </div>
      
      <div className="flex flex-row justify-between gap-10 mt-5"> 
      {/* new order */}
        <div className="bg-white rounded shadow px-5 py-8 w-[30%]">
          <div className="flex flex-row gap-3 items-center">
            <Icon path={mdiCartOutline} size={1} color={'#E85347'} />
            <p className="text-base font-bold leading-5">New Order</p>
          </div>
          <div className="border-t border-gray-300 my-4"></div>
          <ServerAppForm />
        </div>

      {/* history */}
      <div className="w-[70%]">
        <TransactionHistory />
      </div>

      </div>
    </div>
  )
}
