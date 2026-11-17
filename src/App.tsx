"use client";
import { useState } from "react";

// ✏️ EDIT YOUR LETTER HERE
const LETTER_TO = "To my future wife,";
const LETTER_BODY: string[] = [
  "First of all, I want to say Im sorry. I really do love you so much, and I get protective because you are mine. I know we have both made mistakes, but I believe going through these moments will only make our relationship stronger. Its through these mistakes that we learn to understand each other better. InsyaAllah, Allah will ease our marriage and bless us with a healthy, happy family.",
  "Please forgive me, my love. Im always trying to improve myself to make you happy, and I hope we can keep growing together. We only have one more month until our nikah, so lets try our best to leave all the bad things behind and focus on building our own family. Trust me, Allah will test us with many things, but lets go through it all together, InsyaAllah.",
  "I tak berniat nak kongkong you sampai you tak boleh buat apa-apa. I just dah faham yang once I dah ada isteri, tanggungjawab i is untuk pimpin you dari segi semua benda, and you sendiri faham. I tak paksa you pakai tudung terus, we can start slowly with the way you dress first, and InsyaAllah you will slowly adapt dengan benda ni. I doa you will be isteri yang solehah dan ibu yang baik. This is life, love. Dah kahwin nanti, our life will change. Hidup bersama, bukan sorang-sorang lagi. I always have to think about you, and you always have to think about me. I'm going to put you first, and you're going to put me first, above everything else, even our closest friends.",
  "Love, I always love you so much. I hope you are happy to accept me as your future husband, the one who is going to take care of you, not only financially, but also religiously. The one who is going to guide you to be good, the one who is going to protect you, and most importantly, the one who is going to love you from the bottom of his heart.",
  "I yakin that you will be a good wife. Dont fall for anything you see on social media or let others influence you. Just focus on us and lets build our own family. Right now, Im doing my best building my career so that one day, you wont have to work anymore, hihi. I want to be a 100% provider, of course. As for now, please be patient, my love. Good things will come. There are no instant or fast results, but I believe one day we will be successful, and you will be right beside me, supporting me no matter what, just like you have been there for me at my lowest.",
  "Sayang, I love you so much. Please forgive me. Another one month to go, so lets get ready. Im always grateful to be with you. Thank you for everything, and lets move on to our next journey together.",
];
const LETTER_FROM = "Forever yours,";
const LETTER_NAME = "Raziq";

type Stage = "ask" | "sure" | "yay" | "letter";

const noPhrases = [
  "No",
  "Are you sure?",
  "What if I asked really nicely?",
  "Pretty please",
  "With a chocolate on top",
  "PLEASE SAYANG",
  "But :*(",
  "I am going to die",
  "Yep im dead",
  "please babe",
  ":((((",
  "PRETTY PLEASE",
  "No :(",
];

// size of the word "sure" for each of the 3 rounds
const sureSizes = [
  "min(14vw, 4rem)",
  "min(20vw, 7rem)",
  "min(26vw, 10rem)",
];

export default function Page() {
  const [stage, setStage] = useState<Stage>("ask");
  const [sureRound, setSureRound] = useState(0);
  const [noCount, setNoCount] = useState(0);

  const noText = noPhrases[Math.min(noCount, noPhrases.length - 1)];
  const yesButtonSize = Math.min(noCount * 12 + 16, 80);

  const NoButton = (
    <button
      onClick={() => setNoCount(noCount + 1)}
      className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
    >
      {noText}
    </button>
  );

  if (stage === "letter") return <Letter />;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      {stage === "ask" && (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will u be my wife?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => {
                setNoCount(0);
                setStage("sure");
              }}
            >
              Yes
            </button>
            {NoButton}
          </div>
        </>
      )}

      {stage === "sure" && (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 leading-tight">
            <span className="text-4xl">Are u </span>
            <span
              className="font-extrabold text-pink-600"
              style={{ fontSize: sureSizes[sureRound] }}
            >
              sureee
            </span>
            <span className="text-4xl">?</span>
          </h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 text-xl font-bold text-white hover:bg-green-700"
              onClick={() => {
                if (sureRound < 2) {
                  setSureRound(sureRound + 1);
                  setNoCount(0);
                } else {
                  setStage("yay");
                }
              }}
            >
              Yes
            </button>
            {NoButton}
          </div>
        </>
      )}

      {stage === "yay" && (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            YEAYYYYY 🎉 i love u so muchieeeee 💕 love sayangggg 😘
          </div>
          <button
            onClick={() => setStage("letter")}
            className="mt-2 rounded-full bg-pink-500 px-6 py-3 text-xl font-bold text-white shadow-lg hover:bg-pink-600"
          >
            💌 Click here to read the letter
          </button>
        </>
      )}
    </div>
  );
}

function Letter() {
  return (
    <div
      className="flex min-h-screen items-center justify-center px-3 py-10"
      style={{
        background:
          "radial-gradient(circle at 50% 30%, #fde4e8 0%, #f6b8c4 60%, #e58fa3 100%)",
      }}
    >
      <div className="relative w-full max-w-xl">
        {/* wax seal */}
        <div
          className="absolute -top-7 left-1/2 z-10 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full text-2xl text-red-100 shadow-lg"
          style={{
            background: "radial-gradient(circle at 35% 30%, #d6283d, #8b0d1f)",
            border: "2px solid #7a0a1a",
          }}
        >
          ❤
        </div>

        {/* paper */}
        <div
          className="relative rounded-sm px-7 pb-10 pt-14 shadow-2xl sm:px-12"
          style={{
            backgroundColor: "#fffaf0",
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0, transparent 35px, rgba(190,150,150,0.28) 35px, rgba(190,150,150,0.28) 36px)",
            border: "10px solid transparent",
            borderImage:
              "repeating-linear-gradient(45deg, #e11d48 0 14px, #fffaf0 14px 22px, #3b82f6 22px 36px, #fffaf0 36px 44px) 10",
            fontFamily: "'Dancing Script', 'Great Vibes', cursive",
            color: "#4a2230",
            boxShadow: "0 20px 50px rgba(120,20,50,0.35)",
          }}
        >
          <div
            className="absolute bottom-0 left-8 top-0 hidden w-px sm:block"
            style={{ background: "rgba(225,29,72,0.25)" }}
          />
          <p className="mb-4 text-right text-sm opacity-70" style={{ fontFamily: "serif" }}>
            ♥ ♥ ♥
          </p>
          <p className="mb-6 text-3xl font-bold" style={{ lineHeight: "36px" }}>
            {LETTER_TO}
          </p>
          {LETTER_BODY.map((p, i) => (
            <p
              key={i}
              className="mb-6 whitespace-pre-line text-xl sm:text-2xl"
              style={{ lineHeight: "36px" }}
            >
              {p}
            </p>
          ))}
          <p className="mt-8 text-2xl" style={{ lineHeight: "36px" }}>
            {LETTER_FROM}
          </p>
          <p className="text-4xl font-bold text-rose-700" style={{ lineHeight: "48px" }}>
            {LETTER_NAME} ❤
          </p>
        </div>
      </div>
    </div>
  );
}
