"use server";

import { cookies } from "next/headers";

export async function setCookiesToken(token: string) {
  (await cookies()).set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/login",
  });
  // const a = await getCookiesToken()
  // console.log(a?.value, 'token');
}

export async function getCookiesToken() {
  const token = (await cookies()).get("token");
  console.log(token?.value, "tokenapapa");
  return token;
}

export async function getAllCookies() {
  const token = (await cookies()).getAll();
  console.log(token, "tokenapapa");
  return token;
}

export async function removeCookiesToken() {
  (await cookies()).delete("token");
}
