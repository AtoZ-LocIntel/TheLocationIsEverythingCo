import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Location Intelligence On Your Terms
      </h1>

      {/* Logo */}
      <Image
        src="/logo.png"
        alt="The Location Is Everything Co"
        width={400}
        height={200}
        className="w-3/4 max-w-xl mb-8"
        priority
      />

      {/* Subheads */}
      <p className="text-xl md:text-2xl text-gray-200 text-center mb-2">
        Ditch the vendor lock-in and big hit to your pocket, keep the insights!
      </p>
      <p className="text-lg md:text-xl text-gray-400 text-center mb-8">
        Get full-featured location tools and data, built on open standards, without the vendor commitment.
      </p>

      {/* Why Choose Us */}
      <div className="bg-gray-900 rounded-2xl p-6 max-w-2xl w-full shadow-md text-center border border-gray-800">
        <h2 className="text-2xl font-semibold mb-2 text-white">Why Choose Us?</h2>
        <p className="text-base md:text-lg text-gray-200">
          After 25 years working with location data and software, we know the drill: Bloated software, never-ending installs, constant license headaches, and a price tag that makes your accountant weep.
          <br /><br />
          We believe there’s a better way. At The Location Is Everything Company, we cut out the clutter—and the cost. <br />
          No bloat, no vendor lock-in. Just the right insights, at the right time, with the right data. All on your terms.
		  We integrate your data with open source software and data to provide affordable Location Intelligence.
        </p>
      </div>
    </main>
  );
}
