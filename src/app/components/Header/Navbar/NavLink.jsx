"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ linkLabel, path, styleClass }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${styleClass} ${pathname === path ? "text-red-500" : ""}`}
      href={path}
    >
      {linkLabel}
    </Link>
  );
};
export default NavLink;
