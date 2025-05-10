import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-6 py-12">
      <Image
        src="/logo.png"
        alt="The Location Is Everything Co"
        width={400}
        height={200}
        className="w-3/4 max-w-xl mb-8"
      />
			
      <p className="text-2xl text-gray-600 italic mb-4">
        Stay Tuned in Later 2025 for a New Way of Getting Location Intelligence&hellip;
      </p>
    </main>
  );
}

