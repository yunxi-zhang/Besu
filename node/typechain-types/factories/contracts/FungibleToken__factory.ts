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
    inputs: [],
    name: "ValueExcceedsMaximum",
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
  "0x608060405234801561001057600080fd5b5061201c806100206000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806340c10f19116100ad5780639dc29fac116100715780639dc29fac1461032e578063a217fddf1461034a578063a9059cbb14610368578063d547741f14610398578063dd62ed3e146103b457610121565b806340c10f19146102785780634d12d4b61461029457806370a08231146102b057806391d14854146102e057806395d89b411461031057610121565b806323b872dd116100f457806323b872dd146101c2578063248a9ca3146101f25780632f2ff15d14610222578063313ce5671461023e57806336568abe1461025c57610121565b806301ffc9a71461012657806306fdde0314610156578063095ea7b31461017457806318160ddd146101a4575b600080fd5b610140600480360381019061013b9190611606565b6103e4565b60405161014d919061164e565b60405180910390f35b61015e61045e565b60405161016b91906116f9565b60405180910390f35b61018e600480360381019061018991906117af565b6104ff565b60405161019b919061164e565b60405180910390f35b6101ac610522565b6040516101b991906117fe565b60405180910390f35b6101dc60048036038101906101d79190611819565b61053a565b6040516101e9919061164e565b60405180910390f35b61020c600480360381019061020791906118a2565b610569565b60405161021991906118de565b60405180910390f35b61023c600480360381019061023791906118f9565b610597565b005b6102466105b9565b6040516102539190611955565b60405180910390f35b610276600480360381019061027191906118f9565b6105c2565b005b610292600480360381019061028d91906117af565b61063d565b005b6102ae60048036038101906102a99190611aa5565b610695565b005b6102ca60048036038101906102c59190611b44565b610848565b6040516102d791906117fe565b60405180910390f35b6102fa60048036038101906102f591906118f9565b61085a565b604051610307919061164e565b60405180910390f35b6103186108d3565b60405161032591906116f9565b60405180910390f35b610348600480360381019061034391906117af565b610974565b005b610352610990565b60405161035f91906118de565b60405180910390f35b610382600480360381019061037d91906117af565b610997565b60405161038f919061164e565b60405180910390f35b6103b260048036038101906103ad91906118f9565b6109ba565b005b6103ce60048036038101906103c99190611b71565b6109dc565b6040516103db91906117fe565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610457575061045682610a71565b5b9050919050565b6060600061046a610adb565b905080600301805461047b90611be0565b80601f01602080910402602001604051908101604052809291908181526020018280546104a790611be0565b80156104f45780601f106104c9576101008083540402835291602001916104f4565b820191906000526020600020905b8154815290600101906020018083116104d757829003601f168201915b505050505091505090565b60008061050a610b03565b9050610517818585610b0b565b600191505092915050565b60008061052d610adb565b9050806002015491505090565b600080610545610b03565b9050610552858285610b1d565b61055d858585610bb1565b60019150509392505050565b600080610574610ca5565b905080600001600084815260200190815260200160002060010154915050919050565b6105a082610569565b6105a981610ccd565b6105b38383610ce1565b50505050565b60006002905090565b6105ca610b03565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461062e576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106388282610de2565b505050565b6000801b61064a81610ccd565b612710821115610686576040517f31498a3a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106908383610ee4565b505050565b600061069f610f66565b905060008160000160089054906101000a900460ff1615905060008260000160009054906101000a900467ffffffffffffffff1690506000808267ffffffffffffffff161480156106ed5750825b9050600060018367ffffffffffffffff16148015610722575060003073ffffffffffffffffffffffffffffffffffffffff163b145b905081158015610730575080155b15610767576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018560000160006101000a81548167ffffffffffffffff021916908367ffffffffffffffff16021790555083156107b75760018560000160086101000a81548160ff0219169083151502179055505b6107c18888610f8e565b6107c9610fa4565b6107d38987610ee4565b6107e06000801b8a610ce1565b50831561083d5760008560000160086101000a81548160ff0219169083151502179055507fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d260016040516108349190611c6a565b60405180910390a15b505050505050505050565b600061085382610fae565b9050919050565b600080610865610ca5565b905080600001600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1691505092915050565b606060006108df610adb565b90508060040180546108f090611be0565b80601f016020809104026020016040519081016040528092919081815260200182805461091c90611be0565b80156109695780601f1061093e57610100808354040283529160200191610969565b820191906000526020600020905b81548152906001019060200180831161094c57829003601f168201915b505050505091505090565b6000801b61098181610ccd565b61098b8383611005565b505050565b6000801b81565b6000806109a2610b03565b90506109af818585610bb1565b600191505092915050565b6109c382610569565b6109cc81610ccd565b6109d68383610de2565b50505050565b6000806109e7610adb565b90508060010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205491505092915050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60007f52c63247e1f47db19d5ce0460030c497f067ca4cebf71ba98eeadabe20bace00905090565b600033905090565b610b188383836001611087565b505050565b6000610b2984846109dc565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610bab5781811015610b9b578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610b9293929190611c94565b60405180910390fd5b610baa84848484036000611087565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610c235760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610c1a9190611ccb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c955760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610c8c9190611ccb565b60405180910390fd5b610ca083838361126d565b505050565b60007f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800905090565b610cde81610cd9610b03565b6114ac565b50565b600080610cec610ca5565b9050610cf8848461085a565b610dd657600181600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610d72610b03565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610ddc565b60009150505b92915050565b600080610ded610ca5565b9050610df9848461085a565b15610ed857600081600001600086815260200190815260200160002060000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610e74610b03565b73ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16857ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001915050610ede565b60009150505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610f565760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610f4d9190611ccb565b60405180910390fd5b610f626000838361126d565b5050565b60007ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00905090565b610f966114fd565b610fa0828261153d565b5050565b610fac6114fd565b565b600080610fb9610adb565b90508060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054915050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036110775760006040517f96c6fd1e00000000000000000000000000000000000000000000000000000000815260040161106e9190611ccb565b60405180910390fd5b6110838260008361126d565b5050565b6000611091610adb565b9050600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036111055760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016110fc9190611ccb565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036111775760006040517f94280d6200000000000000000000000000000000000000000000000000000000815260040161116e9190611ccb565b60405180910390fd5b828160010160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508115611266578373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258560405161125d91906117fe565b60405180910390a35b5050505050565b6000611277610adb565b9050600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036112cd57818160020160008282546112c19190611d15565b925050819055506113a6565b60008160000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561135c578481846040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161135393929190611c94565b60405180910390fd5b8281038260000160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036113f157818160020160008282540392505081905550611441565b818160000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161149e91906117fe565b60405180910390a350505050565b6114b6828261085a565b6114f95780826040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526004016114f0929190611d49565b60405180910390fd5b5050565b61150561157a565b61153b576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b6115456114fd565b600061154f610adb565b9050828160030190816115629190611f14565b50818160040190816115749190611f14565b50505050565b6000611584610f66565b60000160089054906101000a900460ff16905090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6115e3816115ae565b81146115ee57600080fd5b50565b600081359050611600816115da565b92915050565b60006020828403121561161c5761161b6115a4565b5b600061162a848285016115f1565b91505092915050565b60008115159050919050565b61164881611633565b82525050565b6000602082019050611663600083018461163f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156116a3578082015181840152602081019050611688565b60008484015250505050565b6000601f19601f8301169050919050565b60006116cb82611669565b6116d58185611674565b93506116e5818560208601611685565b6116ee816116af565b840191505092915050565b6000602082019050818103600083015261171381846116c0565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117468261171b565b9050919050565b6117568161173b565b811461176157600080fd5b50565b6000813590506117738161174d565b92915050565b6000819050919050565b61178c81611779565b811461179757600080fd5b50565b6000813590506117a981611783565b92915050565b600080604083850312156117c6576117c56115a4565b5b60006117d485828601611764565b92505060206117e58582860161179a565b9150509250929050565b6117f881611779565b82525050565b600060208201905061181360008301846117ef565b92915050565b600080600060608486031215611832576118316115a4565b5b600061184086828701611764565b935050602061185186828701611764565b92505060406118628682870161179a565b9150509250925092565b6000819050919050565b61187f8161186c565b811461188a57600080fd5b50565b60008135905061189c81611876565b92915050565b6000602082840312156118b8576118b76115a4565b5b60006118c68482850161188d565b91505092915050565b6118d88161186c565b82525050565b60006020820190506118f360008301846118cf565b92915050565b600080604083850312156119105761190f6115a4565b5b600061191e8582860161188d565b925050602061192f85828601611764565b9150509250929050565b600060ff82169050919050565b61194f81611939565b82525050565b600060208201905061196a6000830184611946565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6119b2826116af565b810181811067ffffffffffffffff821117156119d1576119d061197a565b5b80604052505050565b60006119e461159a565b90506119f082826119a9565b919050565b600067ffffffffffffffff821115611a1057611a0f61197a565b5b611a19826116af565b9050602081019050919050565b82818337600083830152505050565b6000611a48611a43846119f5565b6119da565b905082815260208101848484011115611a6457611a63611975565b5b611a6f848285611a26565b509392505050565b600082601f830112611a8c57611a8b611970565b5b8135611a9c848260208601611a35565b91505092915050565b60008060008060808587031215611abf57611abe6115a4565b5b6000611acd87828801611764565b945050602085013567ffffffffffffffff811115611aee57611aed6115a9565b5b611afa87828801611a77565b935050604085013567ffffffffffffffff811115611b1b57611b1a6115a9565b5b611b2787828801611a77565b9250506060611b388782880161179a565b91505092959194509250565b600060208284031215611b5a57611b596115a4565b5b6000611b6884828501611764565b91505092915050565b60008060408385031215611b8857611b876115a4565b5b6000611b9685828601611764565b9250506020611ba785828601611764565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680611bf857607f821691505b602082108103611c0b57611c0a611bb1565b5b50919050565b6000819050919050565b600067ffffffffffffffff82169050919050565b6000819050919050565b6000611c54611c4f611c4a84611c11565b611c2f565b611c1b565b9050919050565b611c6481611c39565b82525050565b6000602082019050611c7f6000830184611c5b565b92915050565b611c8e8161173b565b82525050565b6000606082019050611ca96000830186611c85565b611cb660208301856117ef565b611cc360408301846117ef565b949350505050565b6000602082019050611ce06000830184611c85565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611d2082611779565b9150611d2b83611779565b9250828201905080821115611d4357611d42611ce6565b5b92915050565b6000604082019050611d5e6000830185611c85565b611d6b60208301846118cf565b9392505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302611dd47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611d97565b611dde8683611d97565b95508019841693508086168417925050509392505050565b6000611e11611e0c611e0784611779565b611c2f565b611779565b9050919050565b6000819050919050565b611e2b83611df6565b611e3f611e3782611e18565b848454611da4565b825550505050565b600090565b611e54611e47565b611e5f818484611e22565b505050565b5b81811015611e8357611e78600082611e4c565b600181019050611e65565b5050565b601f821115611ec857611e9981611d72565b611ea284611d87565b81016020851015611eb1578190505b611ec5611ebd85611d87565b830182611e64565b50505b505050565b600082821c905092915050565b6000611eeb60001984600802611ecd565b1980831691505092915050565b6000611f048383611eda565b9150826002028217905092915050565b611f1d82611669565b67ffffffffffffffff811115611f3657611f3561197a565b5b611f408254611be0565b611f4b828285611e87565b600060209050601f831160018114611f7e5760008415611f6c578287015190505b611f768582611ef8565b865550611fde565b601f198416611f8c86611d72565b60005b82811015611fb457848901518255600182019150602085019450602081019050611f8f565b86831015611fd15784890151611fcd601f891682611eda565b8355505b6001600288020188555050505b50505050505056fea264697066735822122076778b178fec0ad1bd3c1c7b11956713d989cd63f22988f3f0f53694f1b7553764736f6c63430008180033";

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
