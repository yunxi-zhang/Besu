// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract FungibleToken is ERC20Upgradeable, AccessControlUpgradeable {
    function initialize(
        string memory name,
        string memory symbol,
        address account,
        uint256 value
    ) public initializer {
        __ERC20_init(name, symbol);
        __AccessControl_init();
        _mint(account, value);
        _grantRole(DEFAULT_ADMIN_ROLE, account);
    }

    function balanceOf(
        address account
    )
        public
        view
        virtual
        override
        onlyRole(DEFAULT_ADMIN_ROLE)
        returns (uint256)
    {
        return super.balanceOf(account);
    }

    function decimals() public view virtual override returns (uint8) {
        return 2;
    }

    function mint(address account, uint256 value) public {
        super._mint(account, value);
    }

    function burn(address account, uint256 value) public {
        super._burn(account, value);
    }
}