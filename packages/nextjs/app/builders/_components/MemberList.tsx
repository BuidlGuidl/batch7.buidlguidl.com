import { useEffect, useState } from "react";
import Link from "next/link";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

interface ValidPages {
  [key: string]: boolean;
}

export const MemberList = () => {
  const {
    data: events = [],
    isLoading: isLoadingEvents,
    error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 122221841n,
    watch: true,
  });

  const [validPages, setValidPages] = useState<ValidPages>({});

  useEffect(() => {
    const checkPages = async () => {
      const results: ValidPages = {};
      for (const event of events) {
        const builderAddress = event.args.builder;
        if (builderAddress) {
          const response = await fetch(`/builders/${builderAddress}`);
          results[builderAddress] = response.ok;
        }
      }
      setValidPages(results);
    };

    if (events.length > 0) {
      checkPages();
    }
  }, [events]);

  if (isLoadingEvents)
    return (
      <div className="flex justify-center items-center h-full">
        <p>Loading events...</p>
      </div>
    );
  if (errorReadingEvents)
    return (
      <div className="flex justify-center items-center h-full">
        <p>Error loading events: {errorReadingEvents.message}</p>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full text-left border-collapse">
        <thead>
          <tr className="bg-secondary">
            <th className="px-4 py-2 w-1/2 border-b-2">Builder</th>
            <th className="px-4 py-2 w-1/2 border-b-2">Builder Page</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => {
            const builderAddress = event.args.builder;
            if (!builderAddress) return null; // skip if no builder address
            const isPageValid = validPages[builderAddress];

            return (
              <tr
                key={builderAddress}
                className="hover:bg-secondary hover:shadow-md focus:bg-secondary active:text-neutral"
              >
                <td className="border-t border-gray-300 px-4 py-2">
                  <Address address={builderAddress} disableAddressLink={true} />
                </td>
                <td className="border-t border-gray-300 px-4 py-2">
                  {isPageValid ? (
                    <Link href={`/builders/${builderAddress}`} legacyBehavior>
                      <a className="text-blue-500 hover:underline">View Page</a>
                    </Link>
                  ) : (
                    <span className="text-red-500">Page not created yet 😓</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
