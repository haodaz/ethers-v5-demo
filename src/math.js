// Fee and split math with BigNumber, written for ethers v5.
import { BigNumber, ethers } from "ethers";

export function withFee(amountEther, feeBps) {
  const amount = ethers.utils.parseEther(amountEther);
  const fee = amount.mul(feeBps).div(10000);
  return amount.add(fee);
}

export function splitEvenly(total, parts) {
  const each = BigNumber.from(total).div(parts);
  return { each, remainder: BigNumber.from(total).sub(each.mul(parts)) };
}

export function isZero(value) {
  return BigNumber.from(value).isZero();
}

export function toHex(value) {
  return BigNumber.from(value).toHexString();
}
