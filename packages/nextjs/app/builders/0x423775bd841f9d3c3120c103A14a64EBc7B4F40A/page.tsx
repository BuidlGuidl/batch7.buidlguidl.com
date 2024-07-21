import Image from "next/image";
import { NextPage } from "next";
import { ChatBubbleLeftRightIcon, CodeBracketIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";

const SocialButton: React.FC<{ title: string; href: string; children: React.ReactNode }> = ({
  title,
  href,
  children,
}) => {
  return (
    <a href={href} className="btn btn-primary w-24 xs:w-32 sm:w-36">
      {children}
      {title}
    </a>
  );
};

const EvilPage: NextPage = () => {
  return (
    <div className="flex flex-col flex-grow justify-center items-center pt-4">
      <Image
        className="mask mask-squircle"
        width={200}
        height={200}
        src="/3vil7win-avatar.webp"
        alt="An alien with a katana, a bitcoin monogram jacket, and a t-shirt that reads 'Believe in Yourself.'"
      />
      <div className="hero bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl font-bold">Hey Fren</h1>
            <p className="py-1">
              I&apos;m 3vil7win (ET for short), a creative developer primarily interested in Three.js/WebGL and
              EVM/Solidity.
            </p>
            <p className="py-1">
              My programming journey began with Lego Dacta and a TI-83 calculator, and I&apos;ve followed web3 off and
              on since the Mt.Gox and BTC-e trollbox days.
            </p>
            <p className="py-1">
              I&apos;m excited to join BuidlGuidl to work on my chops, meet other builders, and make some cool OSS.
            </p>
            <div className="flex justify-center gap-3 pt-3">
              <SocialButton title="Github" href="https://github.com/3vil7win">
                <CodeBracketIcon className="size-6 hidden sm:block" />
              </SocialButton>
              <SocialButton title="Twitter" href="https://twitter.com/0x3vil7win">
                <ChatBubbleLeftRightIcon className="size-6 hidden sm:block" />
              </SocialButton>
              <SocialButton title="Telegram" href="https://telegram.me/x_3vil_7win_x">
                <PaperAirplaneIcon className="size-6 hidden sm:block" />
              </SocialButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvilPage;
