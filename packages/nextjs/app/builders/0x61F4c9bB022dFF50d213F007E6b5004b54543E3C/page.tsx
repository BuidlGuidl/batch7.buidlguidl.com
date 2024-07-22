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
        <h1 className="text-5xl font-bold text-white">QuadCore&apos;s Career Profile</h1>
        <p className="text-xl text-gray-400 mt-2">Mid-Level Smart Contract Developer</p>
      </header>

      <main className="max-w-4xl mx-auto mt-10 bg-gray-800 p-8 shadow-lg rounded-lg">
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Introduction</h2>
          <p>
            I&apos;m a fourth grade Electronical and Communication student at Yildiz Technical Universtiy. Curious about
            software development. I tried many various sectors of the software (e.g. In the Autonomous Department of
            Vehicles, OOP Backend Web development etc...). I have experienced the Blockchain technology with Web3 and
            the Full-Stack development part (e.g. Solidity, Rust, Hardhat, Web3.js, JavaScript, TypeScript, React,
            NextJS etc...), not only in Ethereum, also Cosmos, Solana and Bitcoin. Even though, my title is Mid-Level
            Smart Contract Developer, i see myself as a Multi-Chain Developer.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Skills and Expertise</h2>
          <p>My technical expertise spans a wide range of areas, including but not limited to:</p>
          <ul className="list-disc list-inside ml-4">
            <li>Smart Contracts Development (Ethereum, Solana, CosmWasm)</li>
            <li>TypeScript, JavaScript, C, C#, Python</li>
            <li>AI, Machine Learning(Autonomous Cars Lane Detection)</li>
            <li>Electronical and Communication Systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Projects That I Have Worked On</h2>
          <p>This is the place where Multi-Chain part comes:</p>
          <ul className="list-disc list-inside ml-4">
            <li>
              MarketMaker: MarketMaker is a platform that unites content creators and community managers with project
              owners on a single platform, allowing projects to make marketing and content creators or community
              managers to earn money. This is the project that we have won first place of Pyth Networks one of tracks
              and a Pool Prize of WorldCoin at EthgLobal Brussels
            </li>
            <p></p>
            <li>
              MoseikiAPP: On MoseikiApp, a social media platform, I have prepared a structure where users can
              dynamically turn their tweets, videos or photos into NFTs and display them or sell them in the NFT
              Marketplace I have created. Also users can create their accounts with e-mail which is also built by me
              with Account Abstraction structure.
            </li>
            <p></p>
            <li>
              HotNCold: I wrote a Smart Contract which is a basic OrderBook Dex. An owner structure that receives a fee
              from each completed order.
            </li>
            <p></p>
            <li>
              Unfettered Souls: I took snapshots for airdrops and created a merkle tree for this snapshot. I wrote a
              smart contract with this Merkle Tree structure where users can claim their airdrops.
            </li>
            <p></p>
            <li>
              Fortis: As I became a junior, I started to get more involved in projects. Most of the time, I was the
              project team leader, managing the team, attending detailed meetings about what to do in the projects, and
              completing the projects by creating a fast and solid contract structure. I specialize in newer concepts
              such as ERC-4337, ERC-404. I am currently working on developing myself in detail on new concepts and more
              technologically powerful and complex structures such as ToM, with the small working groups I have formed
              with the connections I have gained from events.
            </li>
            <p></p>
            <li>
              Aeroscraper: I worked on a platform that allows 0-value users to borrow USD by providing collateral. Here,
              we have created a comprehensive architecture such as liquidating Troves, calculating ratios, and
              integrating fee purchases. I was intensively involved in both writing smart contracts with CosmWasm in
              Rust on the Cosmos side and writing smart contracts on the EVM side. I was acting as a bridge between
              Cosmos and EVM to keep the structures the same.
            </li>
            <p></p>
            <li>
              MLM: We worked on NFT owners recruiting new users through referrals and creating a chain in this way. I
              worked on Merkle Tree structure and NFT Tiers
            </li>
            <p></p>
            <li>
              DATS Project: I integrated the Account Abstraction structure in DATS Project, a DePIN project, and created
              a structure that will allow users to integrate more easily into the Web3 side.
            </li>
            <p></p>
            <li>
              DosAVAX: This is a basic Meme Coin project. I also did took snapshot for the airdrop and used Merkle Tree
              structure for distribution.
            </li>
            <p></p>
            <li>
              BAMint: On the Bitcoin side, i worked on a platform where brc20 and arc20 token standards can be
              taprooted. Users will be able to come and generate custom tokens themselves. I developed on brc20 and
              especially AtomicalsJS.
            </li>
            <p></p>
            <li>
              TamsData: A project about the use of blockchain in order to prevent goods counterfeiting and ensure
              traceability in the supply chain, which we carry out together with Ege University Technopark. Here I
              focused on Account abstraction and Zero-Knowledge technologies and wrote a smart contract for the storage
              and traceability of information in the supply chain on the blockchain.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-white">Contact Information</h2>
          <p>Feel free to reach out to me for collaboration, inquiries, or just to connect:</p>
          <p>
            Email:{" "}
            <a href="mailto:edizzum@gmail.com" className="text-blue-400">
              edizzum@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/ediz-zum/" className="text-blue-400">
              Ediz Züm
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="https://github.com/edizzum" className="text-blue-400">
              edizzum
            </a>
          </p>
        </section>
      </main>
    </div>
  );
};

export default Profile;
