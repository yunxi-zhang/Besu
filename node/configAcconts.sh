#!/bin/bash
echo "Please enter the key value for the admin account"
npx hardhat vars set ADMIN_ACCOUNT
echo "Please enter the key value for the user1 account"
npx hardhat vars set USER1_ACCOUNT
echo "Please enter the key value for the user2 account"
npx hardhat vars set USER2_ACCOUNT