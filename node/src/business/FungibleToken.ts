import { Wallet, ethers } from "ethers";
import dotenv from "dotenv";
dotenv.config();

const OWNER_PRIVATE_KEY: any = process.env.OWNER_PRIVATE_KEY;
const USER1_PRIVATE_KEY: any = process.env.USER1_PRIVATE_KEY;
const OWNER_ACCOUNT: any = process.env.OWNER_ACCOUNT;
const BESU_URL = "http://127.0.0.1:8545";

const provider = new ethers.JsonRpcProvider(BESU_URL, {
  name: "besu",
  chainId: 1337,
});

let contractAddress: string;
let userRole: string;
let abi: any;
let signer: Wallet;

const setContractAddress = (address: string) => {
  contractAddress = address;
};

const setUserRole = (role: string) => {
  userRole = role;
};

const setABI = (abiObject: any) => {
  abi = abiObject;
}

const getSigner = () => {
  switch (userRole) {
    case "owner":
      signer = new Wallet(OWNER_PRIVATE_KEY, provider);
      break;
    case "user1":
      signer = new Wallet(USER1_PRIVATE_KEY, provider);
      break;
    default:
      throw new Error("user role is missing");
  }
};

const getBalance = async (account: string) => {
  const contract = new ethers.Contract(contractAddress, abi, provider);
  const balance = await contract.balanceOf(account);
  return balance.toString();
};

const transfer = async (targetAccount: string, amount: number) => {
  try {
    getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.transfer(targetAccount, amount);
    await tx.wait();
    console.log("transfer tx response:", tx);
    return tx;
  } catch (err) {
    console.log("Err:", err);
    return err;
  }
};

const mint = async (amount: number) => {
  try {
    getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.mint(OWNER_ACCOUNT, amount);
    await tx.wait();
    console.log("transfer tx response:", tx);
    return tx;
  } catch (err) {
    console.log("Err:", err);
    return err;
  }
};

const burn = async (amount: number) => {
  try {
    getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const tx = await contract.burn(OWNER_ACCOUNT, amount);
    await tx.wait();
    console.log("transfer tx response:", tx);
    return tx;
  } catch (err) {
    console.log("Err:", err);
    return err;
  }
};

const _ = {
  setContractAddress,
  setUserRole,
  setABI,
  getBalance,
  transfer,
  mint,
  burn,
};

export default _;
