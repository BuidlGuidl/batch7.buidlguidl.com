import { NextPage } from "next";

const PersonalPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white p-8">
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Oz</h1>
          <p className="text-l">Not the wizard, but I&apos;m trying to show my magic through coding.</p>
        </header>

        <section className="bg-white bg-opacity-5 backdrop-blur-lg rounded-lg p-6 mb-8 border border-blue-400 border-opacity-20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">About Me</h2>
          <div className="text-lg text-blue-100">
            <p className="mt-1">
              Hi there, my name is Oguz, but you can call me Oz or whatever you think sounds similar to Oguz.
            </p>
            <p className="mt-1">
              I&apos;m from <strong>Izmir, Turkiye</strong>, but I&apos;ve lived in different countries and multiple
              cities within Turkey.
            </p>
            <p className="mt-1">
              I&apos;ve been working as a full-stack web developer since 2020. <strong>Web3</strong> caught my attention
              with the help of a friend, and now I am trying my best to be a part of this decentralized world.
            </p>
          </div>
        </section>

        <section className="bg-white bg-opacity-5 backdrop-blur-lg rounded-lg p-6 border border-blue-400 border-opacity-20">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">Socials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-blue-800 bg-opacity-30 rounded-lg p-4 border border-blue-400 border-opacity-40">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">GitHub</h3>
              <p className="flex items-center">
                You can checkout my humble
                <a
                  href="https://github.com/oguzsabi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 bg-transparent border border-blue-400 text-blue-200 px-3 py-1 rounded-full text-sm hover:bg-blue-800 hover:bg-opacity-50 transition-colors"
                >
                  GitHub
                </a>
              </p>
            </div>
            <div className="bg-blue-800 bg-opacity-30 rounded-lg p-4 border border-blue-400 border-opacity-40">
              <h3 className="text-xl font-semibold mb-2 text-blue-200">Twitter</h3>
              <p className="flex items-center">
                You can visit my crystal clear
                <a
                  href="https://twitter.com/osabitay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 bg-transparent border border-blue-400 text-blue-200 px-3 py-1 rounded-full text-sm hover:bg-blue-800 hover:bg-opacity-50 transition-colors"
                >
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PersonalPage;
