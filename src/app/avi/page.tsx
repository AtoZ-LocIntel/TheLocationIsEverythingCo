import Image from 'next/image';

export default function AviPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white px-4 py-10">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
        Animal-Vehicle Impact (AVI) Data Products
      </h1>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl text-center">
        Explore our latest sample: aggregated animal-vehicle collision data visualized by ZIP code.
      </p>
      <div className="w-full flex justify-center">
        <Image
          src="/ca_crospts_zips_sample_4_good.png"
          alt="Animal-Vehicle Collision Data Sample"
          width={1000}
          height={800}
          className="rounded-xl shadow-xl max-w-full h-auto border-4 border-blue-200"
          priority
        />
      </div>
      {/* 
        // When your app is ready, replace the image above with your embedded app.
        // Example: 
        // <iframe src="https://your-app-url.vercel.app" className="w-full h-[800px] mt-8 rounded-xl shadow-xl border-2 border-blue-200"></iframe>
      */}
    </main>
  );
}
