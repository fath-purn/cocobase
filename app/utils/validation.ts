import {z} from 'zod';

export const petani = z.object({
    nama: z.string().min(1, { message: "Nama petani harus diisi" }),
    alamat: z.string().min(1, { message: "Alamat harus diisi" }),
    telepon: z.string().min(10, { message: "Nomor telepon harus minimal 10 digit" }),
  })

export const artikel = z.object({
    judul: z.string().min(3,),
    deskripsi: z.string().min(3),
    menu: z.enum(['sulap_limbah', 'olah_pangan', 'edukasi']),
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
    hasil: z.enum(['SangatBaik', 'Baik', 'Normal', 'Buruk', 'SangatBuruk']),
    message: z.string(),
});

export const lapak = z.object({
    nama: z.string(),
    harga: z.number(),
    deskripsi: z.string(),
    kuantiti: z.enum(['Kg', 'Liter', 'Buah', 'Ekor']),
    stok: z.number(),
});

