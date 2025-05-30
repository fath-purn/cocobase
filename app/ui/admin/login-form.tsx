"use client";

import {
  AtSymbolIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { Button } from "@/app/ui/admin/button";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { register, authenticate } from "@/app/utils/actions";

export default function LoginForm({ thisIsLogin }: { thisIsLogin?: boolean }) {

  const [code, action] = useActionState(thisIsLogin ? authenticate : register, undefined);

  return (
    <form action={action} className="space-y-3 w-[75%]">
      <div className="">
        <h1 className={`mb-3 text-2xl`}>
          {thisIsLogin ? "Login" : "Register"}
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="text"
                name="username"
                placeholder="Enter your username"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={5}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
        <LoginButton thisIsLogin={thisIsLogin} />
      </div>
    </form>
  );
}

function LoginButton({ thisIsLogin }: { thisIsLogin?: boolean }) {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full bg-[#E37D2E]" aria-disabled={pending}>
      {thisIsLogin ? "Log In" : "Sign Up"} <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
    </Button>
  );
}
