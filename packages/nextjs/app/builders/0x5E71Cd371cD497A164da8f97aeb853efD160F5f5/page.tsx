import Image from "next/image";
import type { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-10 flex flex-col items-center">
      <header className="flex flex-col items-center justify-center w-full">
        <div className="relative flex flex-col items-center">
          <Image
            src="/ch0w-profile.jpg" // Add your profile picture in the public directory
            alt="aniketch0w profile pic"
            width={150}
            height={150}
            className="rounded-full object-cover border-4"
            style={{ borderColor: "#8246E5" }} // Update border color
          />
          <h1 className="text-4xl font-bold mt-4 text-center">Aniket Chaudhary</h1>
          <p className="text-xl text-gray-600 mt-2 text-center">Blockchain and Web3 Developer</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto mt-10 space-y-8">
        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "#8246E5" }}>
            Introduction
          </h2>
          <p>
            I am a final year B.Tech-IT student from India, passionate about building the future with blockchain and web
            development. I am particularly excited about creating decentralized applications (dApps) and exploring the
            cutting-edge technologies that drive innovation in this space.
          </p>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "#8246E5" }}>
            Education
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Bachelor of Technology in Information Technology</li>
            <li>Courses in Blockchain and Web3 Security (Cyfrin Updraft)</li>
            <li>Courses in Web3 Development (Coursera, Udemy and Youtube) </li>
          </ul>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "#8246E5" }}>
            Skills and Expertise
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>Smart Contracts Development (Solidity)</li>
            <li>TypeScript, JavaScript</li>
            <li>Decentralized Applications (DApps)</li>
          </ul>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "#8246E5" }}>
            Projects
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>SecureVote:</strong> A decentralized voting application with Aadhaar authentication, providing
              secure and transparent voting solutions.
            </li>
            <li>
              <strong>BUY-me-chai:</strong> A platform for donating cryptocurrency to content creators.
            </li>
            <li>
              <strong>DEX(SpeedRun Ethereum):</strong> A decentralized exchange for trading ERC20 tokens and ETH.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 shadow-md rounded-lg">
          <h2 className="text-3xl font-semibold mb-4" style={{ color: "#8246E5" }}>
            Contact Me
          </h2>
          <p>Feel free to reach out:</p>
          <ul>
            <li>
              Email:{" "}
              <a
                href="mailto:aniketchaudhary9838@gmail.com"
                className="hover:underline"
                style={{ color: "#8246E5" }} // Update link color
              >
                aniketchaudhary9838@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/aniket-chaudhary98/"
                className="hover:underline"
                style={{ color: "#8246E5" }} // Update link color
              >
                Aniket Chaudhary
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/GitAniket98"
                className="hover:underline"
                style={{ color: "#8246E5" }} // Update link color
              >
                GitAniket98
              </a>
            </li>
            <li>
              Twitter:{" "}
              <a
                href="https://x.com/eth_ch0w"
                className="hover:underline"
                style={{ color: "#8246E5" }} // Update link color
              >
                eth_ch0w
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Profile;
