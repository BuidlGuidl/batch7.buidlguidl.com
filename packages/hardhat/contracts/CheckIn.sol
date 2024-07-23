// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IBatchRegistry.sol";

contract CheckIn is  IBatchRegistry {
    address public batchRegistry;

    constructor(address _batchRegistry) {
        batchRegistry = _batchRegistry;
    }

    function checkIn() public  {

        IBatchRegistry(batchRegistry).checkIn();
        
    }
}