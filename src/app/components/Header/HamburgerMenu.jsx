"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./HamburgerMenu.module.scss";
// import { useClickOutside } from "@/utils/hooks/useClickOutside";
import { useClickOutside } from "../../../../utils/hooks/useClickOutside";

const HamburgerMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const buttonRef = useRef(null);
  const toggleActiveClass = isActive ? styles.active : "";

  useClickOutside(buttonRef, () => {
    if (isActive) setIsActive(false);
  });

  useEffect(() => {
    if (isActive) {
      document.body.classList.add("ham-menu-active");
    } else {
      document.body.classList.remove("ham-menu-active");
    }
  }, [isActive]);

  return (
    <div
      ref={buttonRef}
      onClick={() => setIsActive((prev) => !prev)}
      className={`
      bg-zinc-200 hover:bg-zinc-100 dark:bg-zinc-600 dark:hover:bg-zinc-700 transition-colors ml-3  ${styles.hamburgerMenu} ${toggleActiveClass}`}
    >
      <span className={`bg-zinc-700 dark:bg-zinc-200 ${styles.line1}`}></span>
      <span className={`bg-zinc-700 dark:bg-zinc-200 ${styles.line2}`}></span>
      <span className={`bg-zinc-700 dark:bg-zinc-200 ${styles.line3}`}></span>
    </div>
  );
};
export default HamburgerMenu;
