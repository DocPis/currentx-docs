---
id: overview
title: Overview
---

## Table of Contents
- [What is CurrentX](#what-is-currentx)
- [Architecture](#architecture)
- [V2 vs V3 at a Glance](#v2-vs-v3-at-a-glance)
- [Key Contracts and Dependencies](#key-contracts-and-dependencies)
- [Network](#network)
- [App Sections](#app-sections)

## What is CurrentX

CurrentX is a decentralized exchange (DEX) on MegaETH. It supports two liquidity models:
- Uniswap V2-style pools (fungible LP tokens, constant product AMM).
- Uniswap V3-style concentrated liquidity (NFT positions with custom ranges).

The protocol is designed to provide low-slippage swaps, flexible liquidity provisioning, and incentive-based farming via CRX rewards.

## Architecture

At a high level, the CurrentX stack looks like this:
- UI (web app) connects to user wallets and MegaETH RPCs.
- On-chain execution uses Uniswap V2 contracts, Uniswap V3 contracts, and CurrentX incentives (MasterChef).
- Market data and protocol-wide stats are pulled from a subgraph (V2 schema) with on-chain fallbacks.
- Swap quotes are produced from V2 pool reserves in the current app implementation.

Execution paths:
- V2 swaps and liquidity actions go through the V2 Router and Factory.
- V3 contracts are documented for protocol reference, but the current app does not route swaps through V3.
- V3 liquidity is described in these docs for when V3 positions are enabled.
- Farming actions are routed to MasterChef (stake V2 LP tokens).

## V2 vs V3 at a Glance

| Feature | V2 Pools | V3 Positions |
| --- | --- | --- |
| Liquidity model | Constant product (`x*y=k`) | Concentrated liquidity in a price range |
| LP representation | ERC-20 LP tokens | NFT positions |
| Fees | Single 0.30% pool fee | Multiple fee tiers (0.01%, 0.05%, 0.30%, 1.00%) |
| Capital efficiency | Lower | Higher (in-range only) |
| Active range | Full price curve | Custom min/max range |
| Fee earning | Always (if volume exists) | Only when in-range |

## Key Contracts and Dependencies

CurrentX depends on the following core contracts:
- Uniswap V2 Factory + Router for pools and LP token flows.
- Uniswap V3 Factory, Quoter V2, Tick Lens, Nonfungible Position Manager, and Universal Router.
- MasterChef for CRX incentives.
- Timestamp oracle for precise time readings used by the app.

See [Contracts](./contracts) for full addresses and init code hashes.

## Network

- Chain: MegaETH
- Chain ID: `4326` (`0x10e6`)
- Explorer: `https://megaeth.blockscout.com`
- RPC: `https://mainnet.megaeth.com/rpc` (with fallback RPCs listed in `docs/contracts.md`)

## App Sections

- [Dashboard](./dashboard): protocol TVL, volume, and top pools.
- [Swap](./swap): V2/V3 routing, quotes, slippage, and route display.
- [Liquidity](./liquidity): V2 LP tokens and V3 concentrated positions.
- [Pools](./pools): pool list, metrics, and APR breakdowns.
- [Farms](./farms): stake V2 LP tokens to earn CRX rewards.
- [MegaVault](./megavault): managed liquidity vaults and strategy details.
- [FAQ / Glossary](./faq): definitions and common questions.
- [Contracts](./contracts): on-chain addresses and network parameters.
