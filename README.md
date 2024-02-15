# Guidance
## Setup a QBFT Besu Development Network
Follow this [tutorial](https://besu.hyperledger.org/private-networks/tutorials/qbft) to setup a QBFT Besu development network. All the network files should be setup in the <b>QBFT-Network</b> folder.

## Solidity
To develop, test, deploy and upgrade Solidity smart contracts, [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started) is selected as the main development framework in this repo. 

In particular, for upgradeable Solidity smart contracts development, the [OpenZepplin plugin for Hardhat](https://docs.openzeppelin.com/upgrades-plugins/1.x/hardhat-upgrades) is used. 

The <b>node</b> folder is used for Hardhat.