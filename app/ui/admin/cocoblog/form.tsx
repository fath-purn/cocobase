"use client";
import Icon from "@mdi/react";
import { mdiImage, mdiTimerSand, mdiCounter } from "@mdi/js";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "../button";
import { useFormStatus } from "react-dom";
import { formSubmitHandlerFile } from "@/app/utils/actions";
import Link from "next/link";
import { useActionState, useState, useEffect } from "react";

export default function LoginForm() {
  const [code, action] = useActionState(formSubmitHandlerFile, undefined);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (code !== undefined && code.success === false) {
      const errors: { [key: string]: string } = {};
      if (Array.isArray(code.message)) {
        code.message.forEach((error: { path: string[]; message: string }) => {
          errors[error.path.join(".")] = error.message;
        });
      } else if (code.message) {
        errors.message = code.message;
      } else {
        errors.message = "Form submission failed";
      }
      setErrors(errors);
    }
  }, [code]);

  return (
    <form action={action} className="space-y-3">
      <div className="flex-1  mr-5 p-10 md:mr-8 bg-white rounded-lg">
        <h1 className={`mb-3 text-2xl`}>Tambah Cocoblog</h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="image"
            >
              Gambar
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.nama ? "border-red-500" : ""
                }`}
                id="image"
                type="file"
                name="image"
                required
              />
              <Icon
                path={mdiImage}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="judul"
            >
              Judul
            </label>
            <div className="relative">
              <input
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.judul ? "border-red-500" : ""
                }`}
                type="text"
                name="judul"
                placeholder="Judul"
                required
              />
              <Icon
                path={mdiTimerSand}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.judul && (
              <p className="text-red-500 text-sm mt-1">{errors.judul}</p>
            )}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="isi"
            >
              Deskripsi
            </label>
            <div className="relative">
              <textarea
                className={`peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 ${
                  errors.isi ? "border-red-500" : ""
                }`}
                id="isi"
                name="isi"
                placeholder="Deskripsi"
                required
              />
              <Icon
                path={mdiCounter}
                size={1}
                color="black"
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
              />
            </div>
            {errors.isi && (
              <p className="text-red-500 text-sm mt-1">{errors.isi}</p>
            )}
          </div>
        </div>
        <input
          id="params"
          type="text"
          name="params"
          hidden
          defaultValue={"cocoblog"}
        />
        <div className="flex flex-row gap-3 justify-end">
          <CancelButton />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      className="mt-4 bg-green-500 hover:bg-green-600 w-[15%] justify-center focus-visible:outline-green-500 active:bg-green-600"
      aria-disabled={pending}
    >
      Simpan
    </Button>
  );
}

function CancelButton() {
  return (
    <Link
      href="/admin/cocoblog"
      className="flex h-10 items-center rounded-lg px-4 text-sm font-medium text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 active:bg-red-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-4 bg-red-500 hover:bg-red-600 w-[15%] justify-center"
    >
      Cancel{" "}
    </Link>
  );
}
