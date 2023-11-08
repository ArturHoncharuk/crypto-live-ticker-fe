"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { useState } from "react";

export const Header = () => {
  return (
    <header className="fixed inset-0 w-screen mx-auto top-6 md:max-w-7xl shadow-md h-[70px] flex items-center rounded-[20px] bg-white">
      <div className="w-full flex flex-row justify-between items-center px-5 md:px-10">
        <Link href={"/"}>
          <Image width={48} height={48} src={"/logo.png"} alt="logo" />
        </Link>

        <div className="flex gap-x-4">
          <Link href={"/about"}>About</Link>
          <Link href={"/currencies"}>Currencies</Link>
        </div>

        <SwitchThemeButton />
      </div>
    </header>
  );
};

const SwitchThemeButton = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(() => (theme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      <FiSun size={24} />
    </button>
  );
};
