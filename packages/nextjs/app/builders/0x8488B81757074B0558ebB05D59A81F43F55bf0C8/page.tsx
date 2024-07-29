import Image from "next/image";

const GunerivBuilderPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen p-2">
      <div className="flex justify-center items-center md:items-center flex-col">
        <div className="flex flex-col md:flex-row-reverse justify-center md:items-end w-full mb-5 md:mb-12">
          <div className="flex justify-center md:justify-end md:items-end w-full mb-5 md:mb-0">
            <Image
              src="/img_PP_guneriv.eth/V_BW_Low.jpg"
              alt="Volkan Guneri"
              width={120}
              height={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-center items-center md:flex-grow md:w-full">
            <h1 className="text-xl font-bold mb-2 dark:text-white w-full text-center md:text-left">Volkan Guneri</h1>
            <p className="text-sm dark:text-blue-200 text-center md:text-left w-full mt-0">
              Fullstack Smart Contract Developer
            </p>
            <ul className="flex gap-3 md:text-left md:w-full">
              <li>
                <a className="pointer" href="https://volkanguneri.github.io/portfolio-front/" target="_blank">
                  <Image src="/img_PP_guneriv.eth/portfolio_78401.svg" alt="Portfolio Icon" width={24} height={24} />
                </a>
              </li>
              <li>
                <a className="pointer" href="https://github.com/volkanguneri" target="_blank">
                  <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                    <path
                      fill-rule="evenodd"
                      d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a className="pointer" href="https://linkedin.com/in/volkan-guneri/" target="_blank">
                  <svg className="fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                    <path
                      fill-rule="evenodd"
                      d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  className="pointer"
                  href="https://certificate.bcdiploma.com/check/683FB086A4448D6FFD30F94A4729035382A516D7D91884D7B6C97E0DB5B5B4FBTDRiUTJUZHhhY3hJd0Znc2R4OWNMY055Q2dLUmh4ZUswWW9HdFRrS0RzUDEyeVpT"
                  target="_blank"
                >
                  <Image src="/img_PP_guneriv.eth/certificate.svg" alt="Certificate Icon" width={28} height={28} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="flex-grow dark:text-blue-100 text-justify leading-relaxed max-w-[35em]">
            Hi! I&apos;m a <strong>full-stack smart contract developer</strong> actively seeking new{" "}
            <strong>open-source</strong> contributions, participating in <strong>hackathons</strong>, and exploring{" "}
            <strong>job opportunities</strong> within the captivating Web3 domain.
            <br />
            <br />
            I&apos;m enthusiastic about <strong>daily learning</strong> and <strong>growth</strong> in this dynamic
            sector. Don&apos;t hesitate to get in touch with me for any discussion regarding{" "}
            <strong>smart contract development</strong>.<br />
            <br />
            Here are some areas I&apos;m particularly interested in: <br />
            <br />
          </p>
          <ul className="flex justify-center items-center flex-wrap gap-4 md:gap-12">
            <li>
              <strong>Chainlink</strong>
            </li>
            <li>
              <strong>RWA</strong>
            </li>
            <li>
              <strong>Innovative NFT</strong>
            </li>
            <li>
              <strong>Smart Contract Security</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GunerivBuilderPage;
