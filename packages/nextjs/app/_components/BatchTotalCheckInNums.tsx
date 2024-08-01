"use client";

import { useEffect, useState } from "react";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const BatchTotalCheckInNums = () => {
  const [checkedInCount, setCheckedInCount] = useState<number | string>();

  const { data: result, isLoading: isContractLoading } = useScaffoldReadContract({
    contractName: "BatchRegistry",
    functionName: "checkedInCounter",
  });

  function displayLoadingIcon() {
    return (
      <span className="flex items-center justify-center">
        <span className="w-4 h-4 border-4 border-t-4 border-red-500 border-solid rounded-full animate-spin"></span>
      </span>
    );
  }

  useEffect(() => {
    // Update checkedInCount when the contract data has loaded
    if (!isContractLoading) {
      // Handle cases where result might be undefined or null
      const count = result ? Number(result.toString()) : "";
      // const count = Number(result?.toString());
      setCheckedInCount(count);
    }
  }, [result, isContractLoading]);

  return (
    <>{isContractLoading ? displayLoadingIcon() : <span className="text-red-500 font-bold">{checkedInCount}</span>}</>
  );
};
