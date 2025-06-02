"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [text, setText] = useState("");

  const createTree = () => {
    router.push(`/generate?handle=${text}`);
  };

  return (
    <main>
      <section className="bg-[#254f1a] min-h-[110vh] grid grid-cols-2">
        <div className="flex flex-col justify-center ml-[5vw] gap-2">
          <p className="text-[#d2e823] text-7xl font-extrabold">
            Everything you{" "}
          </p>
          <p className="text-[#d2e823] text-7xl font-extrabold">are. In one,</p>
          <p className="text-[#d2e823] text-7xl font-extrabold mb-4">
            simple link in bio.
          </p>

          <p className="text-[#ffffff] text-xl">
            Join 70M+ people using Linktree for their link in bio. One link to
            help you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </p>
          <div className="input flex gap-2 font-semibold mt-10">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text"
              placeholder="Enter your Handle"
              className="bg-[#ffffff] p-4 rounded-lg w-[40%] focus:outline-[#254f1a]"
            />
            <button
              onClick={() => createTree()}
              className="bg-[#e9c0e9] p-5 px-7 rounded-full cursor-pointer"
            >
              Claim your Linktree
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[5vw]">
          <Image src="/home.png" width={550} height={500} alt="Hero Image" />
        </div>
      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col items-center justify-center mt-10 ml-[5vw]">
          <Image src="/hero.png" width={550} height={500} alt="Home Image" />
        </div>
        <div className="flex flex-col justify-center mr-[5vw] gap-2">
          <p className="text-[#502274] text-6xl font-extrabold">
            Create and customize your Linktree in minutes
          </p>
          <p className="text-xl font-semibold mt-4">
            Connect your TikTok, Instagram, Twitter, website, store, videos,
            music, podcast, events and more. It all comes together in a link in
            bio landing page designed to convert.
          </p>
          <div>
            <button
              className="bg-[#502274] text-white p-5 px-18 font-bold rounded-full mt-10 cursor-pointer"
              onClick={() => createTree()}
            >
              Get started for free
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#780016] min-h-[100vh] grid grid-cols-2">
        <div className="flex flex-col justify-center mt-10 ml-[5vw] gap-2">
          <p className="text-[#e9c0e9] text-6xl/16 font-extrabold ">
            Share your Linktree from your Instagram, TikTok, Twitter and other
            bios
          </p>
          <p className="text-xl text-[#ffffff] font-semibold mt-4">
            Add your unique Linktree URL to all the platforms and places you
            find your audience. Then use your QR code to drive your offline
            traffic online.
          </p>
          <div>
            <button
              className="bg-[#e9c0e9] p-5 px-18 font-bold rounded-full mt-10 cursor-pointer"
              onClick={() => createTree()}
            >
              Get started for free
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mr-[5vw]">
          <Image src="/media.png" width={650} height={500} alt="Media Image" />
        </div>
      </section>
    </main>
  );
}
