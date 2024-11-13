import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook } from "react-icons/bs";

const SocialNetwork = () => {
  return (
    <div className="flex flex-col items-center">
      <h2>Možete nas naći i na:</h2>
      <div className="text-xl flex gap-3 w-full justify-between flex-wrap mt-2">
        <a
          href="https://rs.linkedin.com/"
          target="_blank"
          className="hover:scale-125 transition duration-200 bg-primary p-2 rounded-full"
        >
          <BsLinkedin className="text-[#00a0dc] " />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          className="hover:scale-125 transition duration-200 bg-primary p-2 rounded-full"
        >
          <BsYoutube className="text-[#FF0000]" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="hover:scale-125 transition duration-200 bg-primary p-2 rounded-full"
        >
          <BsInstagram className="text-[#E1306C]" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="hover:scale-125 transition duration-200 bg-primary p-2 rounded-full"
        >
          <BsFacebook className="text-[#4267B2]" />
        </a>
      </div>
    </div>
  );
};
export default SocialNetwork;
