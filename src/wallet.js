// Reads balances and prepares a payment, written for ethers v5.
import { ethers } from "ethers";

export function makeProvider(rpcUrl) {
  return new ethers.JsonRpcProvider(rpcUrl);
}

export async function balanceInEther(provider, address) {
  const wei = await provider.getBalance(address);
  return ethers.formatEther(wei);
}

export async function signerFor(provider) {
  const signer = await provider.getSigner();
  return signer.getAddress();
}

export function isEmptyAddress(address) {
  return address === ethers.ZeroAddress;
}
