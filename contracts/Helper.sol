// SPDX-License-Identifier: MIT OR Apache-2.0

pragma solidity ^0.8.0;

interface IL2Messanger {
    function sendToL1(bytes memory _message) external returns (bytes32);
}

uint160 constant SYSTEM_CONTRACTS_OFFSET = 0x8000; // 2^15
IL2Messanger constant L2_MESSANGER = IL2Messanger(address(SYSTEM_CONTRACTS_OFFSET + 0x07));

library Helper {
    function sendMessageToL1(bytes memory _message) internal returns (bytes32) {
        // return L2_MESSANGER.sendToL1(_message);
    }

}
