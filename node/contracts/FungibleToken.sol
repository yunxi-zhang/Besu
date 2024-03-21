// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract FungibleToken is ERC20Upgradeable, AccessControlUpgradeable {
    function initialize(
        address account,
        string memory name,
        string memory symbol,
        uint256 value
    ) public initializer {
        __ERC20_init(name, symbol);
        __AccessControl_init();
        _mint(account, value);
        _grantRole(DEFAULT_ADMIN_ROLE, account);
    }

    error ValueExcceedsMaximum();

    function balanceOf(
        address account
    ) public view virtual override returns (uint256) {
        return super.balanceOf(account);
    }

    function decimals() public view virtual override returns (uint8) {
        return 2;
    }

    function mint(
        address account,
        uint256 value
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        if (value > 10000) revert ValueExcceedsMaximum();
        super._mint(account, value);
    }

    function burn(
        address account,
        uint256 value
    ) public onlyRole(DEFAULT_ADMIN_ROLE) {
        super._burn(account, value);
    }
}
