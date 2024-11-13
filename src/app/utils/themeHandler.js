export const changeTheme = () => {
  const theme = localStorage.getItem("theme");

  if (theme === "dark") {
    document.documentElement.classList.remove(theme);
    localStorage.setItem("theme", "light");
    return;
  }

  if (
    theme === "light" ||
    (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    return;
  }
};
