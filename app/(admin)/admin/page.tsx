import CardTopAdmin from "@/app/ui/admin/cardTopAdmin";
import CardRightAdmin from "@/app/ui/admin/cardRightAdmin";

export default function Page() {
  const kiri = [
    {
      value: 20,
      nilai: 5,
    },
    {
      value: 20,
      nilai: 5,
    },
    {
      value: 20,
      nilai: -5,
    },
    {
      value: 20,
      nilai: 0,
    },
  ];
  
  const kanan = [
    {
      value: 20,
    },
    {
      value: 20,
    },
    {
      value: 20,
    },
    {
      value: 20,
    },
  ];

  return (
    <div className="mr-5 md:mr-8 mb-5 md:mb-8">
      <h1 className="text-3xl font-bold tracking-wide">Dashboard</h1>

      {/* card atas */}
      <CardTopAdmin keterangan={kiri} />

      {/* Card kanan */}
      <CardRightAdmin keterangan={kanan} />
    </div>
  );
}
