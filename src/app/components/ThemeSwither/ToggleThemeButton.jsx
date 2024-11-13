"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";

const ToggleThemeButton = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted ? (
        <button
          aria-label="change theme button"
          className="focus:outline-none z-10 flex items-center justify-center rounded-lg p-2 transition-colors duration-200 bg-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 dark:bg-zinc-600 ml-auto md:ml-2"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        >
          {resolvedTheme === "dark" ? (
            <BsSunFill className="w-5 h-5 text-orange-300" />
          ) : (
            <BsMoonFill className="w-5 h-5 text-darkColor" />
          )}
        </button>
      ) : (
        <div className="w-9 h-9 rounded-lg bg-zinc-400 ml-auto md:ml-2 mr-4 md:mr-0 flex justify-center items-center animate-pulse"></div>
      )}
    </>
  );
};
export default ToggleThemeButton;
