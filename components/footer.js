import Image from "next/image";  // Import Image component

function Footer() {
  const github =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/480px-Octicons-mark-github.svg.png?download";

  return (
    <footer className="footer bg-green-900 text-white py-4 px-6 flex justify-center items-center">
      <p>Created By Hasan Tariq</p>

      {/* GitHub Button */}
      <a
        href="https://github.com/Hasankhankor/Tafseer-Online"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 bg-gold-500 text-green-900 px-4 py-2 rounded-full transition hover:bg-gold-400 ml-4"
      >
        <Image
          src={github}
          alt="GitHub"
          width={25}
          height={25}
          className="rounded-full"
        />
        <span className="font-semibold">GitHub</span>
      </a>
    </footer>
  );
}

export default Footer;
