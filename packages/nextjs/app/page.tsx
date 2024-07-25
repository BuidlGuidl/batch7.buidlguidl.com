"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { IconContext } from "react-icons";
import { FaGithub, FaTwitter } from "react-icons/fa";

const Home: NextPage = () => {
  const imageUrls = ["/favicon.png"];

  const [images, setImages] = useState<{ src: string; x: number; y: number; id: number }[]>([]);
  const [lastImageTime, setLastImageTime] = useState(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastImageTime > 100) {
      const { clientX, clientY } = event;
      const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];
      setImages(prevImages => [...prevImages, { src: randomImage, x: clientX, y: clientY, id: Date.now() }]);
      setLastImageTime(now);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImages(prevImages => prevImages.filter(image => Date.now() - image.id < 2000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <IconContext.Provider value={{ className: "icon-class" }}>
      <div
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex flex-col items-center justify-center p-5"
        style={{
          background: "linear-gradient(to bottom, black, grey)",
          overflow: "hidden",
        }}
      >
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-4 text-white">Hello!</h1>
          <p className="text-xl text-white">Berk Şimşek</p>
        </header>
        <Image src="/berk.jpeg" alt="Berk Şimşek" width={200} height={270} className="rounded-full" />
        <div className="flex justify-center gap-6 mb-10">
          <Link href="https://x.com/BerkS1msek" passHref legacyBehavior>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <FaTwitter />
              Twitter
            </a>
          </Link>
          <Link href="https://github.com/SimsekBerk" passHref legacyBehavior>
            <a className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <FaGithub />
              GitHub
            </a>
          </Link>
          <Link
            href="https://drive.google.com/file/d/1ujXSimhCdqsJ9s1Ilcdfu_HDqE8zDiYX/view?usp=drive_link"
            passHref
            legacyBehavior
          >
            <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <span className="icon-class">📁</span>
              CV
            </a>
          </Link>
        </div>

        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-10 w-full max-w-4xl text-black">
          <h2 className="text-2xl font-bold mb-3">About me</h2>
          <p className="text-lg mb-5">
            I am a fourth-year Electronics and Communication student at Yildiz Technical University with a keen interest
            in software development. I have experienced the Blockchain technology with Web3 and Smart Contract
            development part (e.g. Solidity, Rust, Hardhat, Web3.js, JavaScript, TypeScript, NextJS etc...). I have
            participated in various projects (e.g. Aeroscraper, MLM Projects, Airdrop Projects, OrderBookDex, MoseikiApp
            etc...). In my spare time, I participate in hackathons and workshops at Blockchain events. My team and I
            achieved third place at Istanbul Blockchain Week Hackathon and we won 1st place in Pyth Network with our
            MarketMaker project at ETHCC Brussels Hackathon. In order to be more professional, always trying my best.
          </p>
        </div>

        {images.map(image => (
          <Image
            key={image.id}
            src={image.src}
            alt="Moving image"
            width={50}
            height={50}
            className="moving-image"
            style={{
              left: `${image.x}px`,
              top: `${image.y}px`,
              position: "absolute",
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              animation: "fadeOut 2s forwards",
            }}
          />
        ))}

        <style jsx>{`
          .moving-image {
            border-radius: 50%;
          }

          .icon-class {
            height: 24px;
            width: 24px;
            margin-right: 8px;
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(2);
            }
          }
        `}</style>
      </div>
    </IconContext.Provider>
  );
};

export default Home;
