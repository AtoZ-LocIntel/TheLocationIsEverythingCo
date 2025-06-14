"use client";
import Image from 'next/image';
import Link from 'next/link'; // <-- Import Link

export default function AVIPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 text-white">
      {/* Home Button at the top left (or wherever you want) */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition font-semibold">
            ← Home
          </button>
        </Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Animal-Vehicle Impacts (AVI) Data Products
      </h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Explore our innovative data aggregation for animal-vehicle collisions. Stay tuned for a live demo app!
      </p>
      <Image
        src="/ca_crospts_zips_sample_4_good.png"
        alt="Sample Animal-Vehicle Collision Data"
        width={940}
        height={740}
        className="rounded-lg shadow-xl mx-auto"
        priority
      />
    </div>
  );
}
