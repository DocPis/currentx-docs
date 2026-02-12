---
id: intro
title: Welcome to CurrentX
---

> Status: Live
> Last updated: 2026-02-12
> Docs version: v20260212

CurrentX docs track the live dApp implementation in `../currentx-dex`.

## What you'll find

- User flows for Dashboard, Swap, Liquidity, Pools, and Farms.
- Contract and network references taken from the current app config.
- Tokenomics and season timing with a single canonical distribution table.
- A live status snapshot in [Status](./status) (source of truth for what is live).

## Network scope

- Network: Ethereum Sepolia.
- Chain ID (hex): `0xaa36a7`.
- Chain ID (dec): `11155111`.

## Current execution baseline

- Swap routing: Uniswap V2 only.
- Swap execution: `swapExactETHForTokens`, `swapExactTokensForETH`, `swapExactTokensForTokens`.
- Quotes: computed from V2 pair reserves (constant product math).
- ERC20 approval spender: V2 Router (`0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d`).
- Permit2 and Universal Router are not used by the current live swap flow.
