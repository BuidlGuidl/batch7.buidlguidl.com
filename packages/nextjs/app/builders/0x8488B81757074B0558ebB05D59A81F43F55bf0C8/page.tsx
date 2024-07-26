import Image from "next/image";

const GunerivBuilderPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="flex justify-center items-center md:items-center flex-col">
        <div className="flex flex-col md:flex-row-reverse justify-center md:items-end w-full mb-5 md:mb-12">
          <div className="flex justify-center md:justify-end md:items-end w-full mb-5 md:mb-0">
            <Image
              src="/img_PP_guneriv.eth/V_BW_Low.jpg"
              alt="Github Icon"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:flex-grow md:w-full">
            <h1 className="text-xl font-bold mb-2 text-white w-full text-center md:text-left">Volkan Guneri</h1>
            <p className="text-sm text-blue-200 text-center md:text-left w-full mt-0">
              Fullstack Smart Contract Developer
            </p>
            <ul className="flex gap-3 md:text-left md:w-full">
              <li>
                <a className="pointer" href="https://volkanguneri.github.io/portfolio-front/" target="_blank">
                  <Image src="/img_PP_guneriv.eth/portfolio_78401.svg" alt="Github Icon" width={24} height={24} />
                </a>
              </li>
              <li>
                <a className="pointer" href="https://github.com/volkanguneri" target="_blank">
                  <Image src="/img_PP_guneriv.eth/icon-github.svg" alt="Github Icon" width={24} height={24} />
                </a>
              </li>
              <li>
                <a className="pointer" href="https://linkedin.com/in/volkan-guneri/" target="_blank">
                  <Image src="/img_PP_guneriv.eth/icon-linkedin.svg" alt="LinkedIn Icon" width={24} height={24} />
                </a>
              </li>
              <li>
                <a
                  className="pointer"
                  href="https://certificate.bcdiploma.com/check/683FB086A4448D6FFD30F94A4729035382A516D7D91884D7B6C97E0DB5B5B4FBTDRiUTJUZHhhY3hJd0Znc2R4OWNMY055Q2dLUmh4ZUswWW9HdFRrS0RzUDEyeVpT"
                  target="_blank"
                >
                  <Image
                    src="/img_PP_guneriv.eth/certificate.svg"
                    alt="Alyra Distinction Icon"
                    width={28}
                    height={28}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <p className="flex-grow text-blue-100 text-justify leading-relaxed max-w-[35em]">
            Hi! I&apos;m a full-stack smart contract developer actively seeking new open-source contributions,
            participating in hackathons, and exploring job opportunities within the captivating Web3 domain. I&apos;m
            enthusiastic about daily learning and growth in this dynamic sector. Don&apos;t hesitate to get in touch
            with me for any discussion regarding smart contract development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GunerivBuilderPage;
