import { ImMobile } from "react-icons/im";
import { BsFillEnvelopeFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="text-sm  flex flex-col items-center">
      <div className="pb-1 mb-4 text-center">
        <h2 className="font-semibold uppercase tracking-wider pb-1 text-lg">
          Kragujevac
        </h2>
        <a
          href="tel:+381652007778"
          className="hover:text-sky-500 transition duration-300 flex items-center gap-2 justify-center"
        >
          <ImMobile />
          <p>Tel: +381 65 200 77 78</p>
        </a>
        <a
          href="mailto:m.popovic@superheat.rs"
          className="hover:text-sky-500 transition duration-300 flex items-center gap-2 justify-center mt-1"
        >
          <BsFillEnvelopeFill />
          m.popovic@superheat.rs
        </a>
      </div>
      <div className="pt-3 pb-1 mb-4 text-center">
        <h2 className="font-semibold uppercase tracking-wider pb-1 text-lg">
          Kruševac
        </h2>
        <a
          href="tel:+381649255454"
          className="hover:text-sky-500 transition duration-300 flex items-center gap-2 justify-center"
        >
          <ImMobile />
          <p>Tel: +381 64 925 54 54</p>
        </a>
        <a
          href="mailto:n.milojevic@superheat.rs"
          className="hover:text-sky-500 transition duration-300 flex items-center gap-2 justify-center mt-1"
        >
          <BsFillEnvelopeFill />
          n.milojevic@superheat.rs
        </a>
      </div>
      <div className=" pt-3 pb-1 text-center">
        <h2 className="font-semibold uppercase tracking-wider pb-1 text-lg">
          Čačak
        </h2>
        <a
          href="tel:+381652007778"
          className="hover:text-sky-500 transition duration-300 flex items-center gap-2 justify-center mt-1"
        >
          <ImMobile />
          <p>Tel. +381 65 200 77 78</p>
        </a>
        <a
          href="mailto:info@superheat.rs"
          className="hover:text-sky-500 transition duration-300 flex items-center gap-2 justify-center mt-1"
        >
          <BsFillEnvelopeFill />
          info@superheat.rs
        </a>
      </div>
    </div>
  );
};
export default Contact;
