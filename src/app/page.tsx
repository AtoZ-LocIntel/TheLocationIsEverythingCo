import Image from 'next/image';
import { FaChartBar, FaLightbulb } from 'react-icons/fa';
import { Barlow_Condensed } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  style: ['italic'],
  display: 'swap',
});

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Blurred, subtle background image */}
   <img
  src="/title_image.png"
  className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none z-0"
  alt=""
  aria-hidden="true"
/>

      {/* Overlay for extra darkness/contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 opacity-85 z-10" />

      {/* Main content */}
      <main className="relative z-20 min-h-screen flex flex-col">
        {/* Nav Bar */}
        <header className="flex items-center justify-between px-8 py-4 bg-black/70 shadow-lg">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="The Location Is Everything Co" width={64} height={32} className="w-16 h-auto" priority />
            <span className="text-2xl font-bold tracking-tight">The Location Is Everything Co</span>
          </div>
          <nav className="flex gap-8 items-center">
            <a href="#offerings" className="hover:text-blue-400 transition">Offerings</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="mailto:questions@thelocationiseverythingco.com" className="hover:text-blue-400 transition">Contact</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-10 md:py-16 px-4">
          <h1 className={
            `${barlowCondensed.className} text-4xl md:text-6xl font-extrabold italic mb-4 
            bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight leading-[1.2] overflow-visible`
          }>
            Location Intelligence <span className="block md:inline">On Your Terms</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-6 max-w-2xl text-gray-100">
            Ditch the vendor lock-in and big hit to your pocket, keep the insights!
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Get full-featured location tools and data, built on open standards—accessible via the web, without the vendor commitment.
          </p>
        </section>

        {/* Main Cards Row */}
        <section className="flex flex-col md:flex-row items-stretch justify-center gap-8 px-4 mb-20" id="about">
          {/* Why Choose Us Card */}
          <div className="flex-1 bg-gray-800/90 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <FaLightbulb className="text-5xl text-yellow-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-base text-gray-200 text-left whitespace-pre-line">
              With over two decades delivering geospatial solutions for some of the world’s most demanding industries—from Fortune 100 insurance to leading-edge technology, public safety, infrastructure, and startups—our approach is grounded in real-world impact.
              <br /><br />
              We’ve led the way in Location Master Data Management for multi-billion-dollar enterprises, built core mapping products at the world’s most recognized consumer brands, and solved critical problems for both public and private sector organizations. Our experience spans analytics, software, data architecture, risk management, catastrophe analysis, broadband mapping, custom boundaries, and spatial data science—always with a focus on what organizations truly need, not what vendors want to sell.
              <br /><br />
              We know the challenges first-hand: costly tools, bloated software, and the frustration of paying for capabilities you don’t need. That’s why we created The Location Is Everything Company—to bring you only the location intelligence that delivers value, without the headaches of licensing, lock-in, or unneeded complexity.
              <br /><br />
              When you work with us, you’re not just getting a product. You’re tapping into decades of proven, cross-industry location intelligence expertise—delivered simply, openly, and on your terms.
            </p>
          </div>
          {/* Offerings Card */}
          <div className="flex-1 bg-gray-800/90 rounded-2xl shadow-xl p-8 flex flex-col items-center" id="offerings">
            <FaChartBar className="text-5xl text-blue-400 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Offerings</h2>
            <ul className="list-disc list-inside text-left text-gray-200 text-base space-y-3">
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
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-gray-400 text-sm border-t border-gray-800 bg-black/70">
          © {new Date().getFullYear()} The Location Is Everything Co. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
