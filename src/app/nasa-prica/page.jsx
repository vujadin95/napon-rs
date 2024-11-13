import BackgroundImage from "../components/Home/BackgroundImage";

const NasaPrica = () => {
  return (
    <>
      {/* <section className="relative w-full h-[600px] flex items-center">
        <BackgroundImage
          imagePath="/assets/nasa-prica/nasa-prica.jpg"
          altText="o nama"
        />
        <div className="bg-darkColor/20 w-full h-[600px] z-10">
          <div className="z-10 max-w-[1240px] w-full mx-auto text-lightColor pt-10">
            <p className="text-4xl md:text-6xl text-center font-semibold leading-normal drop-shadow-2xl">
              Činimo vaš biznis efikasnijim.
            </p>
          </div>
        </div>
      </section> */}
      <section className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
        <div className="w-[100%] md:w-[40%]">
          <p className="pb-4 md:pb-6">
            Naša priča je neprekidno davanje odgovora na pitanje:{" "}
            <span className="text-red-500">ŠTA MOŽE BITI BOLJE?</span>
          </p>
          <h2>To je naša vizija, misija, politika poslovanja…</h2>
        </div>
        <div className="w-[100%] md:w-[60%]">
          <img
            src="/assets/nasa-prica/hvac-c.jpg"
            alt=""
            className="rounded-sm w-full shadow-xl"
          />
        </div>
      </section>
      <section className="bg-zinc-200 dark:bg-zinc-600/20">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row-reverse px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
          <div className="w-[100%] md:w-[40%] text-left md:text-right">
            <h2 className="pb-4 md:pb-8">
              Naša priča je usmerena ka konstantom unapređenju rashladne opreme
              svih energetskih objekata a naročito rashladne opreme u
              hladnjačama.
            </h2>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <img
              src="/assets/nasa-prica/nasa-prica.jpg"
              alt=""
              className="rounded-sm w-full object-cover shadow-xl"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
        <div className="w-[100%] md:w-[40%]">
          <p>
            Tvorac ove priče je tim inženjera sa velikim iskustvom iz oblasti
            hlađenja, automatike, mašinstva, termo-tehnike i elektro-tehnike.
          </p>
        </div>
        <div className="w-[100%] md:w-[60%]">
          <img
            src="/assets/nasa-prica/engineer.jpg"
            alt=""
            className="rounded-sm w-full shadow-xl"
          />
        </div>
      </section>
      <section className="bg-zinc-200 dark:bg-zinc-600/20">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 gap-3 md:flex-row-reverse px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
          <div className="w-[100%] md:w-[40%] text-left md:text-right">
            <p>
              Možemo se pohvaliti učešćem na mnogobrojnim uspešno izvedenim
              projektima, internacionalnim iskustvom a posebno ističemo naš
              istraživačko-razvojni sektor.
            </p>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <img
              src="/assets/nasa-prica/izveden-projekat.jpg"
              alt=""
              className="rounded-sm w-full shadow-xl"
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 max-h-[600px] gap-3 md:flex-row px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
        <div className="w-[100%] md:w-[40%]">
          <h2 className="">
            Razvijamo nestandardna rešenja i aplikacije za sisteme hlađenja. U
            njih kroz softvere integrišemo naše iskustvo i znanje i na taj način
            ostvarujemo znatne uštede u potrošnji električne energije i emisiji
            CO2.
          </h2>
        </div>
        <div className="w-[100%] md:w-[60%]">
          <img
            src="/assets/nasa-prica/analiza-strujanja.jpg"
            alt=""
            className="rounded-sm w-full shadow-xl"
          />
        </div>
      </section>
      <section className="bg-zinc-200 dark:bg-zinc-600/20">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center py-10 md:py-20 max-h-[600px] gap-3 md:flex-row-reverse px-3 md:px-[20px] text-l sm:text-xl min-[945px]:text-2xl">
          <div className="w-[100%] md:w-[40%] text-left md:text-right">
            <p>
              Dovodimo opremu u idealne uslove rada čime produžavamo njen radni
              vek, neprekidno vršimo SCADA monitoring svih parametara sistema a
              na taj način i dalje pratimo
              <span className="text-red-500">„ŠTA MOŽE BITI BOLJE?“</span>.
            </p>
          </div>
          <div className="w-[100%] md:w-[60%]">
            <img
              src="/assets/nasa-prica/scada.png"
              alt=""
              className="rounded-sm w-full shadow-xl"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default NasaPrica;
