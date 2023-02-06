// SPDX-License-Identifier: MIT OR Apache-2.0

pragma solidity ^0.8.0;


/// @author Matter Labs
contract ConstructorReentrantContract {
    constructor() {
        (bool s, bytes memory data) = address(this).call("");
        require(s, "call should succeed");
        require(data.length == 0, "data should be empty");
    }

    fallback() external payable {
        revert("fallback should not be called");
    }
}
