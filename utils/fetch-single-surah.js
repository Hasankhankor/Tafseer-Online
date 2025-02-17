import axios from "axios";

async function fetchSurah(surahUrl) {
  try {
    const res = await axios.get(surahUrl);
    const chapter = res.data.chapter;

    const ayahRes = await axios.get(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${chapter.id}`);
    const ayahs = ayahRes.data.verses;

    // Log the ayahs to debug
    console.log("Fetched ayahs:", ayahs);

    return {
      name: chapter.name_simple,
      ayahs: ayahs.map((ayah) => ({
        text: ayah.text_uthmani,
        numberInSurah: ayah.verse_number || 0, // Ensure numberInSurah is not undefined
      })),
    };
  } catch (error) {
    console.error("Error fetching surah data:", error);
    return null;
  }
}

export default fetchSurah;
