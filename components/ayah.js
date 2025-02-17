import convertToArabic from "../utils/convert-to-arabic";

function Ayah({ ayah, number }) {
  return (
    <span className="inline leading-[2] text-green-900 bg-beige px-2 py-1 rounded-lg">
      {ayah}
      <span className="font-quran text-gold-500">
        {" " + convertToArabic(number) + " "}
      </span>
    </span>
  );
}

export default Ayah;
