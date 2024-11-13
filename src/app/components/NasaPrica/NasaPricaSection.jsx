const NasaPricaSection = ({ textContent, imagePath, additionalContent }) => {
  return (
    <section className="max-w-[1240px] mx-auto flex flex-col items-center py-20 min-h-[400px] gap-3 md:flex-row px-[10px] md:px-[20px] text-xl md:text-2xl">
      <div className="w-[100%] md:w-[50%]">
        <p className="pb-4 md:pb-8">
          Naša priča je neprekidno davanje odgovora na pitanje:
          <span className="text-red-500">ŠTA MOŽE BITI BOLJE?</span>
        </p>
        <h2>To je naša vizija, misija, politika poslovanja…</h2>
      </div>
      <div className="w-[100%] md:w-[50%]">
        <img src="/assets/nasa-prica.jpg" alt="" className="rounded-sm" />
      </div>
    </section>
  );
};
export default NasaPricaSection;
