import Link from "next/link";

const Card = ({ img, path, title }) => {
  return (
    <Link
      href={path}
      className="flex flex-col relative overflow-hidden group items-center justify-center shadow-2xl hover:shadow-black/20 max-w-[400px] md:max-w-full place-self-center"
    >
      <div className="w-full h-[450px]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute w-full h-full  group-hover:bg-black/30 transition-all duration-500"></div>

      <div className="absolute bg-zinc-300 group-hover:bg-zinc-200 dark:bg-zinc-700 dark:group-hover:bg-zinc-600 bottom-0 w-full translate-y-[66px] group-hover:translate-y-0 px-9 text-center transition-all duration-500">
        <h1 className="text-3xl font-semibold py-4">{title}</h1>
        <button className="px-4 py-1 my-4 text-xl font-semibold bg-darkColor text-lightColor rounded-lg hover:bg-lightColor hover:text-darkColor transition-color duration-200 shadow-md">
          Saznajte
        </button>
      </div>
    </Link>
  );
};
export default Card;
