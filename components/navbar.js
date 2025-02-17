import Link from "next/link";
import Image from "next/image";

function Nav_bar() {
  return (
    <header className="bg-green-900 shadow-lg text-white py-4 px-6 flex justify-center items-center">
      {/* Logo & Brand */}
      <Link href="/" className="flex items-center space-x-4">
        <Image
          src="/quran-logo.png" // Add a Quran-related logo in public folder
          alt="Quran Logo"
          width={100}   // Increased size for better visibility
          height={100}  // Increased size for better visibility
          className="rounded-full"
        />
        <span className="text-gold-500 text-4xl font-bold tracking-wide">
          Tafseer Online
        </span>
      </Link>
    </header>
  );
}

export default Nav_bar;
