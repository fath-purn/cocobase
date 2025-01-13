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

export interface Petani {
  id: number;
  nama: string;
  alamat: string;
  telepon: string;
  produk: {
    nama: string;
    total: number;
    status: string;
  };
}

export interface Produk {
  id: number;
  nama: string;
  gambar: string;
  link: string;
  deskripsi: string;
}
