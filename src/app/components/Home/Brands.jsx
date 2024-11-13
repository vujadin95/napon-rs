import Brand from "./Brand";
// import { brandsCollecton } from "@/app/data/brandsCollection";
import { brandsCollecton } from "../../data/brandsCollection";

const Brands = () => {
  return (
    <section className="flex gap-5 flex-wrap items-center justify-center max-w-[1240px] mx-auto min-h-[400px] px-3 md:px-5 py-10">
      {brandsCollecton.map((brand) => (
        <Brand
          key={brand.id}
          path={brand.path}
          img={brand.img}
          brandName={brand.brandName}
        />
      ))}
    </section>
  );
};
export default Brands;
