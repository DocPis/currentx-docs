---
id: overview
title: Overview
---

> Status: Live baseline
> Last updated: 2026-02-12
> Docs version: v20260212

## Table of Contents
- [What is CurrentX](#what-is-currentx)
- [Architecture](#architecture)
- [Live vs Planned](#live-vs-planned)
- [Network](#network)
- [App Sections](#app-sections)

## What is CurrentX

CurrentX is a DEX frontend with live V2 swap/liquidity/farm flows documented from the current app runtime.

## Architecture

At a high level:
- The UI connects to injected wallets and Sepolia RPC.
- Swap and liquidity actions run through Uniswap V2 contracts.
- Farming actions run through MasterChef with V2 LP staking.
- Market stats are read from a V2-compatible subgraph with on-chain fallback.

## Live vs Planned

Live:
- V2 swap routing and execution.
- V2 liquidity add/remove.
- MasterChef farms.

Planned / not live in current runtime:
- V3 position management UX.
- Universal Router / Permit2 swap path.
- Realtime WebSocket feed pipeline.

See [Status](./status) for the canonical live state.

## Network

- Chain: Ethereum Sepolia
- Chain ID: `11155111` (`0xaa36a7`)
- Explorer: `https://sepolia.etherscan.io`
- RPC default: `https://1rpc.io/sepolia`

## App Sections

- [Dashboard](./dashboard): protocol TVL/volume snapshots and top pools.
- [Swap](./swap): V2 routing, quotes, slippage, and approvals.
- [Liquidity](./liquidity): V2 LP flows.
- [Pools](./pools): pool list, metrics, and APR breakdown.
- [Farms](./farms): stake V2 LP tokens to earn CRX.
- [MegaVault](./megavault): roadmap-level vault documentation.
- [FAQ / Glossary](./faq): definitions and common questions.
- [Contracts](./contracts): on-chain addresses pulled from app config.
