---
id: intro
title: Welcome to CurrentX
---


CurrentX docs track the live dApp implementation.

## Start here in 60 seconds

1. Bridge assets to MegaETH and keep some `ETH` for gas.
2. Go to [Swap](./swap) and swap `ETH` -> `USDT0`.
3. Join community channels: [Telegram](https://t.me/currentxdex), [Discord](https://discord.gg/g33rC3RT), and [X](https://x.com/currentxdex).

Before you execute flows, check [Status](./status): this is the source of truth for what is live.

## What you'll find

- User flows for Dashboard, Swap, Liquidity, Pools, Points, Farms, and MegaVault.
- Contract and network references taken from current app config.
- Tokenomics and season timing with one canonical distribution table.
- A live status snapshot in [Status](./status) (source of truth for what is live).

## Network scope

- Network: MegaETH.
- Chain ID (hex): `0x10e6`.
- Chain ID (dec): `4326`.

## Current execution baseline

- Swap routing: smart mode over V3 and V2.
- Quote engines: V3 Quoter V2 and V2 reserve-based quote paths.
- Swap execution: Universal Router for V3, V2, and split routes.
- ERC20 approval spenders for swap: Permit2, then Universal Router allowance via Permit2.
- Liquidity: V2 pools and V3 positions are both live in UI.
- Farms: V3 Staker incentive flows are live.
