import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export default function Page() {
  return (
    <div className="h-[100000px] mr-5 md:mr-8">
      {/* Aktifitas akun */}
      <div className="rounded-2xl shadow-lg bg-white px-5 py-8">
        <div className="flex flex-row justify-between">
          <div>
            <p className="font-bold">Aktifitas Akun</p>
            <p>Overview Laporan Transaksi</p>
          </div>
          <div className="h-4 w-4 border-[1.5px] flex items-center justify-center border-gray-500 rounded-full">
            <p className="text-xs text-gray-400">?</p>
          </div>
        </div>
        <div className="flex justify-center  mt-5">
          <div className="w-[95%] flex flex-row gap-3 justify-between">
            <div className="flex flex-row gap-3">
              <Icon
                path={mdiAccount}
                size={1.5}
                className="w-6 border border-blue-500 bg-blue-500 shadow rounded-full p-1"
                color={"white"}
              />
              <div>
                <p>Saldo Akun</p>
                <p>0</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Icon
                path={mdiAccount}
                size={1.5}
                className="w-6 border border-blue-500 bg-blue-500 shadow rounded-full p-1"
                color={"white"}
              />
              <div>
                <p>Saldo Akun</p>
                <p>0</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-start">
              <Icon
                path={mdiAccount}
                size={1.5}
                className="w-6 border border-blue-500 bg-blue-500 shadow rounded-full p-1"
                color={"white"}
              />
              <div>
                <p>Saldo Akun</p>
                <p>0</p>
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <Icon
                path={mdiAccount}
                size={1.5}
                className="w-6 border border-blue-500 bg-blue-500 shadow rounded-full p-1"
                color={"white"}
              />
              <div>
                <p>Saldo Akun</p>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pengumuman */}

      {/* Informasi */}
    </div>
  );
}
