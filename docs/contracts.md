---
id: contracts
title: Contracts and Addresses
---


## Table of Contents
- [Network](#network)
- [Uniswap V2 (Live)](#uniswap-v2-live)
- [Farming](#farming)
- [Tokens](#tokens)
- [V3 / Universal Router](#v3--universal-router)
- [Notes](#notes)

## Network

- Chain: Ethereum Sepolia
- Chain ID (dec): `11155111`
- Chain ID (hex): `0xaa36a7`
- Explorer: `https://sepolia.etherscan.io`
- RPC default: `https://1rpc.io/sepolia`

## Uniswap V2 (Live)

| Component | Address |
| --- | --- |
| Factory | `0xb70112d72da5d6df0bb2b26a2307e4ba27cfe042` |
| Router | `0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d` |
| WETH/USDC pair override | `0x92aC66C621832EF02629c10A3Db25C5e92eA33d4` |

## Farming

| Component | Address |
| --- | --- |
| MasterChef | `0x8d29ebbf13786fe6c5439937d5d47e2fb8cc9f9a` |
| CRX/WETH LP | `0x340d63169285e5ae01a722ce762c0e81a7fa3037` |

## Tokens

| Symbol | Address |
| --- | --- |
| WETH | `0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14` |
| USDC | `0x1c7d4b196cb0c7b01d743fbc6116a902379c7238` |
| USDT | `0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0` |
| DAI | `0xff34b3d4aee8ddcd6f9afffb6fe49bd371b8a357` |
| WBTC | `0x29f2d40b0605204364af54ec677bd022da425d03` |
| CRX | `0x46bb8cf9f25986201c1d91f095622e37be2463a3` |

## V3 / Universal Router

No V3 Factory, Quoter V2, Universal Router, Permit2, or Position Manager addresses are currently configured in the live frontend runtime.

## Notes

- These values are pulled from `../currentx-dex/src/config/addresses.js` and `../currentx-dex/src/config/tokens.js`.
- If a new deployment updates addresses, update this page and `docs/status.md` in the same change.

