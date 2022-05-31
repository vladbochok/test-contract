// SPDX-License-Identifier: MIT OR Apache-2.0

pragma solidity ^0.8.0;


interface ITest {
    event ContractCreated(address indexed contractAddress, address indexed creatorAddress);

    event ERC20Deployed(address indexed tokenAddress, string name, string symbol, uint8 decimals, uint256 indexed id);

    event HeapUpdated(bytes indexed data, uint256);

    struct SignatureTestData {
        bytes32 hash;
        bytes signature;
        address addr;
    }
}
