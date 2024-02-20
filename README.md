# Guidance
## Setup a QBFT Besu Development Network
Follow this [tutorial](https://besu.hyperledger.org/private-networks/tutorials/qbft) to setup a QBFT Besu development network. All the network files should be setup in the <b>QBFT-Network</b> folder.

## Generate Key Pairs and an Address with Besu
Follow this [tutorial](https://blog.8bitzen.com/blog/2019-11-21-how-to-generate-a-public-key-a-private-key-and-an-address-with-besu) to quickly generate key pairs and an address for admins or users with Besu.

## Solidity
To develop, test, deploy and upgrade Solidity smart contracts, [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) is selected as the main development framework in this repo. 

In particular, for upgradeable Solidity smart contracts development, the [OpenZepplin plugin for Hardhat](https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades) is used. 

The <b>node</b> folder is used for Hardhat.