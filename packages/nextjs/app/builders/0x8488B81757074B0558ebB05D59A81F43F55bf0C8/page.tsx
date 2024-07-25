"use client";

const GunerivBuilderPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-1">
      <div className="flex justify-center items-center md:items-start flex-col">
        <div className="flex flex-col justify-center items-center mb-10">
          <h1 className="text-xl font-bold mb-2 text-white w-full text-center md:text-start">Volkan Guneri</h1>
          <p className="text-sm mt-1 text-blue-200 w-full">Fullstack Smart Contract Developer</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <p className="flex-grow text-blue-100 text-justify leading-relaxed max-w-[35em]">
            Hi! I&apos;m a full-stack smart contract developer actively seeking new open-source contributions,
            participating in hackathons, and exploring job opportunities within the captivating Web3 domain. I&apos;m
            enthusiastic about daily learning and growth in this dynamic sector. Don&apos;t hesitate to get in touch
            with me for any discussion regarding smart contract development.
          </p>
          <ul className="flex flex-row md:flex-col gap-3">
            <li>
              <a className="underline pointer" href="https://twitter.com/Volkan_Guneri_/" target="_blank">
                Portfolio
              </a>
            </li>
            <li>
              <a className="underline pointer" href="https://github.com/volkanguneri" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a className="underline pointer" href="https://linkedin.com/in/volkan-guneri/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="underline pointer"
                href="https://certificate.bcdiploma.com/check/683FB086A4448D6FFD30F94A4729035382A516D7D91884D7B6C97E0DB5B5B4FBTDRiUTJUZHhhY3hJd0Znc2R4OWNMY055Q2dLUmh4ZUswWW9HdFRrS0RzUDEyeVpT"
                target="_blank"
              >
                Certificate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GunerivBuilderPage;
