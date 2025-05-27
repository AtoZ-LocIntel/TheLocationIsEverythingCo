import Image from 'next/image';

export default function Home() {
  return (
    <main className="h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-4">
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Location Intelligence On Your Terms
      </h1>

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="The Location Is Everything Co"
        width={300}
        height={150}
        className="w-3/5 max-w-xs md:max-w-md mb-4"
        priority
      />

      {/* Subheads */}
      <p className="text-lg md:text-xl text-gray-200 text-center mb-1">
        Ditch the vendor lock-in and big hit to your pocket, keep the insights!
      </p>
      <p className="text-base md:text-lg text-gray-400 text-center mb-4">
        Get full-featured location tools and data, built on open standards, without the vendor commitment.
      </p>

      {/* Why Choose Us */}
      <div className="bg-gray-900 rounded-xl p-4 max-w-xl w-full shadow text-center border border-gray-800">
        <h2 className="text-xl font-semibold mb-1 text-white">Why Choose Us?</h2>
        <p className="text-sm md:text-base text-gray-200">
          After 25 years working with location data and tools, we know the drill: Bloated software, never-ending installs, constant license headaches, and a price tag that makes your accountant weep.
          <br /><br />
          We believe there’s a better way. At The Location Is Everything Company, we cut out the clutter—and the cost.
          <br />
          No bloat, no vendor lock-in. Just the right insights, at the right time, with the right data. All on your terms.
        </p>
      </div>
    </main>
  );
}
