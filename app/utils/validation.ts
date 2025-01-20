import { z } from "zod";

export const petani = z.object({
  nama: z.string().min(1, { message: "Nama petani harus diisi" }),
  alamat: z.string().min(1, { message: "Alamat harus diisi" }),
  telepon: z
    .string()
    .min(10, { message: "Nomor telepon harus minimal 10 digit" }),
});

export const produksi = z.object({
  id_petani: z.string(),
  produk: z.string().min(1, { message: "Nama produk harus diisi" }),
  jumlah: z.string().min(1),
  status: z.optional(z.enum(["DIAYAK", "DIOVEN", "DISORTIR", "DIKEMAS", "SELESAI"])),
});

export const cocoblog = z.object({
  judul: z.string().min(1, { message: "Judul harus diisi" }),
  isi: z.string().min(1, { message: "Deksripsi harus diisi" }),
});

export const produk = z.object({
  nama: z.string().min(1, { message: "Judul harus diisi" }),
  deskripsi: z.string().min(1, { message: "Deksripsi harus diisi" }),
  link: z.string().min(1, { message: "Deksripsi harus diisi" }),
  jumlah: z.string().min(1, { message: "Deksripsi harus diisi" }),
});

export const statusProduksi = z.object({
  status: z.optional(z.enum(["DIAYAK", "DIOVEN", "DISORTIR", "DIKEMAS", "SELESAI"])),
});

export const produksiUpdate = z.object({
  id_petani: z.string(),
  produk: z.string().min(1, { message: "Nama produk harus diisi" }),
  jumlah: z.string().min(1),
  status: z.enum(["DIAYAK", "DIOVEN", "DISORTIR", "DIKEMAS", "SELESAI"]),
});

export const artikel = z.object({
  judul: z.string().min(3),
  deskripsi: z.string().min(3),
  menu: z.enum(["sulap_limbah", "olah_pangan", "edukasi"]),
});

export const kelompok = z.object({
  nama: z.string().min(3),
});

export const pengujian = z.object({
  id_user: z.string(),
  fat: z.number(),
  snf: z.number(),
  protein: z.number(),
  ph: z.number(),
  hasil: z.enum(["SangatBaik", "Baik", "Normal", "Buruk", "SangatBuruk"]),
  message: z.string(),
});

export const lapak = z.object({
  nama: z.string(),
  harga: z.number(),
  deskripsi: z.string(),
  kuantiti: z.enum(["Kg", "Liter", "Buah", "Ekor"]),
  stok: z.number(),
});
