export interface SearchParams {
  limit?: number;
  page?: string;
  search?: string;
}

export interface Produksi {
  id: number;
  petani: string;
  produk: string;
  jumlah: number;
  status: string;
}

export interface ProduksiDetail {
  id: number;
  id_petani: number;
  petani: string;
  produk: string;
  jumlah: number;
  status: string;
}

export interface Petani {
  id: number;
  nama: string;
  alamat: string;
  no_hp: string;
}

export interface PetaniDetail {
  id: number;
  nama: string;
  alamat: string;
  no_hp: string;
  produksi: Produksi[];
}

export interface Produk {
  id: number;
  nama: string;
  gambar: string;
  link: string;
  deskripsi: string;
  jumlah: number;
}

export interface Cocoblog {
  id: number;
  judul: string;
  isi: string;
  gambar: string;
}

export interface Kiri {
  nama: string;
  value: number;
  nilai: number;
}

export interface Kanan {
  nama: string;
  nilai: number;
}