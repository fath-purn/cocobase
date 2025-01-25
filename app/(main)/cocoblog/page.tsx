import { Suspense, lazy } from "react";
import { SkeletonCard } from "@/app/ui/admin/skeleton/card";
import { Footer, Chat } from "@/app/(main)/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cocoblog",
};

const CardArtikel = lazy(() => import("@/app/ui/admin/cocoblog/cardMain"));

export default async function Page(props: {
  searchParams?: Promise<{
    search?: string;
    page?: string;
    limit?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;
  const limit = Number(searchParams?.limit) || 12;

  return (
    <main className="mt-10">
      <Chat />
      <section
        id="blog"
        className="py-16 px-4 bg-gray-50 border-b border-gray-200"
      >
        <div className="container mx-auto text-center w-[90%]">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
            Wawasan & Inspirasi tentang Gula Kelapa
          </h2>
          <p className="text-gray-600 mb-6 text-lg">
            Dapatkan informasi menarik, resep, dan tren terkini seputar gula
            kelapa.
          </p>
          {/* card atas */}
          <Suspense fallback={<SkeletonCard />}>
            <CardArtikel
              currentPage={currentPage}
              search={search}
              limit={limit}
              all={true}
            />
          </Suspense>
        </div>
      </section>
      <Footer />
    </main>
  );
}
