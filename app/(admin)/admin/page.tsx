import CardTopAdmin from "@/app/ui/admin/cardTopAdmin";
import CardRightAdmin from "@/app/ui/admin/cardRightAdmin";

export default function Page() {
  return (
    <div className="mr-5 md:mr-8 mb-5 md:mb-8">
      <h1 className="text-3xl font-bold tracking-wide">Dashboard</h1>

      {/* card atas */}
      <CardTopAdmin />

      {/* Card kanan */}
      <CardRightAdmin />
    </div>
  );
}
