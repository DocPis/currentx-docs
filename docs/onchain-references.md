---
id: onchain-references
title: On-chain References
---

## Table of Contents
- [Network](#network)
- [RPC and WebSocket](#rpc-and-websocket)
- [Subgraph](#subgraph)
- [Contracts](#contracts)

## Network

- Chain: MegaETH
- Chain ID (hex): `0x10e6`
- Chain ID (dec): `4326`
- Explorer: `https://megaeth.blockscout.com`

## RPC and WebSocket

RPC URLs (default pool):
- `https://mainnet.megaeth.com/rpc`
- `https://rpc-megaeth-mainnet.globalstake.io`

WebSocket URLs:
- From env: `VITE_WS_URL`, `VITE_WS_URLS`, `VITE_MEGAETH_REALTIME_WS`
- Derived from the active RPC URL (http -> ws, `/rpc` -> `/ws`)
- Fallback: `wss://mainnet.megaeth.com/ws`

## Subgraph

- URL: `https://gateway.thegraph.com/api/subgraphs/id/AokDW2tqCMiFvVqXUEfiwY94mNXoBQfsszwd5bnPiNcr`
- API key (if using Graph gateway): `VITE_UNIV2_SUBGRAPH_API_KEY`
- Optional proxy for CORS: `VITE_SUBGRAPH_PROXY`

## Contracts

Full contract addresses, init code hashes, and tokens are documented in [Contracts](./contracts).
