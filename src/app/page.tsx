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
  // ... your POI_CONTENT as before ...
  {
    title: "Open Tools, Code and Data Approach",
    body: (
      <>
        <strong>Reliable and Affordable</strong> -- We connect you to open and authoritative geospatial and location intelligence solutions without those big mapping and location ingelligence vendors! no lock-in!, just insights at a fraction of the cost!
      </>
    ),
    ring: "ring-blue-300"
  },
  {
    title: "Animal-Vehicle Impact Suite",
    body: (
      <>
        <strong></strong>Specifically tailored for the automotive insurance industry and leveraging our innovative data capture methods we have aggregated animal to vehicle impact data on roadways and zipcodes in select states.
      <br />
        <Image
          src="/ca_crospts_zips_sample_4_good.png"
          alt="Sample Animal-Vehicle Collision Data"
          width={640}
          height={540}
          className="mt-4 rounded-lg shadow-lg mx-auto"
        />
    </>
    ),
    ring: "ring-green-300"
  },
  // ...rest of POI_CONTENT...
  {
    title: "Affordable Location Intelligence Solutions",
    body: (
      <>
        <strong>Ditch your geospatial and location intelligence vendor</strong> -- Get and pay for the insights you need, not a bloated platform or data service that makes you pay for capabilities and data you will never use.
      </>
    ),
    ring: "ring-green-300"
  },
  {
    title: "Data Product Passion",
    body: (
      <>
        <strong>Urban Insights Data Suite</strong> -- Based on historical 311 service calls we have derived neighborhood level insights across the largest US cities.  
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Our Vision",
    body: (
      <>
        <strong>Location Master Data Management</strong> -- We believe that organizing and managing your data using location is not a nice to have but should be your data management foundation. Imagine google maps but for your business!
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Customers",
    body: (
      <>
        <strong></strong> Insurance/
    RealEstate/
    Finance/
    Retail/
    Healthcare/
    Manufacturing/
    Energy/
    Technology
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Turn Operational Data into Reliable Analytical Data",
    body: (
      <>
        <strong>You can do this without parcels and buildings!</strong> Use Location MDM to turn operational and/or Big data into reliable downstream Analytical Products for real insights!
      </>
    ),
    ring: "ring-yellow-300"
  },
  {
    title: "Unique Location Intelligence Solutions",
    body: (
      <>
        <strong>Location Based Solutions to: </strong> -- Schedule your field crews easily!, Find properties and open spatial data in new and innovative ways!
      </>
    ),
    ring: "ring-yellow-300"
  }
];

export default function Home() {
  const [showOfferings, setShowOfferings] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showPhone, setShowPhone] = useState(false); // <-- ADD THIS LINE
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
    window.location.href = `mailto:questions@locationiseverythingco.com?subject=${subject}&body=${body}`;
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
        {[
          { top: '12.2%', left: '13.4%' },
          { top: '75.2%', left: '72.8%' },
          { top: '48.7%', left: '79%' },
          { top: '19%', left: '82.5%', transform: 'translate(-50%, -50%)' },
          { top: '38.5%', left: '28.3%', transform: 'translate(-50%, -50%)' },
          { top: '82%', left: '17%', transform: 'translate(-50%, -50%)' },
          { top: '55.3%', left: '17.2%', transform: 'translate(-50%, -50%)' },
          { top: '38.5%', left: '71.7%', transform: 'translate(-50%, -50%)' }
        ].map((style, idx) => (
          <button
            key={idx}
            style={{ ...style, position: 'absolute' }}
            className="w-12 h-12 md:w-33 md:h-33 opacity-0 pointer-events-auto"
            title={POI_CONTENT[idx]?.title ?? "Info"}
            onClick={() => setActivePOI(idx)}
            aria-label={`POI ${idx + 1}: ${POI_CONTENT[idx]?.title ?? "Info"}`}
          />
        ))}
      </div>

      {/* --- Fancy Modal for Active POI --- */}
      {activePOI !== null && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-2"
          onClick={handlePOIModalBackgroundClick}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8 max-w-md w-full text-gray-900 relative animate-fadein border-4 border-blue-200 mx-2">
            <button
              onClick={() => setActivePOI(null)}
              className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-blue-600"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className={`text-xl md:text-2xl font-bold mb-2 ${POI_CONTENT[activePOI].ring?.replace("ring-", "text-")}`}>
              {POI_CONTENT[activePOI].title}
            </h2>
            <div className="text-base md:text-lg">{POI_CONTENT[activePOI].body}</div>
          </div>
        </div>
      )}

      {/* --- PHONE MODAL --- */}
      {showPhone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2">
          <div className="relative bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-8 w-full max-w-sm mx-2 flex flex-col items-center">
            <button
              onClick={() => setShowPhone(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
              aria-label="Close Phone Modal"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white mb-4">Call Us</h2>
            <div className="text-2xl text-blue-400 font-bold tracking-wide mb-2">
              <a href="tel:16037220669" className="hover:underline">1.603.722.0669</a>
            </div>
            <p className="text-gray-200 text-base text-center">We are happy to talk!</p>
          </div>
        </div>
      )}

      {/* Offerings Modal */}
      {showOfferings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2">
          <div className="relative bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-lg mx-2">
            <button
              onClick={() => setShowOfferings(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
              aria-label="Close Offerings"
            >
              <FaTimes />
            </button>
            <div className="flex flex-col items-center">
              <FaChartBar className="text-4xl md:text-5xl text-blue-400 mb-4 drop-shadow-lg" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 drop-shadow-lg text-white">Offerings</h2>
              <ul className="list-disc list-inside text-left text-gray-100 text-base md:text-lg space-y-3 md:space-y-4 drop-shadow-lg max-w-xl">
                <li>
                  <b>Location Master Data Management</b> Learn how to organize and manage your data using location affordably. Consultation, design support,
                  please reach out for a free consult!, Location is Everything.
                </li>
                <li>
                  <b>Strategic Location Intelligence Solutions</b> Intuitive map tools, open data viewers, and property finders—no vendor lock-in.
                </li>
                <li>
                  <b>Differentiating Data Products</b>With a focus on the insurance industry stay tuned for: Animal-Vehicle Impact Products and our Urban Insights Data Suite!
				    </li>
                <li>
				   <b>Making Sense of your BIG DATA</b>   We know how challenging it is to get insights out of your big data, we have a passion for and specialize in turning big messy data into location intelligence data products!
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-2">
          <form
            onSubmit={handleContactSubmit}
            className="relative bg-gray-900 bg-opacity-95 rounded-2xl shadow-2xl p-6 md:p-8 w-full max-w-md mx-2 flex flex-col gap-4"
          >
            <button
              type="button"
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-2xl"
              aria-label="Close Contact Form"
            >
              &times;
            </button>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Contact Us</h2>
            <input
              name="name"
              type="text"
              required
              placeholder="Name*"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none text-base"
              value={form.name}
              onChange={handleFormChange}
            />
            <input
              name="organization"
              type="text"
              placeholder="Organization"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none text-base"
              value={form.organization}
              onChange={handleFormChange}
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email*"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none text-base"
              value={form.email}
              onChange={handleFormChange}
            />
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none text-base"
              value={form.phone}
              onChange={handleFormChange}
            />
            <textarea
              name="message"
              placeholder="Tell us what you are looking for…"
              className="rounded p-2 bg-gray-800 text-white border border-gray-700 focus:outline-none resize-none min-h-[64px] text-base"
              value={form.message}
              onChange={handleFormChange}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold mt-2 text-base"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Top-right menu */}
      <header className="fixed top-0 right-0 z-30 px-4 md:px-8 py-2 md:py-4">
        <nav className="flex gap-4 md:gap-8 items-center justify-end">
          <button
            onClick={() => setShowOfferings(true)}
            className="hover:text-blue-400 transition text-white text-base md:text-lg"
          >
            Offerings
          </button>
          <a
            href="/avi"
            className="hover:text-blue-400 transition text-white text-base md:text-lg"
          >
            Animal-Vehicle Impacts (AVI)
          </a>
          <a
            href="/urban"
            className="hover:text-blue-400 transition text-white text-base md:text-lg"
          >
            Urban Insights Data Suite
          </a>
          <button
            onClick={() => setShowPhone(true)}
            className="hover:text-blue-400 transition text-white text-base md:text-lg"
          >
            Contact Us by Phone
          </button>
          <a
            href="mailto:questions@locationiseverythingco.com"
            className="hover:text-blue-400 transition text-white text-base md:text-lg"
          >
            Contact Us by Email
          </a>
        </nav>
      </header>
	 

      {/* Main Centered Content */}
      <main className="relative z-20 flex flex-col justify-center items-center w-full px-2">
        <section className="flex flex-col items-center justify-center text-center w-full max-w-4xl px-2 py-4 mt-10 md:mt-20 mb-10 md:mb-20">
          <h1 className={
            `${barlowCondensed.className} text-2xl md:text-8xl font-extrabold italic mb-4 md:mb-5
            bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight leading-tight md:leading-[1.1] overflow-visible drop-shadow-lg`
          }>
            Location Intelligence <span className="block md:inline">Freedom</span>
          </h1>
          <p className="text-base md:text-3xl font-light mb-2 md:mb-4 max-w-3xl text-white drop-shadow-lg">
            Break free from big vendor lock-in and big hit to your pocket, keep the insights!
          </p>
          <p className="text-sm md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl drop-shadow-lg">
            Get full-featured location and business intelligence tools and data that you need without the vendor commitment.
			</p>
	      <p className="text-sm md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl drop-shadow-lg">
            Checkout some free to use services!
			</p>
	    <p className="text-sm md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl drop-shadow-lg">
  <a
    href="https://pdffriend.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-300 underline hover:text-blue-100"
  >
    pdffriend.com
  </a>{" "}
  — Create instant websites from cool PDFs. We will be expanding on this to include connectivity to GitHub, Netlify, and more. Future enhancements include the ability to make your PDF ADA Compliant,
  Auto-Linker to instantly improve usability by hyperlinking anything that looks like a URL, email, or phone number. Helps people interact with PDFs without needing to copy/paste!, and more, its your PDF Friend!
</p>

<p className="text-sm md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl drop-shadow-lg">
  <a
    href="https://chownearby.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-300 underline hover:text-blue-100"
  >
    chownearby.com
  </a>{" "}
  — Location Intelligence in real-time and on-demand. This retrieves food/restaurant data from OSM and Overture!
</p>

          <p className="text-sm md:text-xl text-gray-100 mb-4 md:mb-6 max-w-3xl drop-shadow-lg">
          Click on the poi icons to learn more!
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
              width={300}
              height={300}
              className="w-30 h-30 md:w-65 md:h-65 mb-4 drop-shadow-lg border-8 md:border-12 border-black rounded-full bg-white"
            />
          </button>
          <h2 className="text-xl md:text-5xl font-bold mb-2 md:mb-3 white-outline-black drop-shadow-lg">
            Why Choose Us?
          </h2>
          <p className="text-sm md:text-lg text-white max-w-5xl mx-auto drop-shadow-lg font-bold">
            This is simple, we love building cool spatial data products that are uncommon and insightful.  We also love to prove that you DO NOT need those big mapping and location intelligence
            vendors for the location intelligence insight you need.  We also believe that location should be the foundation in which businesses organizes and manage data.
            This is referred to as Location Master Data Management and allows your organization, right from the get go, to manage your portfolio with real intelligence, imagine Google maps but targeted for your organization!
            Stop paying for bloated software and data solutions. Get a location intelligence solution custom tailored for your organization at a fraction of the cost.
          </p>
        </section>
      </main>

      {/* Footer - NOT fixed, so it flows with page on mobile */}
      <footer className="w-full text-center py-3 text-gray-200 text-base border-t border-gray-800 bg-black/80 drop-shadow-lg z-30">
        © {new Date().getFullYear()} The Location Is Everything Co. All rights reserved.
      </footer>
    </div>
  );
}
