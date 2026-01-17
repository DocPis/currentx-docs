---
id: onchain-references
title: On-chain References
---

Addresses and parameters used by the dApp on MegaETH.

## Network

- Chain ID: `0x10e6` (MegaETH)
- Default RPC: `https://mainnet.megaeth.com/rpc`

## Core contracts

| Component            | Address                                      | Notes                           |
| -------------------- | -------------------------------------------- | ------------------------------- |
| Uniswap V2 Factory   | `0x1F49127E87A1B925694a67C437dd2252641B3875` | Pair discovery                  |
| Uniswap V2 Router    | `0x40276Cff28774FaFaF758992415cFA03b6E4689c` | Swap and add/remove liquidity   |
| CurrentX (CRX) token | `0xDEdDFD6F6fD2eDa3B0bC01c3Dfa03F2eA6f40504` | Reward/utility token            |
| MasterChef (farms)   | `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0` | CRX emissions for LP staking    |
| WETH                 | `0x4200000000000000000000000000000000000006` | Wrapped native ETH              |

## Supported tokens

| Token | Decimals | Address                                      | Notes                            |
| ----- | -------- | -------------------------------------------- | -------------------------------- |
| ETH   | 18       | - (native)                                   | Also used with `addLiquidityETH` |
| WETH  | 18       | `0x4200000000000000000000000000000000000006` | Wrapped native ETH               |
| CRX   | 6        | `0xDEdDFD6F6fD2eDa3B0bC01c3Dfa03F2eA6f40504` | CurrentX token                   |
| USDC  | 6        | `0x4c99d545E82D32dA12Cc634a3964b1698073DA2B` | Dollar stablecoin on MegaETH     |
| cUSD  | 18       | `0xcCcc62962d17b8914c62D74FfB843d73B2a3cccC` | Celo-dollar stable on MegaETH    |
| USDm  | 18       | `0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E74` | Synthetic dollar on MegaETH      |
| Other | -        | Configure per deployment                     | Add stables or BTC wrappers here |
