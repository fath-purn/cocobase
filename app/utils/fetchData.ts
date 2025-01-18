"use server";
import { cookies } from "next/headers";

export async function getData({
  path,
  currentPage,
  limit,
  search,
  status,
}: {
  path: string;
  currentPage?: number;
  limit?: number;
  search?: string;
  status?: string;
}) {
  const token = (await cookies()).get("token");
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${path}?search=${search}&status=${status}&page=${currentPage}&limit=${limit}`,
    {
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token?.value}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();

  // await new Promise((resolve) => setTimeout(resolve, 4000));  

  return data.data;
}
