// Fee and split math with BigNumber, written for ethers v5.
import { ethers } from "ethers";

export function withFee(amountEther, feeBps) {
  const amount = ethers.parseEther(amountEther);
  const fee = amount * BigInt(feeBps) / BigInt(10000);
  return amount + fee;
}

export function splitEvenly(total, parts) {
  const each = BigInt(total) / BigInt(parts);
  return { each, remainder: BigInt(total) - each * BigInt(parts) };
}

export function isZero(value) {
  return BigInt(value) === 0n;
}

export function toHex(value) {
  return ethers.toBeHex(BigInt(value));
}
