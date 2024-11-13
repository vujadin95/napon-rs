import { ImMobile } from "react-icons/im";
// import DynamicMap from "../Map/Map";

import { BsFillEnvelopeFill } from "react-icons/bs";
import Logo from "../Logo/Logo";
import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("../Map/Map"), { ssr: false });

const MapSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:items-center gap-10 justify-between w-full max-w-[1240px] mx-auto px-5 py-10">
      <div className="">
        <Logo />
        <div className="text-sm ">
          <div className="border-b-2 border-gray-300 pt-3 pb-1">
            <h2 className="font-semibold tracking-wider pb-2 text-lg">
              Kragujevac
            </h2>
            <a
              href="tel:+381652007778"
              className="flex items-center gap-2 hover:text-sky-500 transition duration-300"
            >
              <ImMobile />
              Tel: +381 65 200 77 78
            </a>
            <a
              href="mailto:m.popovic@superheat.rs"
              className="hover:text-sky-500 transition duration-300 flex items-center gap-2 mt-1"
            >
              <BsFillEnvelopeFill />
              m.popovic@superheat.rs
            </a>
          </div>
          <div className="border-b-2 border-gray-300 pt-3 pb-1">
            <h2 className="font-semibold tracking-wider pb-2 text-lg">
              Kruševac
            </h2>
            <a
              href="tel:+381649255454"
              className="flex items-center gap-2 hover:text-sky-500 transition duration-300"
            >
              <ImMobile />
              Tel: +381 64 925 54 54
            </a>
            <a
              href="mailto:n.milojevic@superheat.rs"
              className="hover:text-sky-500 transition duration-300 flex items-center gap-2 mt-1"
            >
              <BsFillEnvelopeFill />
              n.milojevic@superheat.rs
            </a>
          </div>
          <div className="border-b-2 border-gray-300 border-c pt-3 pb-1">
            <h2 className="font-semibold tracking-wider pb-2 text-lg">Čačak</h2>
            <a
              href="tel:+381652007778"
              className="flex items-center gap-2 hover:text-sky-500 transition duration-300"
            >
              <ImMobile />
              Tel. +381 65 200 77 78
            </a>
            <a
              href="mailto:info@superheat.rs"
              className="hover:text-sky-500 transition duration-300 flex items-center gap-2 mt-1"
            >
              <BsFillEnvelopeFill />
              info@superheat.rs
            </a>
          </div>
        </div>
      </div>
      <div className="shadow-2xl max-w-[600px] h-[400px] md:h-[500px] w-full self-center">
        <DynamicMap />
      </div>
    </div>
  );
};
export default MapSection;
// rgba(255,255,255,0.2)
