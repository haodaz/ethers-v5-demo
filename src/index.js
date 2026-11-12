import { withFee, splitEvenly } from "./math.js";
import { ethers } from "ethers";

const total = withFee("1.5", 250);
console.log("1.5 ETH plus 2.5% fee:", ethers.utils.formatEther(total));
console.log("split in 3:", splitEvenly(total, 3).each.toString());
