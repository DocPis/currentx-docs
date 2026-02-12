---
id: onchain-references
title: On-chain References
---


## Table of Contents
- [Network](#network)
- [RPC and WebSocket](#rpc-and-websocket)
- [Subgraphs](#subgraphs)
- [Contracts](#contracts)

## Network

- Chain: MegaETH
- Chain ID (hex): `0x10e6`
- Chain ID (dec): `4326`
- Explorer: `https://megaeth.blockscout.com`

## RPC and WebSocket

RPC env sources resolved by app:
- `VITE_RPC_URL`
- `VITE_RPC_URLS`
- `VITE_MEGAETH_RPC`
- `VITE_RPC_FALLBACK`
- `VITE_RPC_TATUM`
- `VITE_RPC_THIRDWEB`

Default RPC fallbacks in preset:
- `https://mainnet.megaeth.com/rpc`
- `https://rpc-megaeth-mainnet.globalstake.io`

Realtime WebSocket env sources:
- `VITE_WS_URL`
- `VITE_WS_URLS`
- `VITE_MEGAETH_REALTIME_WS`

## Subgraphs

V2 subgraph:
- URL env: `VITE_UNIV2_SUBGRAPH`
- Optional API key env: `VITE_UNIV2_SUBGRAPH_API_KEY`
- Default: `https://gateway.thegraph.com/api/subgraphs/id/3berhRZGzFfAhEB5HZGHEsMAfQ2AQpDk2WyVr5Nnkjyv`

V3 subgraph:
- URL env: `VITE_UNIV3_SUBGRAPH`
- Optional API key env: `VITE_UNIV3_SUBGRAPH_API_KEY`
- Default: `https://gateway.thegraph.com/api/subgraphs/id/Hw24iWxGzMM5HvZqENyBQpA6hwdUTQzCSK5e5BfCXyHd`

## Contracts

Full addresses are documented in [Contracts](./contracts).
