/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  FungibleToken,
  FungibleTokenInterface,
} from "../../contracts/FungibleToken";

const _abi = [
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientAllowance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256",
      },
    ],
    name: "ERC20InsufficientBalance",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC20InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC20InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "ERC20InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fe0806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806340c10f19116100ad5780639dc29fac116100715780639dc29fac1461032e578063a217fddf1461034a578063a9059cbb14610368578063d547741f14610398578063dd62ed3e146103b457610121565b806340c10f19146102785780634d12d4b61461029457806370a08231146102b057806391d14854146102e057806395d89b411461031057610121565b806323b872dd116100f457806323b872dd146101c2578063248a9ca3146101f25780632f2ff15d14610222578063313ce5671461023e57806336568abe1461025c57610121565b806301ffc9a71461012657806306fdde0314610156578063095ea7b31461017457806318160ddd146101a4575b600080fd5b610140600480360381019061013b91906115ca565b6103e4565b60405161014d9190611612565b60405180910390f35b61015e61045e565b60405161016b91906116bd565b60405180910390f35b61018e60048036038101906101899190611773565b6104ff565b60405161019b9190611612565b60405180910390f35b6101ac610522565b6040516101b991906117c2565b60405180910390f35b6101dc60048036038101906101d791906117dd565b61053a565b6040516101e99190611612565b60405180910390f35b61020c60048036038101906102079190611866565b610569565b60405161021991906118a2565b60405180910390f35b61023c600480360381019061023791906118bd565b610597565b005b6102466105b9565b6040516102539190611919565b60405180910390f35b610276600480360381019061027191906118bd565b6105c2565b005b610292600480360381019061028d9190611773565b61063d565b005b6102ae60048036038101906102a99190611a69565b610659565b005b6102ca60048036038101906102c59190611b08565b61080c565b6040516102d791906117c2565b60405180910390f35b6102fa60048036038101906102f591906118bd565b61081e565b6040516103079190611612565b60405180910390f35b610318610897565b60405161032591906116bd565b60405180910390f35b61034860048036038101906103439190611773565b610938565b005b610352610954565b60405161035f91906118a2565b60405180910390f35b610382600480360381019061037d9190611773565b61095b565b60405161038f9190611612565b60405180910390f35b6103b260048036038101906103ad91906118bd565b61097e565b005b6103ce60048036038101906103c99190611b35565b6109a0565b6040516103db91906117c2565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610457575061045682610a35565b5b9050919050565b6060600061046a610a9f565b905080600301805461047b90611ba4565b80601f01602080910402602001604051908101604052809291908181526020018280546104a790611ba4565b80156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b505050505091505090565b60008061050a610ac7565b9050610517818585610acf565b600191505092915050565b60008061052d610a9f565b9050806002015491505090565b600080610545610ac7565b9050610552858285610ae1565b61055d858585610b75565b60019150509392505050565b600080610574610c69565b905080600001600084815260200190815260200160002060010154915050919050565b6105a082610569565b6105a981610c91565b6105b38383610ca5565b50505050565b60006002905090565b6105ca610ac7565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461062e576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106388282610da6565b505050565b6000801b61064a81610c91565b6106548383610ea8565b505050565b6000610663610f2a565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156106b15750825b9050600060018367ffffffffffffffff161480156106e6575060003073ffffffffffffffffffffffffffffffffffffffff163b145b9050811580156106f4575080155b1561072b576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550831561077b5760018560000160086101000a81548160ff0219169083151502179055505b6107858888610f52565b61078d610f68565b6107978987610ea8565b6107a46000801b8a610ca5565b5083156108015760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516107f89190611c2e565b60405180910390a15b505050505050505050565b600061081782610f72565b9050919050565b600080610829610c69565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b606060006108a3610a9f565b90508060040180546108b490611ba4565b80601f01602080910402602001604051908101604052809291908181526020018280546108e090611ba4565b801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b505050505091505090565b6000801b61094581610c91565b61094f8383610fc9565b505050565b6000801b81565b600080610966610ac7565b9050610973818585610b75565b600191505092915050565b61098782610569565b61099081610c91565b61099a8383610da6565b50505050565b6000806109ab610a9f565b90508060010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00905090565b600033905090565b610adc838383600161104b565b505050565b6000610aed84846109a0565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b6f5781811015610b5f578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610b5693929190611c58565b60405180910390fd5b610b6e8484848403600061104b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610be75760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610bde9190611c8f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c595760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610c509190611c8f565b60405180910390fd5b610c64838383611231565b505050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b610ca281610c9d610ac7565b611470565b50565b600080610cb0610c69565b9050610cbc848461081e565b610d9a57600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d36610ac7565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610da0565b60009150505b92915050565b600080610db1610c69565b9050610dbd848461081e565b15610e9c57600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e38610ac7565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001915050610ea2565b60009150505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f1a5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610f119190611c8f565b60405180910390fd5b610f2660008383611231565b5050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b610f5a6114c1565b610f648282611501565b5050565b610f706114c1565b565b600080610f7d610a9f565b90508060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361103b5760006040517f96c6fd1e0000000000000000000000000000000000000000000000000000000081526004016110329190611c8f565b60405180910390fd5b61104782600083611231565b5050565b6000611055610a9f565b9050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036110c95760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016110c09190611c8f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361113b5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016111329190611c8f565b60405180910390fd5b828160010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550811561122a578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258560405161122191906117c2565b60405180910390a35b5050505050565b600061123b610a9f565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361129157818160020160008282546112859190611cd9565b9250508190555061136a565b60008160000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905082811015611320578481846040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161131793929190611c58565b60405180910390fd5b8281038260000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113b557818160020160008282540392505081905550611405565b818160000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161146291906117c2565b60405180910390a350505050565b61147a828261081e565b6114bd5780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016114b4929190611d0d565b60405180910390fd5b5050565b6114c961153e565b6114ff576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6115096114c1565b6000611513610a9f565b9050828160030190816115269190611ed8565b50818160040190816115389190611ed8565b50505050565b6000611548610f2a565b60000160089054906101000a900460ff16905090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6115a781611572565b81146115b257600080fd5b50565b6000813590506115c48161159e565b92915050565b6000602082840312156115e0576115df611568565b5b60006115ee848285016115b5565b91505092915050565b60008115159050919050565b61160c816115f7565b82525050565b60006020820190506116276000830184611603565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561166757808201518184015260208101905061164c565b60008484015250505050565b6000601f19601f8301169050919050565b600061168f8261162d565b6116998185611638565b93506116a9818560208601611649565b6116b281611673565b840191505092915050565b600060208201905081810360008301526116d78184611684565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061170a826116df565b9050919050565b61171a816116ff565b811461172557600080fd5b50565b60008135905061173781611711565b92915050565b6000819050919050565b6117508161173d565b811461175b57600080fd5b50565b60008135905061176d81611747565b92915050565b6000806040838503121561178a57611789611568565b5b600061179885828601611728565b92505060206117a98582860161175e565b9150509250929050565b6117bc8161173d565b82525050565b60006020820190506117d760008301846117b3565b92915050565b6000806000606084860312156117f6576117f5611568565b5b600061180486828701611728565b935050602061181586828701611728565b92505060406118268682870161175e565b9150509250925092565b6000819050919050565b61184381611830565b811461184e57600080fd5b50565b6000813590506118608161183a565b92915050565b60006020828403121561187c5761187b611568565b5b600061188a84828501611851565b91505092915050565b61189c81611830565b82525050565b60006020820190506118b76000830184611893565b92915050565b600080604083850312156118d4576118d3611568565b5b60006118e285828601611851565b92505060206118f385828601611728565b9150509250929050565b600060ff82169050919050565b611913816118fd565b82525050565b600060208201905061192e600083018461190a565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61197682611673565b810181811067ffffffffffffffff821117156119955761199461193e565b5b80604052505050565b60006119a861155e565b90506119b4828261196d565b919050565b600067ffffffffffffffff8211156119d4576119d361193e565b5b6119dd82611673565b9050602081019050919050565b82818337600083830152505050565b6000611a0c611a07846119b9565b61199e565b905082815260208101848484011115611a2857611a27611939565b5b611a338482856119ea565b509392505050565b600082601f830112611a5057611a4f611934565b5b8135611a608482602086016119f9565b91505092915050565b60008060008060808587031215611a8357611a82611568565b5b6000611a9187828801611728565b945050602085013567ffffffffffffffff811115611ab257611ab161156d565b5b611abe87828801611a3b565b935050604085013567ffffffffffffffff811115611adf57611ade61156d565b5b611aeb87828801611a3b565b9250506060611afc8782880161175e565b91505092959194509250565b600060208284031215611b1e57611b1d611568565b5b6000611b2c84828501611728565b91505092915050565b60008060408385031215611b4c57611b4b611568565b5b6000611b5a85828601611728565b9250506020611b6b85828601611728565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611bbc57607f821691505b602082108103611bcf57611bce611b75565b5b50919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000611c18611c13611c0e84611bd5565b611bf3565b611bdf565b9050919050565b611c2881611bfd565b82525050565b6000602082019050611c436000830184611c1f565b92915050565b611c52816116ff565b82525050565b6000606082019050611c6d6000830186611c49565b611c7a60208301856117b3565b611c8760408301846117b3565b949350505050565b6000602082019050611ca46000830184611c49565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611ce48261173d565b9150611cef8361173d565b9250828201905080821115611d0757611d06611caa565b5b92915050565b6000604082019050611d226000830185611c49565b611d2f6020830184611893565b9392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611d987fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611d5b565b611da28683611d5b565b95508019841693508086168417925050509392505050565b6000611dd5611dd0611dcb8461173d565b611bf3565b61173d565b9050919050565b6000819050919050565b611def83611dba565b611e03611dfb82611ddc565b848454611d68565b825550505050565b600090565b611e18611e0b565b611e23818484611de6565b505050565b5b81811015611e4757611e3c600082611e10565b600181019050611e29565b5050565b601f821115611e8c57611e5d81611d36565b611e6684611d4b565b81016020851015611e75578190505b611e89611e8185611d4b565b830182611e28565b50505b505050565b600082821c905092915050565b6000611eaf60001984600802611e91565b1980831691505092915050565b6000611ec88383611e9e565b9150826002028217905092915050565b611ee18261162d565b67ffffffffffffffff811115611efa57611ef961193e565b5b611f048254611ba4565b611f0f828285611e4b565b600060209050601f831160018114611f425760008415611f30578287015190505b611f3a8582611ebc565b865550611fa2565b601f198416611f5086611d36565b60005b82811015611f7857848901518255600182019150602085019450602081019050611f53565b86831015611f955784890151611f91601f891682611e9e565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220e3285536c6b093a0d9de0dd9663740ea55577c61ebede5308a1ff55cf3acadda64736f6c63430008180033";

type FungibleTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FungibleTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FungibleToken__factory extends ContractFactory {
  constructor(...args: FungibleTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      FungibleToken & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): FungibleToken__factory {
    return super.connect(runner) as FungibleToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FungibleTokenInterface {
    return new Interface(_abi) as FungibleTokenInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): FungibleToken {
    return new Contract(address, _abi, runner) as unknown as FungibleToken;
  }
}
