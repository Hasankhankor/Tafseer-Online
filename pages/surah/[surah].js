import Head from "next/head";
import axios from "axios";
import AudioPlayer from "react-h5-audio-player";
import Ayah from "../../components/ayah";
import fetchSurah from "../../utils/fetch-single-surah";
import { useEffect, useState } from "react";

function Surah({ data }) {
  return (
    <div className="w-full">
      <Head>
        <title>{data.name}</title>
        <meta name={data.name} content={data.name} />
      </Head>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl text-center">{data.name}</h2>
        <AudioPlayer className="my-3" src={data.audio} />
      </div>
      <p
        lang="ar"
        className="font-quran p-2 bg-white-500 text-white text-3xl sm:text-4xl md:text-5xl text-center"
        style={{ direction: "rtl" }}
      >
        {data.ayahs.map((ayah, i) => (
          <Ayah key={i} ayah={ayah.text} number={ayah.numberInSurah} />
        ))}
      </p>
    </div>
  );
}

export default Surah;

export const getStaticPaths = async () => {
  const res = await axios.get("https://api.quran.com/api/v4/chapters");
  const { chapters } = res.data;
  const paths = chapters.map((chapter) => {
    return { params: { surah: chapter.id.toString() } };
  });
  return { paths, fallback: false };
};

export async function getStaticProps(context) {
  const { surah } = context.params;
  const data = await fetchSurah(`https://api.quran.com/api/v4/chapters/${surah}`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  // Fetch the audio URL from Quran.com API
  const audioRes = await axios.get(`https://api.quran.com/api/v4/chapter_recitations/1/${surah}`);
  const audioUrl = audioRes.data.audio_file.audio_url;

  data["audio"] = audioUrl;

  return {
    props: { data },
  };
}