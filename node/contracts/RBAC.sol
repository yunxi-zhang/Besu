// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";

contract RBAC is AccessControlUpgradeable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant USER_ROLE = keccak256("USER_ROLE");
    uint256 private _value;

    error CallerNotAdmin(address caller);

    event ValueChanged(address indexed setter, uint256 newValue);

    function initialize(address admin) public initializer {
        __AccessControl_init();
        _grantRole(ADMIN_ROLE, admin);
    }

    function grantUserRole(address user) public returns (bool) {
        return _grantRole(USER_ROLE, user);
    }

    function store(uint256 value) public onlyRole(ADMIN_ROLE) {
        _value = value;
        emit ValueChanged(msg.sender, value);
    }

    function retrieve() external view returns (uint256) {
        if (!hasRole(ADMIN_ROLE, msg.sender)) {
            revert CallerNotAdmin(msg.sender);
        }
        return _value;
    }

    function userRetrieve() external view returns (uint256) {
        if (!hasRole(USER_ROLE, msg.sender)) {
            revert CallerNotAdmin(msg.sender);
        }
        return _value;
    }
}
