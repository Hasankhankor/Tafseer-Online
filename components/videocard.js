import Link from "next/link";

function VideoCard({ title, link }) {
  return (
    <Link
      href={link}
      className="hover:shadow-lg cursor-pointer p-4 flex justify-center items-center text-2xl text-green-900 bg-gold-500 bg-opacity-40 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      {title}
    </Link>
  );
}

export default VideoCard;
