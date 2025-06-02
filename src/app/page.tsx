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
  const [showContactForm, setShowContactForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

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

  return (
    <div className={`relative h-screen w-full overflow-hidden ${nunito.className}`}>
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
