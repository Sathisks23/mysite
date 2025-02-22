"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex gap-6 border-b z-50 h-16">
      <NavLink href="/" pathname={pathname}>
        Sathish Kumar
      </NavLink>
      <NavLink href="/blog" pathname={pathname}>
        Blog
      </NavLink>
      <NavLink href="/contact" pathname={pathname}>
        Contact
      </NavLink>
    </div>
  );
};

const NavLink = ({ href, pathname, children }) => (
  <Link
    href={href}
    className={`relative pb-1 ${
      pathname === href ? "border-b-2 border-black font-semibold" : "text-gray-600"
    }`}
  >
    {children}
  </Link>
);

export default Header;
