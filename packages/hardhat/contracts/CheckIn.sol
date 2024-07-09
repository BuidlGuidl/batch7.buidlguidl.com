// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IBatchRegistry.sol";
import "./Ownable.sol";

contract CheckIn is Ownable, IBatchRegistry {
    IBatchRegistry batchRegistry;

    constructor(address _batchRegistry) {
        batchRegistry = IBatchRegistry(_batchRegistry);
    }

    function checkIn() public virtual override onlyOwner {
        batchRegistry.checkIn();
        emit CheckedIn(true, msg.sender, address(this));
    }
}