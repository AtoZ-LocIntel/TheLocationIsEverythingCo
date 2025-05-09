// File: src/components/ServiceCard.tsx
import React from "react";

interface Props {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <div className="border rounded-2xl shadow p-6 bg-gray-50 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}

// File: src/components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">The Location Co.</h1>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#services" className="text-gray-700 hover:text-black">Services</a></li>
          <li><a href="#about" className="text-gray-700 hover:text-black">About</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-black">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// File: src/components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-16 py-6 text-center text-sm text-gray-600">
      <p>&copy; {new Date().getFullYear()} The Location Is Everything Co. All rights reserved.</p>
    </footer>
  );
}

// File: src/pages/index.tsx
import React from "react";
import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white text-gray-900 p-8">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">The Location Is Everything Co.</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Making Location Intelligence affordable through open-source tools and data. We help organizations turn location data into a strategic asset.
          </p>
        </section>

        <section id="services" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            title="1. Location Master Data Management (MDM)"
            description="Build a trusted source of geospatial truth by mastering location data across your enterprise."
          />
          <ServiceCard
            title="2. Geospatial Data Architecture"
            description="Design scalable, open-source-based data architecture tailored for spatial intelligence."
          />
          <ServiceCard
            title="3. Operational to Analytical Data Products"
            description="We clean, enrich, and transform operational data into actionable, accurate location-aware analytical products."
          />
          <ServiceCard
            title="4. Location Intelligence Applications & Dashboards"
            description="From idea to interface—custom apps and dashboards powered by your mastered location data."
          />
          <ServiceCard
            title="5. MDM Architecture & Implementation"
            description="Hands-on support to stand up your Location MDM—from blueprints to deployment."
          />
          <ServiceCard
            title="6. Tech & Skill Enablement"
            description="We help your team adopt the right open-source tools and build internal skills—no vendor lock-in required."
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

// File: src/App.tsx
import React from "react";
import HomePage from "./pages/index";

function App() {
  return <HomePage />;
}

export default App;

// File: src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// File: src/styles/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
