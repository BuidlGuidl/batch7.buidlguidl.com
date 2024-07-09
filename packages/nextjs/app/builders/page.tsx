"use client";

import Link from "next/link";
import { getAddress } from "viem";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";

/**
 * Add your builder address and alias here.
 * @notice Must be a valid Ethereum address
 */

const builders = [{ address: "0x726F186C449c58B07EfD0d1490B79F80843C2dB7" }];

/**
 * TODO:
 * - Fetch all list of builders from contract
 * - Fetch builders page dynamically from the /builder folder if it exists
 *
 * Related issue: #issue-3
 * More info at:
 * [Issue #3](https://github.com/BuidlGuidl/batch7.buidlguidl.com/issues/3)
 */

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
          <table className="table-auto w-full text-left border-separate" style={{ borderSpacing: "0 10px" }}>
            <thead>
              <tr>
                <th className="px-4 py-2 w-1/3">Builder</th>
                <th className="px-4 py-2 w-1/3">Builder Page</th>
              </tr>
            </thead>
            <tbody>
              {builders.map(builder => {
                const checkSumAddress = getAddress(builder.address);
                return (
                  <tr key={builder.address} className="bg-base-100 rounded-3xl">
                    <td className="border px-4 py-2 w-1/3">
                      <Address address={checkSumAddress} disableAddressLink={true} />
                    </td>
                    <td className="border px-4 py-2 rounded-r-3xl w-1/3">
                      <Link href={`/builders/${builder.address}`} legacyBehavior>
                        <a className="link">View Page</a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BuildersPage;
