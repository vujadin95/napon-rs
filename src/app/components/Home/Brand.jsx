import Image from "next/image";

const Brand = ({ path, brandName, img }) => {
  return (
    <a
      href={path}
      target="_blank"
      className="max-w-[140px] w-full rounded-md text-darkColor dark:text-lightColor flex shadow-xl flex-col items-center transition duration-200 hover:scale-110 overflow-hidden bg-zinc-200 hover:bg-zinc-100 dark:bg-zinc-700 dark:hover:bg-zinc-600"
    >
      <div className="w-full h-[100px] relative">
        <Image
          src={img}
          alt={brandName}
          fill
          sizes="(max-width: 140px) 100vw"
          className="object-scale-down"
          color="inherit"
        />
      </div>
      <p className="w-full text-center py-1 font-semibold text-sm sm:text-base">
        {brandName}
      </p>
    </a>
  );
};

export default Brand;
