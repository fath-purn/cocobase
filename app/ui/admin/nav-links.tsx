"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Icon from "@mdi/react";
import {
  mdiPostOutline,
  mdiFormatListBulleted,
  mdiViewDashboardOutline,
  mdiStoreOutline,
  mdiCogs,
  mdiAccount,
} from "@mdi/js";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Dashboard", 
    href: "/admin", 
    icon: mdiViewDashboardOutline 
  },
  { name: "Petani", 
    href: "/admin/petani", 
    icon: mdiAccount, 
  },
  {
    name: "Produksi",
    href: "/admin/produksi",
    icon: mdiCogs,
  },
  {
    name: "Cocoblog",
    href: "/admin/cocoblog",
    icon: mdiPostOutline,
  },
  {
    name: "Produk",
    href: "/admin/produk",
    icon: mdiStoreOutline,
  },
  { name: "Pesanan", 
    href: "/admin/pesanan", 
    icon: mdiFormatListBulleted 
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  const pathArray = pathname.split("/");
  const newPathname = pathArray.slice(0, 3).join("/");

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] md:w-[95%] md:mt-3 grow items-center justify-center gap-2 rounded-md  p-3 text-sm font-medium hover:bg-[#00B69B] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-[#00B69B] text-white": newPathname === link.href,
                "bg-white text-[#202224]": newPathname !== link.href,
              },
              
            )}
          >
            <Icon path={String(link.icon)} size={1.2} className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
