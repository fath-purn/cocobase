"use client";
import Link from "next/link";

export default function ContactMe() {
  return (
    <form className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Nama"
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <textarea
        placeholder="Pesan"
        className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
      ></textarea>
      <div className="mt-10"></div>
      <Link
        href="mailto:alamatemail@example.com?subject=Subjek%20Email&body=Isi%20Email"
        className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300"
      >
        Kirim Pesan
      </Link>
    </form>
  );
}
