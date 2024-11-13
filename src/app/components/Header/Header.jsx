import Navbar from "./Navbar/Navbar";
import Logo from "../Logo/Logo";
import ToggleThemeButton from "../ThemeSwither/ToggleThemeButton";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className="relative flex items-center justify-between max-w-[1240px] px-3 sm:px-5 mx-auto h-[60px] ">
      <Logo />
      <Navbar />
      <ToggleThemeButton />
      <HamburgerMenu />
    </header>
  );
};
export default Header;
