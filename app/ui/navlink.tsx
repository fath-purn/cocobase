'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

const links = [
  { name: "Beranda", href: "#home" },
  { name: "Tentang", href: "#about" },
  { name: "Manfaat", href: "#benefits" },
  { name: "Produk", href: "#shop" },
  { name: "Artikel", href: "#blog" },
  { name: "Kontak kami", href: "#contact" },
];

export default function Navlink() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {links.map((link) => {
        const isActive = activeLink === link.href.replace("#", "");
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 bg-white p-3 text-sm font-medium hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "text-[#E37D2E] font-medium": isActive,
                "text-gray-900": !isActive,
              }
            )}
          >
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}