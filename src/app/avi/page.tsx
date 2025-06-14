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
        Explore our innovative Animal-Vehicle Impact (AVI) Data Products, state roll out beginning in late 2025.  Michigan, Iowa, Minnesota, Texas, California, Nebraska, Kansas, New York, South Dakota, Montana, Nevada, Arizona, New Mexico, Colorado, New Hampshire and Vermont.
      </p>
      <Image
        src="/avi_cnts_zip_page.png"
        alt="Sample Animal-Vehicle Collision Data"
        width={940}
        height={840}
        className="rounded-lg shadow-xl mx-auto"
        priority
      />
    </div>
  );
}
