"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const Home: NextPage = () => {
  return (
    <>
      <Link href="/builders" passHref>
        <div className="flex items-center text-blue-500 hover:text-blue-700">
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Builders
        </div>
      </Link>
      <div className="flex flex-col items-center flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Hello, I am</span>
            <span className="block text-4xl font-bold">Fels21</span>
          </h1>
          <p className="text-center text-lg">
            Web2 developer trying to break into Web3. As you can see, design isn&apos;t my strong suit, but I&apos;m
            giving it my best shot!
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 flex justify-center items-center">
          <div className="flex justify-center items-start gap-12 flex-col sm:flex-row max-w-5xl w-full">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-start rounded-3xl sm:w-3/4 h-full">
              <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
              <p>
                My real name is <span className="font-bold">Ivan</span>, aka <span className="font-bold">Fels21</span>.
                Currently, I work as a programmer at a digital marketing company.
              </p>
              <p>
                I&apos;m passionate about everything Web3, especially Solidity and smart contracts. I would love to
                dedicate myself to this world.
              </p>
              <p>
                I grew up in Spain and now live in <span className="font-bold">Barcelona</span>, although I was born in
                Russia.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold">Languages I speak:</h3>
                <ul className="list-disc ml-5">
                  <li>Spanish</li>
                  <li>Catalan</li>
                  <li>Russian</li>
                  <li>English (trying my best!)</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col sm:w-1/4 h-full">
              <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center rounded-3xl">
                <h2 className="text-xl font-semibold mb-4">Let&apos;s Get in Touch</h2>
                <ul className="list-none space-y-2">
                  <li>
                    <Link href="https://x.com/I_Cherny" className="link">
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/fels21" className="link">
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col bg-base-100 px-10 py-10 text-left items-start rounded-3xl mt-8">
                <h2 className="text-xl font-semibold mb-4">Technologies I Pretend to Know</h2>
                <ul className="list-disc ml-5">
                  <li>ChatGPT</li>
                  <li>Stack Overflow</li>
                  <li>Google</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-start px-5 mb-4">
        <Link href="/builders" passHref>
          <div className="flex items-center text-blue-500 hover:text-blue-700">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Builders
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
