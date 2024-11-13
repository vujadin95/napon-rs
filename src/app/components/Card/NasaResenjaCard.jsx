const NasaResenjaCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col relative overflow-hidden group items-center justify-center shadow-2xl hover:shadow-black/20 cursor-pointer max-w-[400px] md:max-w-full place-self-center md:place-self-stretch">
      <div className="w-full h-[450px]">
        <img
          src={img}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500 bg-white"
        />
      </div>

      <div className="absolute w-full h-full group-hover:bg-black/30 transition-all duration-500"></div>

      <div className="absolute bg-zinc-300 group-hover:bg-zinc-200 dark:bg-zinc-700 dark:group-hover:bg-zinc-600 bottom-0 w-full translate-y-[85px] group-hover:translate-y-0 text-center transition-all duration-500">
        <div className="flex items-center text-center justify-center h-[72px]">
          <h1 className="text-3xl font-semibold">{title}</h1>
        </div>
        <p className="text-xl font-semibold h-[84px] text-center">
          {description}
        </p>
      </div>
    </div>
  );
};
export default NasaResenjaCard;
/*
  <div className="max-w-[375px] relative rounded-md shadow-lg transition-all ease-in duration-200 hover:scale-105 overflow-hidden group bg-zinc-200">
      <div className=" relative h-[360px]">
        <img src={img} alt={title} className="object-cover rounded-sm rounded-b-none w-full h-[360px]" />
        * <Image
          src={img}
          alt={`${title}`}
          fill
          sizes="(max-width: 400px) 100vw"
          className="object-cover rounded-md rounded-b-none"
          loading="lazy"
        /> 
      </div >

  <div className="flex flex-col items-center px-4 pb-3 w-full h-full text-darkColor bg-zinc-300 group-hover:bg-zinc-200 dark:bg-zinc-700 dark:group-hover:bg-zinc-600 dark:text-lightColor transition-colors duration-150">
    <h3 className="py-2 text-lg sm:text-2xl text-center">{title}</h3>
  </div>
    </div >

*/
