"use client";

import { useEffect } from "react";
import Image from "next/image";

const IvanBuilderPage = () => {
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="bg-base-100 dark:bg-gray-800 min-h-screen flex flex-col items-center space-y-8 py-8 px-4 sm:px-8">
      <div className="max-w-3xl w-full bg-base-100 dark:bg-gray-900 rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between">
          <div className="personal-info">
            <h1 className="text-3xl font-bold text-base-content dark:text-white">Ivan Ursulovic</h1>
            <p className="text-base-content/60 dark:text-gray-300">Backend C# Developer &amp; Blockchain Enthusiast</p>
            <p className="text-base-content/60 dark:text-gray-300">Location: Belgrade, Serbia</p>
            <p className="text-base-content/60 dark:text-gray-300">
              Education: Computer engineering, School of computing
            </p>
          </div>
          <div className="profile-img">
            <Image
              src="/avatar-photo.jpeg"
              alt="Ivan Ursulović"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-base-100 dark:bg-gray-900 rounded-lg shadow-md p-8">
        <div className="bio">
          <h2 className="text-2xl font-semibold mb-4 text-base-content dark:text-white">Bio</h2>
          <p className="text-base-content/70 dark:text-gray-300">
            Hello! I&apos;m Ivan Ursulovic, a backend C# developer with a great interest in blockchain technology. My
            journey into web3 began with the book &#34;Mastering Bitcoin&#34; and I have since attended several web3
            events, including ETH Belgrade. I have decent theoretical knowledge about blockchain, but now I am looking
            to advance my development skills and meet people in this field.
          </p>
        </div>
      </div>

      <div className="max-w-3xl w-full bg-base-100 dark:bg-gray-900 rounded-lg shadow-md p-8">
        <div className="contact">
          <h2 className="text-2xl font-semibold mb-4 text-base-content dark:text-white">Contact Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ivanursulovic"
              target="_blank"
              className="text-primary dark:text-blue-400 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://t.me/ivanursulovic"
              target="_blank"
              className="text-primary dark:text-blue-400 hover:underline"
            >
              Telegram
            </a>
            <a
              href="https://github.com/ursulovic"
              target="_blank"
              className="text-primary dark:text-blue-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvanBuilderPage;
