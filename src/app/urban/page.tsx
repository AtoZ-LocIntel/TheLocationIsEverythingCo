"use client";
import Image from "next/image";
import Link from "next/link";

export default function UrbanInsightsPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-12 text-white">
      {/* Home Button at top left */}
      <div className="absolute top-4 left-4">
        <Link href="/">
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition font-semibold">
            ← Home
          </button>
        </Link>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Urban Insights Data Suite
      </h1>
      <p className="text-lg mb-8 text-center max-w-2xl">
        Our Urban Insights Data Suite delivers actionable neighborhood-level intelligence for the largest US cities, built from 311 service calls and more. Stay tuned for our initial release of "Infrastructure Health Index for Neighborhoods"
      </p>
      {/* You can add a sample image here if you have one, or a placeholder: */}
     <img src="/logo.png" alt="Location Is Everything Logo" style={{ width: '250px', height: '250px', marginLeft: '10px', border: '2px solid white', borderRadius: '50%', backgroundColor: 'white', objectFit: 'contain' }} />

    </div>
  );
}
