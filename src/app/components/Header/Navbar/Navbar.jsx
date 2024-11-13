import NavLink from "./NavLink";
// import { navigationLinks } from "@/app/data/navigationLinks";
import { navigationLinks } from "../../../data/navigationLinks";

const Navbar = () => {
  return (
    <nav className="mobile-navigation hidden shrink-0 md:flex items-center ml-auto">
      {navigationLinks.map((link) => (
        <NavLink
          styleClass="uppercase text-sm lg:text-base lg:tracking-wide font-semibold lg:px-3 px-[6px] py-[6px] rounded-sm dark:hover:bg-zinc-600 hover:bg-zinc-200 transition-color duration-150 md:ml-auto"
          key={link.id}
          path={link.path}
          linkLabel={link.linkLabel}
        />
      ))}
    </nav>
  );
};
export default Navbar;
