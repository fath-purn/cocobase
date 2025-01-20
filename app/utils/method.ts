"use server";

import {
  artikel,
  kelompok,
  lapak,
  pengujian,
  petani,
  produksi,
  statusProduksi
} from "@/app/utils/validation";
import { cookies } from "next/headers";

export const DELETE = async (id: number, params: string) => {
  try {
    const token = (await cookies()).get("token");

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/${params}/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token?.value}`,
        },
      }
    );

    const code = await res.json();
    if (code.status === true) {
      return code;
    }

    return code;
  } catch (error) {
    return { status: "error", message: "Server Error" };
  }
};

function getValidasiDanBody(params: string, data: any) {
  switch (params) {
    case "petani":
      return {
        validasi: petani.safeParse({
          nama: data.nama,
          alamat: data.alamat,
          telepon: data.telepon,
        }),
        body: {
          nama: data.nama,
          alamat: data.alamat,
          no_hp: data.telepon,
        },
      };
    case "produksi":
      return {
        validasi: produksi.safeParse({
          id_petani: data.id_petani,
          produk: data.produk,
          jumlah: data.jumlah,
        }),
        body: {
          id_petani: data.id_petani,
          produk: data.produk,
          jumlah: data.jumlah,
          ...(data.status && { status: data.status }),
        },
      };
    case "produksi/status":
      return {
        validasi: statusProduksi.safeParse({
          id_petani: data.id_petani,
          produk: data.produk,
          jumlah: data.jumlah,
        }),
        body: {
          id_petani: data.id_petani,
          produk: data.produk,
          jumlah: data.jumlah,
          ...(data.status && { status: data.status }),
        },
      };
    default:
      throw new Error(`Tidak ada validasi untuk ${params}`);
  }
}

export const POSTPETANI = async (_provider: string, data: any) => {
  console.log("data", data);

  const { id_update, params } = data;
  const { validasi, body } = getValidasiDanBody(params, data);

  console.log(validasi.error?.issues);

  if (validasi.success) {
    const token = (await cookies()).get("token");
    const url = id_update
      ? `${process.env.NEXT_PUBLIC_API_URL}/${params}/${id_update}`
      : `${process.env.NEXT_PUBLIC_API_URL}/${params}`;
    const res = await fetch(url, {
      method: id_update ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token?.value}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const dataJson = await res.json();

    console.log(url);
    console.log("res:", dataJson);

    if (!res) {
      return { ...dataJson, params };
    }

    if (res.status === 200 || res.status === 201) {
      return { ...dataJson, params };
    } else {
      return { ...dataJson, params };
    }
  } else {
    return { success: false, message: validasi.error.issues };
  }
};

export const POSTARTIKEL = async (_provider: string, data: any) => {
  const validasi = artikel.safeParse({
    judul: data.judul,
    deskripsi: data.deskripsi,
    menu: data.idMenu,
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("menu", data.idMenu);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/artikel`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEARTIKEL = async (_provider: string, data: any) => {
  const validasi = artikel.safeParse({
    judul: data.judul,
    deskripsi: data.deskripsi,
    menu: data.idMenu,
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("judul", data.judul);
    formData.append("deskripsi", data.deskripsi);
    formData.append("menu", data.idMenu);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/artikel/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }
    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTKELOMPOK = async (_provider: string, data: any) => {
  const validasi = kelompok.safeParse({
    nama: data.nama,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: data.nama }),
      }
    );

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEKELOMPOK = async (_provider: string, data: any) => {
  const validasi = kelompok.safeParse({
    nama: data.nama,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: data.nama }),
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTPENGUJIAN = async (_provider: string, data: any) => {
  const validasi = pengujian.safeParse({
    id_user: data.id_user,
    snf: Number(data.snf),
    fat: Number(data.fat),
    protein: Number(data.protein),
    ph: Number(data.pH),
    hasil: data.hasil,
    message: data.message,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/pengujian`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_user: data.id_user,
          fat: data.fat,
          snf: data.snf,
          protein: data.protein,
          ph: data.pH,
          hasil: data.hasil,
          message: data.message,
        }),
      }
    );

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATEPENGUJIAN = async (_provider: string, data: any) => {
  const validasi = kelompok.safeParse({
    nama: data.nama,
  });

  if (validasi.success) {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/kelompok/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: data.nama }),
      }
    );

    const dataJson = await res.json();

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const POSTLAPAK = async (_provider: string, data: any) => {
  const validasi = lapak.safeParse({
    nama: data.nama,
    harga: Number(data.harga),
    deskripsi: data.deskripsi,
    kuantiti: data.kuantiti,
    stok: Number(data.stok),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("harga", data.harga);
    formData.append("deskripsi", data.deskripsi);
    formData.append("kuantiti", data.kuantiti);
    formData.append("stok", data.stok);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/warung`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();
    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};

export const UPDATELAPAK = async (_provider: string, data: any) => {
  const validasi = lapak.safeParse({
    nama: data.nama,
    harga: Number(data.harga),
    deskripsi: data.deskripsi,
    kuantiti: data.kuantiti,
    stok: Number(data.stok),
  });

  if (validasi.success) {
    const formData = new FormData();

    formData.append("nama", data.nama);
    formData.append("harga", data.harga);
    formData.append("deskripsi", data.deskripsi);
    formData.append("kuantiti", data.kuantiti);
    formData.append("stok", data.stok);
    formData.append(`image`, data.image);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL_SIEMOO}/warung/${data.id}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const dataJson = await res.json();
    console.log(dataJson, "dadf");

    if (!res) {
      return { success: false, message: "Terjadi kesalahan" };
    }

    if (res.status === 200 || res.status === 201) {
      return dataJson;
    } else {
      return dataJson;
    }
  } else {
    return validasi.error.stack;
  }
};
