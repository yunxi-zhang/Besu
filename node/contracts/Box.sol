// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Box is OwnableUpgradeable {
    uint256 private _value;

    event ValueChanged(address indexed setter, uint256 newValue);

    function initialize(address initialOwner) initializer public{
        __Ownable_init(initialOwner);
    }

    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(msg.sender, value);
    }

    function retrieve() external view onlyOwner returns(uint256) {
        return _value;
    }
}
