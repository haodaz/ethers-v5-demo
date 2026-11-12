# ethers-v5-demo

A small app that still uses **ethers v5**. It is the test repository for the 402 Found codemod engine: an agent pays 0.05 USDC over x402 on Stellar testnet, and the engine opens a pull request that upgrades this code to ethers v6.

Uses the v5 APIs the codemod rewrites: `ethers.providers.JsonRpcProvider`, `ethers.utils.formatEther` / `parseEther`, `ethers.constants.AddressZero`, `BigNumber` math (`mul`, `div`, `add`, `sub`, `isZero`, `toHexString`) and `provider.getSigner()`.
