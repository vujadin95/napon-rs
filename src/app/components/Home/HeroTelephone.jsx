import { ImMobile } from "react-icons/im";
const HeroTelephone = () => {
  return (
    <div className="z-20 text-sm sm:text-base flex flex-col md:mt-2 items-center gap-4 text-lightColor font-semibold ">
      <div className="w-full flex items-center gap-3">
        <a
          href="tel:+381652007778"
          className="w-36 sm:w-[170px] text-center py-[10px] bg-sky-500/80 rounded-sm hover:bg-sky-400/80 transition-colors duration-200"
        >
          Pozovite nas
        </a>
        <a href="tel:+381652007778" className="flex items-center gap-2">
          <ImMobile />
          <p>+381 65 200 77 78</p>
        </a>
      </div>
      <div className="w-full flex items-center gap-3">
        <a
          href="tel:+381649255454"
          className="w-36  sm:w-[170px] text-center py-[10px] bg-sky-500/80 rounded-sm hover:bg-sky-400/80 transition-colors duration-200"
        >
          Kako do ušteda?
        </a>
        <a href="tel:+381649255454" className=" flex items-center gap-2">
          <ImMobile />
          <p>+381 64 925 54 54</p>
        </a>
      </div>
    </div>
  );
};
export default HeroTelephone;
