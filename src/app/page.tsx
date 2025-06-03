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

// Popup content for each POI (edit or expand as needed!)
const POI_CONTENT = [
  {
    title: "Open Data Approach",
    body: (
      <>
        <strong>Open Data:</strong> We connect you to open, authoritative data—no vendor lock-in!
      </>
    ),
    ring: "ring-blue-300"
  },
  {
    title: "Data Products",
    body: (
      <>
        <strong>Data Products:</strong> Our custom animal-vehicle collision data puts you ahead of the curve.
      </>
    ),
    ring: "ring-green-300"
  },
  {
    title: "More Data Products",
    body: (
      <>
        <strong>Data Products:</strong> More specialized data for your operations.
      </>
    ),
    ring: "ring-green-300"
  },
  {
    title: "Meet the Team",
    body: (
      <>
        <strong>Our Team:</strong> 25+ years across insurance, tech, and geospatial solutions!
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Meet the Team",
    body: (
      <>
        <strong>Our Team:</strong> 25+ years across insurance, tech, and geospatial solutions!
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Meet the Team",
    body: (
      <>
        <strong>Our Team:</strong> 25+ years across insurance, tech, and geospatial solutions!
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Meet the Team",
    body: (
      <>
        <strong>Our Team:</strong> 25+ years across insurance, tech, and geospatial solutions!
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Meet the Team",
    body: (
      <>
        <strong>Our Team:</strong> 25+ years across insurance, tech, and geospatial solutions!
      </>
    ),
    ring: "ring-yellow-300"
  }
];

export default function Home() {
  const [showOfferings, setShowOfferings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });
  const [activePOI, setActivePOI] = useState<number | null>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Location Intelligence Consultation Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nOrganization: ${form.organization}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:questions@thelocationiseverythingco.com?subject=${subject}&body=${body}`;
    setShowContactForm(false);
    setForm({
      name: "",
      organization: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  // Handles closing modal when clicking outside the modal content
  const handlePOIModalBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) setActivePOI(null);
  };

  return (
    <div className={`relative min-h-screen w-full overflow-x-hidden ${nunito.className}`}>
      {/* Background image */}
      <Image
        src="/title_image.png"
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none z-0"
        priority
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-950 opacity-35 z-10 pointer-events-none" />

      {/* --- POI HOTSPOTS LAYER --- */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        <button
          style={{ top: '12.2%', left: '13.4%', position: 'absolute' }}
          className="w-33 h-33 opacity-0 pointer-events-auto"
          title="Learn about our Open Data approach!"
          onClick={() => setActivePOI(0)}
          aria-label="POI 1: Open Data"
        ></button>
        <button
          style={{ top: '75.2%', left: '72.8%', position: 'absolute' }}
          className="w-33 h-33 opacity-0 pointer-events-auto"
          title="See our Data Products!"
          onClick={() => setActivePOI(1)}
          aria-label="POI 2: Data Products"
        ></button>
        <button
          style={{ top: '48.7%', left: '79%', position: 'absolute' }}
          className="w-33 h-33 opacity-0 hover:opacity-100 focus:opacity-100 ring-2 ring-green-300 hover:ring-4 focus:ring-4 ring-offset-2 rounded-full pointer-events-auto transition"
          title="See our Data Products!"
          onClick={() => setActivePOI(2)}
          aria-label="POI 3: Data Products"
        ></button>
        <button
          style={{ top: '19%', left: '82.5%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          className="w-33 h-33 opacity-0 hover:opacity-100 focus:opacity-100 ring-2 ring-yellow-300 hover:ring-4 focus:ring-4 ring-offset-2 rounded-full pointer-events-auto transition"
          title="Meet the Team!"
          onClick={() => setActivePOI(3)}
          aria-label="POI 4: Team"
        ></button>
        <button
          style={{ top: '38.5%', left: '28.3%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          className="w-33 h-33 opacity-0 hover:opacity-100 focus:opacity-100 ring-2 ring-yellow-300 hover:ring-4 focus:ring-4 ring-offset-2 rounded-full pointer-events-auto transition"
          title="Meet the Team!"
          onClick={() => setActivePOI(4)}
          aria-label="POI 5: Team"
        ></button>
        <button
          style={{ top: '82%', left: '17%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          className="w-33 h-33 opacity-0 pointer-events-auto"
          title="Meet the Team!"
          onClick={() => setActivePOI(5)}
          aria-label="POI 6: Team"
        ></button>
        <button
          style={{ top: '55.3%', left: '17.2%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          className="w-33 h-33 opacity-0 hover:opacity-100 focus:opacity-100 ring-2 ring-yellow-300 hover:ring-4 focus:ring-4 ring-offset-2 rounded-full pointer-events-auto transition"
          title="Meet the Team!"
          onClick={() => setActivePOI(6)}
          aria-label="POI 7: Team"
        ></button>
        <button
          style={{ top: '38.5%', left: '71.7%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
          className="w-33 h-33 opacity-0 hover:opacity-100 focus:opacity-100 ring-2 ring-yellow-300 hover:ring-4 focus:ring-4 ring-offset-2 rounded-full pointer-events-auto transition"
          title="Meet the Team!"
          onClick={() => setActivePOI(7)}
          aria-label="POI 8: Team"
        ></button>
      </div>

      {/* --- Fancy Modal for Active POI --- */}
      {activePOI !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handlePOIModalBackgroundClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-gray-900 relative animate-fadein border-4 border-blue-200">
            <button
              onClick={() => setActivePOI(null)}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-blue-600"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className={`text-2xl font-bold mb-2 ${POI_CONTENT[activePOI].ring?.replace("ring-", "text-")}`}>
              {POI_CONTENT[activePOI].title}
            </h2>
            <div className="text-lg">{POI_CONTENT[activePOI].body}</div>
          </div>
        </div>
      )}

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
                  <b>Location Master Data Management:</b> Learn how to organize and manage your data using location. Consultation, design support,
				  and free initial consults—your data, Location is Everything.
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

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <form
            onSubmit={handleContactSubmit}
            className="relative bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 flex flex-col gap-4"
          >
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
              aria-label="Close Contact Form"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-2">Contact Us</h2>
            <input
              name="name"
              type="text"
              required
              placeholder="Name*"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={form.name}
              onChange={handleFormChange}
            />
            <input
              name="organization"
              type="text"
              placeholder="Organization"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={form.organization}
              onChange={handleFormChange}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email*"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={form.email}
              onChange={handleFormChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none"
              value={form.phone}
              onChange={handleFormChange}
            />
            <textarea
              name="message"
              placeholder="Tell us what you're looking for…"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none resize-none min-h-[64px]"
              value={form.message}
              onChange={handleFormChange}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold mt-2"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Top-right menu */}
      <header className="fixed top-0 right-0 z-30 px-8 py-4">
        <nav className="flex gap-8 items-center justify-end">
          <button
            onClick={() => setShowOfferings(true)}
            className="hover:text-blue-400 transition text-white text-lg"
          >
            Offerings
          </button>
          <a href="#about" className="hover:text-blue-400 transition text-white text-lg">
            About
          </a>
          <a href="mailto:questions@thelocationiseverythingco.com" className="hover:text-blue-400 transition text-white text-lg">
            Contact
          </a>
        </nav>
      </header>

      {/* Main Centered Content */}
      <main className="relative z-20 flex flex-col justify-center items-center h-screen w-full px-2">
        <section className="flex flex-col items-center justify-center text-center w-full max-w-4xl py-4 mt-20 mb-20">
          <h1 className={
            `${barlowCondensed.className} text-4xl md:text-6xl font-extrabold italic mb-5
            bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight leading-[1.1] overflow-visible drop-shadow-lg`
          }>
            Location Intelligence <span className="block md:inline">Freedom</span>
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 max-w-3xl text-white drop-shadow-lg">
            Ditch the vendor lock-in and big hit to your pocket, keep the insights!
          </p>
          <p className="text-lg md:text-xl text-gray-100 mb-6 max-w-3xl drop-shadow-lg">
            Get full-featured location tools and data that you need, built on open standards—accessible via the web, without the vendor commitment.
          </p>
          {/* Why Choose Us Section with Interactive Circular Logo */}
          <button
            onClick={() => setShowContactForm(true)}
            title="Contact us for a free Location Intelligence consultation!"
            aria-label="Contact us for a free Location Intelligence consultation!"
            className="focus:outline-none active:scale-95 transition-transform"
            style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          >
            <Image
              src="/logo.png"
              alt="Location Is Everything Logo"
              width={77}
              height={77}
              className="w-65 h-65 mb-4 drop-shadow-lg border-12 border-black rounded-full bg-white"
            />
          </button>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 white-outline-black drop-shadow-lg">
            Why Choose Us?
          </h2>
          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto drop-shadow-lg font-bold">
		  Here at The Location Is Everything Company we believe that location is everything and should be the foundation in which your business organizes and manages its operational data.
		  This is referred to as Location Master Data Management and allows your oganization right from the get go location MDM allows you to manage your portfolio beyond the table.  
		  The , after decades of experience, that in 2025 and beyond you shouldn't have to work with and pay for bloated software
		  and data solutions.  Get a solution custom tailored for your organization at a fraction of the cost.  
            With over two decades delivering Location Intelligence solutions for some of the world’s most demanding industries—from Fortune 100 insurance to leading-edge technology, 
			public safety, infrastructure, and startups—our approach is grounded in real-world impact.
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

