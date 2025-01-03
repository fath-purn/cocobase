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
