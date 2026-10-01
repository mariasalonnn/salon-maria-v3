export default function Map() {
  return (
    <section className="bg-white px-4 md:px-6 py-10">
      <div className="flex flex-col gap-8 mx-auto max-w-screen-xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-center">
          Find os her
        </h2>
        <p className="text-center text-base md:text-lg max-w-3xl mx-auto">
          Du finder os på Frederiksborgvej 202 i København NV – i Bispebjerg, tæt på Emdrup og
          Utterslev Mose.
        </p>
        <iframe
          title="Kort: Salon Maria, Frederiksborgvej 202, 2400 København NV"
          className="h-full w-full min-h-[500px] rounded-lg shadow-lg"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=place_id:ChIJtZ2yQxZSUkYR8GoDh9FxfuI&output=embed"
        ></iframe>
      </div>
    </section>
  );
}
