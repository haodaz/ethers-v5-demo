// Reads balances and prepares a payment, written for ethers v5.
import { ethers } from "ethers";

export function makeProvider(rpcUrl) {
  return new ethers.providers.JsonRpcProvider(rpcUrl);
}

export async function balanceInEther(provider, address) {
  const wei = await provider.getBalance(address);
  return ethers.utils.formatEther(wei);
}

export async function signerFor(provider) {
  const signer = provider.getSigner();
  return signer.getAddress();
}

export function isEmptyAddress(address) {
  return address === ethers.constants.AddressZero;
}
