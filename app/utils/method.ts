"use server";

import {
  artikel,
  cocoblog,
  kelompok,
  lapak,
  pengujian,
  petani,
  produksi,
  statusProduksi,
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
    case "cocoblog":
      const validasi = cocoblog.safeParse({
        judul: data.judul,
        isi: data.isi,
      });
      if (validasi.success) {
        const formData = new FormData();
        formData.append(`image`, data.image);
        formData.append("judul", data.judul);
        formData.append("isi", data.isi);
        return {
          validasi,
          body: formData,
        };
      } else {
        return {
          validasi,
          body: null,
        };
      }
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

export const POSTFILE = async (_provider: string, data: any) => {
  console.log("data", data);

  const { id_update, params } = data;
  const { validasi, body } = getValidasiDanBody(params, data);

  console.log(validasi.error?.issues, "hmm bisa gasihh");

  const formData = new FormData();
  formData.append(`image`, data.image);
  formData.append("judul", data.judul);
  formData.append("isi", data.isi);

  if (validasi.success) {
    const token = (await cookies()).get("token");
    const url = id_update
      ? `${process.env.NEXT_PUBLIC_API_URL}/${params}/${id_update}`
      : `${process.env.NEXT_PUBLIC_API_URL}/${params}`;
    const res = await fetch(url, {
      method: id_update ? "PUT" : "POST",
      headers: {
        Authorization: `Bearer ${token?.value}`,
      },
      body: formData, // FormData
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