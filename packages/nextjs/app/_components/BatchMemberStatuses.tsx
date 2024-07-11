"use client";

import { useEffect, useState } from "react";
import { Address } from "viem";
import { useAccount } from "wagmi";
import { CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useScaffoldEventHistory, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { ZERO_ADDRESS } from "~~/utils/scaffold-eth/common";

const SkeletonLoader = () => (
  <div className="flex gap-2 animate-pulse">
    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
    <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
  </div>
);

export const BatchMemberStatuses = () => {
  const { address: connectedAddress, status } = useAccount();

  const [isCheckedIn, setIsCheckedIn] = useState(false);

  const { data: checkIns, isLoading: isCheckInsInfoLoading } = useScaffoldEventHistory({
    contractName: "BatchRegistry",
    eventName: "CheckedIn",
    fromBlock: 122221841n,
  });

  const { data: isInAllowList, isLoading: isInAllowListLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "allowList",
    args: [(connectedAddress?.toLowerCase() as Address) ?? ZERO_ADDRESS],
  });

  useEffect(() => {
    if (checkIns?.length && connectedAddress) {
      setIsCheckedIn(checkIns.some(checkIn => checkIn.args.builder?.toLowerCase() === connectedAddress.toLowerCase()));
    }
  }, [checkIns, connectedAddress]);

  if (status === "connecting" || status === "reconnecting" || isCheckInsInfoLoading || isInAllowListLoading) {
    return <SkeletonLoader />;
  }

  if (!connectedAddress || status !== "connected") {
    return null;
  }

  return (
    <div className="flex gap-2">
      <div
        className="tooltip tooltip-secondary tooltip-bottom"
        data-tip={isCheckedIn ? "You are checked-in." : "You are not checked-in."}
      >
        <CheckCircleIcon className={`${isCheckedIn ? "text-green-400" : "text-gray-400"} h-6 w-6`}></CheckCircleIcon>
      </div>
      <div
        className="tooltip tooltip-secondary tooltip-bottom"
        data-tip={isInAllowList ? "You are in the allow list." : "You are not in the allow list."}
      >
        <UserGroupIcon className={`${isInAllowList ? "text-green-400" : "text-gray-400"} h-6 w-6`}></UserGroupIcon>
      </div>
    </div>
  );
};
