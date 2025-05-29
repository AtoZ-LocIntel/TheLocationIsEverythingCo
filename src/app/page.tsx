"use client";
import { useState } from 'react';
import Image from 'next/image';
import { FaChartBar, FaTimes } from 'react-icons/fa';
import { Nunito_Sans, Barlow_Condensed } from 'next/font/google';

const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  display: 'swap',
});

export default function Home() {
  const [showOfferings, setShowOfferings] = useState(false);

  return (
    <div className={`relative h-screen w-full overflow-hidden ${nunito.className}`}>
      {/* Background image */}
<Image
  src="/title_image.png"
  alt=""
  fill
  sizes="100vw"
  className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
  priority
  aria-hidden="true"
/>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 opacity-35 z-10" />

      {/* Offerings Modal */}
      {showOfferings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-4">
            <button
              onClick={() => setShowOfferings(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
              aria-label="Close Offerings"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-center">
              <FaChartBar className="text-5xl text-blue-400 mb-4 drop-shadow-lg" />
              <h2 className="text-3xl font-bold mb-6 drop-shadow-lg text-white">Offerings</h2>
              <ul className="list-disc list-inside text-left text-gray-100 text-lg space-y-4 drop-shadow-lg max-w-xl">
                <li>
                  <b>Location Master Data Management:</b> Consultation, design support, and free initial consults—your data, organized by location.
                </li>
                <li>
                  <b>Strategic Location Intelligence Solutions:</b> Intuitive map tools, open data viewers, and property finders—no vendor lock-in.
                </li>
                <li>
                  <b>Specialized Data Products:</b> Stay tuned for our Animal Vehicle Collision aggregation insights and more!
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* NavBar - Fixed Top */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-3 bg-black/70 shadow-lg z-30">
 <div className="flex items-center gap-2">
<Image
  src="/logo.png"
  alt="Location Is Everything"
  width={40}
  height={40}
  className="hidden md:inline w-10 h-10 border-2 border-black rounded-full bg-white mr-2"
  priority
/>
  <span className="hidden md:inline text-base italic text-white drop-shadow-lg">
    Location Is Everything
  </span>
</div>

        <nav className="flex gap-8 items-center">
          <button
            onClick={() => setShowOfferings(true)}
            className="hover:text-blue-400 transition text-white drop-shadow outline-none text-lg"
          >
            Offerings
          </button>
          <a href="#about" className="hover:text-blue-400 transition text-white drop-shadow text-lg">About</a>
          <a href="mailto:questions@thelocationiseverythingco.com" className="hover:text-blue-400 transition text-white drop-shadow text-lg">Contact</a>
        </nav>
      </header>

      {/* Main Centered Content */}
      <main className="relative z-20 flex flex-col justify-center items-center h-screen w-full px-2">
        <section className="flex flex-col items-center justify-center text-center w-full max-w-4xl py-4 mt-20 mb-20">
          <h1 className={
            `${barlowCondensed.className} text-4xl md:text-6xl font-extrabold italic mb-5
            bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight leading-[1.1] overflow-visible drop-shadow-lg`
          }>
            Location Intelligence <span className="block md:inline">On Your Terms</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 max-w-3xl text-white drop-shadow-lg">
            Ditch the vendor lock-in and big hit to your pocket, keep the insights!
          </p>
          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl drop-shadow-lg">
            Get full-featured location tools and data, built on open standards—accessible via the web, without the vendor commitment.
          </p>
    <Image
  src="/logo.png"
  alt="Location Is Everything Logo"
  width={56}
  height={56}
  className="w-30 h-30 mb-4 drop-shadow-lg border-2 border-black rounded-full bg-white"
/>

  <h2 className="text-3xl md:text-4xl font-bold mb-3 white-outline-black drop-shadow-lg">
  Why Choose Us?
</h2>

<p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-lg font-bold">
  With over two decades delivering Location Intelligence solutions for some of the world’s most demanding industries—from Fortune 100 insurance to leading-edge technology, public safety, infrastructure, and startups—our approach is grounded in real-world impact.
  <br /><br />
  We know the challenges first-hand: costly tools, bloated software, and the frustration of paying for capabilities you don’t need. That’s why we created The Location Is Everything Company—to bring you only the location intelligence that delivers value, without the headaches of licensing, lock-in, or unneeded complexity.
</p>
        </section>
      </main>

      {/* Footer - Fixed Bottom */}
      <footer className="fixed bottom-0 left-0 w-full text-center py-3 text-gray-200 text-base border-t border-gray-800 bg-black/80 drop-shadow-lg z-30">
        © {new Date().getFullYear()} The Location Is Everything Co. All rights reserved.
      </footer>
    </div>
  );
}
