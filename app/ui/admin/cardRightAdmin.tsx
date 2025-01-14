import Icon from "@mdi/react";
import {
  mdiFilterVariant,
  mdiCalendarRange,
  mdiPackageVariantClosed,
  mdiCheckboxMarkedOutline,
} from "@mdi/js";
import LineChart from "@/app/ui/admin/chart";
import { Kanan } from "@/app/utils/interface";

export default function CardTopAdmin({ keterangan }: { keterangan: Kanan[] }) {
  return (
    <div className="grid grid-cols-4 gap-5 mt-5">
      {/* Kiri */}
      <div className="h-full col-span-3 bg-white p-5 rounded-lg shadow-md">
        <LineChart />
      </div>

      {/* Kanan */}
      <div className="col-span-1">
        {/* Diayak */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between">
          <div>
            <p className="text-base">Diayak</p>
            <h2 className="text-2xl tracking-wide font-semibold mt-4">
              {keterangan[0]?.value ?? 0}
            </h2>
          </div>
          <div className="bg-[#FEE8CC] p-3 flex items-center justify-center aspect-square rounded-3xl w-14 h-14">
            <Icon path={mdiFilterVariant} size={2} color="#bbac24f1" />
          </div>
        </div>

        {/* Dioven */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between mt-5">
          <div>
            <p className="text-base">Dioven</p>
            <h2 className="text-2xl tracking-wide font-semibold mt-4">
              {keterangan[1]?.value ?? 0}
            </h2>
          </div>
          <div className="bg-[#fcddb5] p-3 flex items-center justify-center aspect-square rounded-3xl w-14 h-14">
            <Icon path={mdiCalendarRange} size={2} color="#83450F" />
          </div>
        </div>

        {/* Dikemas */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between mt-5">
          <div>
            <p className="text-base">Dikemas</p>
            <h2 className="text-2xl tracking-wide font-semibold mt-4">
              {keterangan[2]?.value ?? 0}
            </h2>
          </div>
          <div className="bg-[#fa9d9d] p-3 flex items-center justify-center aspect-square rounded-3xl w-14 h-14">
            <Icon path={mdiPackageVariantClosed} size={2} color="#C63535" />
          </div>
        </div>

        {/* Selesai */}
        <div className="bg-white p-5 rounded-lg shadow-md flex justify-between mt-5">
          <div>
            <p className="text-base">Selesai</p>
            <h2 className="text-2xl tracking-wide font-semibold mt-4">
              {keterangan[3]?.value ?? 0}
            </h2>
          </div>
          <div className="bg-[#93ffb4] p-3 flex items-center justify-center aspect-square rounded-3xl w-14 h-14">
            <Icon path={mdiCheckboxMarkedOutline} size={2} color="#34A190" />
          </div>
        </div>
      </div>
    </div>
  );
}
