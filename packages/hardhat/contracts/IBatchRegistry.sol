// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


interface IBatchRegistry {
    event CheckedIn(bool first, address builder, address checkInContract);
    
    function checkIn() external;
}
