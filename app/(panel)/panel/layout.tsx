import type { Metadata } from "next";
import { poppins } from "@/app/ui/fonts";
import "../../globals.css";
import SideNav from "@/app/ui/admin/sidenav";
import TopBar from "@/app/ui/panel/topbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Explore Banyumas",
    default: "Explore Banyumas",
  },
  description: "Explore Banyumas",
  metadataBase: new URL("https://fe-explore-banyumas.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <div className="flex h-screen bg-[#F2F2F2] flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="text-gray-950 flex-grow pl-5 md:overflow-y-auto md:pl-8">
            <TopBar />
            <div className="relative top-[100px]">

            {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
