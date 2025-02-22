import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-4 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">© {new Date().getFullYear()} Sathish Kumar. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
