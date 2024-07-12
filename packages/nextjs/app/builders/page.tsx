import { MemberList } from "./_components/MemberList";
import { SparklesIcon } from "@heroicons/react/24/outline";

const BuildersPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5 text-center">
          <h1>
            <span className="block text-2xl mb-2">Ladies and Gentlemen,</span>
            <div className="flex justify-center items-center mb-4">
              <SparklesIcon className="h-10 w-10 text-yellow-500" />
              <span className="block text-4xl font-bold mx-2">Presenting the Amazing Builders of Batch 7!</span>
              <SparklesIcon className="h-10 w-10 text-yellow-500" />
            </div>
          </h1>
          <p className="text-lg mt-2">
            These are the brilliant minds ready to revolutionize the blockchain world. Let&apos;s give them a big round
            of applause!
          </p>
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12">
          <MemberList />
        </div>
      </div>
    </>
  );
};

export default BuildersPage;
