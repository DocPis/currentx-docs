---
id: onchain-references
title: On-chain References
---

Addresses and parameters used by the dApp on Sepolia.

## Network

- Chain ID: `0xaa36a7` (Sepolia)
- Default RPC: `https://1rpc.io/sepolia`

## Core contracts

| Component               | Address                                                        | Notes                                |
| ----------------------- | -------------------------------------------------------------- | ------------------------------------ |
| Uniswap V2 Factory      | `0xb70112d72da5d6df0bb2b26a2307e4ba27cfe042`                   | Pair discovery                       |
| Uniswap V2 Router       | `0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d`                   | Swap and add/remove liquidity        |
| MasterChef (staking)    | `0x8d29ebbf13786fe6c5439937d5d47e2fb8cc9f9a`                   | CRX emissions for farms              |
| CRX/WETH LP token       | `0x340d63169285e5ae01a722ce762c0e81a7fa3037`                   | Main pool used for TVL and CRX price |
| WETH/USDC pair (forced) | `0x92ac66c621832ef02629c10a3db25c5e92ea33d4`                   | WETH/USDC price feed anchor          |

## Supported tokens

| Token | Decimals | Address                                      | Notes                            |
| ----- | -------- | -------------------------------------------- | -------------------------------- |
| ETH   | 18       | - (native)                                   | Also used with `addLiquidityETH` |
| WETH  | 18       | `0xfff9976782d46cc05630d1f6ebab18b2324d6b14` |                                  |
| CRX   | 6        | `0x46bb8cf9f25986201c1d91f095622e37be2463a3` | Reward/farming token             |
| USDC  | 6        | `0x1c7d4b196cb0c7b01d743fbc6116a902379c7238` | Test stable                      |
| USDT  | 6        | `0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0` | Test stable                      |
| DAI   | 18       | `0xff34b3d4aee8ddcd6f9afffb6fe49bd371b8a357` | Test stable                      |
| WBTC  | 8        | `0x29f2d40b0605204364af54ec677bd022da425d03` | Wrapped BTC                      |
