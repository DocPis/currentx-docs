---
id: overview
title: Overview
---


## Table of Contents
- [What is CurrentX](#what-is-currentx)
- [Architecture](#architecture)
- [Live Surface](#live-surface)
- [Network](#network)
- [App Sections](#app-sections)

## What is CurrentX

CurrentX is a DEX frontend on MegaETH mainnet. These docs track the live runtime behavior of the app.

## Architecture

At a high level:
- The UI connects to injected wallets and a MegaETH RPC pool.
- Swap uses smart routing across Uniswap V3 and V2, executed through Universal Router.
- Liquidity supports both V2 pools and V3 positions.
- Farms run through Uniswap V3 Staker incentives.
- Market stats are read from V2/V3 subgraphs with on-chain fallbacks.

## Live Surface

Live in current runtime:
- Smart swap routing (V3 primary, V2 fallback/split) with Universal Router and Permit2 approvals.
- Bridge tab powered by Relay for cross-chain transfers to and from MegaETH.
- V2 liquidity add/remove and V3 position management.
- Farms via V3 Staker.
- Points tab and MegaVault tab.
- Realtime WebSocket client plus RPC/subgraph fallbacks.

See [Status](./status) for the canonical live state.

## Network

- Chain: MegaETH
- Chain ID: `4326` (`0x10e6`)
- Explorer: `https://megaeth.blockscout.com`
- RPC defaults: `https://mainnet.megaeth.com/rpc`, `https://rpc-megaeth-mainnet.globalstake.io`

## App Sections

- [Dashboard](./dashboard): protocol TVL/volume snapshots across V2 and V3 pools.
- [Swap](./swap): smart routing, quotes, slippage, Permit2 approvals, and Universal Router execution.
- [Bridge](./bridge): in-app Relay-powered cross-chain transfers to/from MegaETH.
- [Liquidity](./liquidity): V2 LP flows plus V3 position flows.
- [Pools](./pools): combined V2/V3 pool list, metrics, and APR breakdown.
- [Farms](./farms): stake V3 positions into V3 incentives.
- [MegaVault](./megavault): live vault widget integration.
- [FAQ / Glossary](./faq): definitions and common questions.
- [Contracts](./contracts): on-chain addresses pulled from app config.
