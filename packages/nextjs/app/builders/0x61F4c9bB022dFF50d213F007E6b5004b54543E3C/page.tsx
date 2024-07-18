import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "QuadCore's Career Profile",
  description: "Learn about QuadCore's professional journey and achievements.",
});

const Profile: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 p-10">
      <header className="text-center py-5 relative">
        <img
          src="/nietzsche.jpeg"
          alt="QuadCore's Photo"
          className="absolute top-0 left-0 w-30 h-30 rounded-full object-cover m-4 border-4 border-gray-800"
        />
        <h1 className="text-5xl font-bold text-white">QuadCore's Career Profile</h1>
        <p className="text-xl text-gray-400 mt-2">Mid-Level Smart Contract Development</p>
      </header>

      <main className="max-w-4xl mx-auto mt-10 bg-gray-800 p-8 shadow-lg rounded-lg">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Introduction</h2>
          <p>
          I'm a fourth grade Electronical and Communication student at Yildiz Technical Universtiy. Curious about software development. Even i said to me Mid-Level Smart Contract Developer, i see myself a Multi-Chain Smart Contract Developer. I tried many various sectors of the software (e.g. In the Autonomous Department of Vehicles, OOP Backend Web development etc...). I have experienced the Blockchain technology with Web3 and the Full-Stack development part (e.g. Solidity, Rust, Hardhat, Web3.js, JavaScript, TypeScript, React, NextJS etc...). In order to be more professional, I always trying my best. Life long learner.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Skills and Expertise</h2>
          <p>
            My technical expertise spans a wide range of areas, including but not limited to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Smart Contracts Development (Ethereum, Solana, CosmWasm)</li>
            <li>TypeScript, JavaScript, C, C#, Python</li>
            <li>AI, Machine Learning(Autonomous Cars Lane Detection)</li>
            <li>Electronical and Communication Systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Contact Information</h2>
          <p>
            Feel free to reach out to me for collaboration, inquiries, or just to connect:
          </p>
          <p>Email: <a href="mailto:edizzum@gmail.com" className="text-blue-400">edizzum@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ediz-zum/" className="text-blue-400">Ediz Züm</a></p>
          <p>Email: <a href="https://github.com/edizzum" className="text-blue-400">edizzum</a></p>
        </section>
      </main>
    </div>
  );
};

export default Profile;