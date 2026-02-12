---
id: architecture
title: Architecture and Flows
---


This page summarizes how the CurrentX dApp is wired today and which contract surfaces it uses.

## System modules

- Network preset and provider layer.
- Address registry and token registry.
- Swap engine and route planner.
- Liquidity engine for V2 pools and V3 positions.
- Realtime event client and balance refresh pipeline.

## Network and providers

- Active network: MegaETH (`0x10e6` / `4326`).
- Read providers: RPC pool resolved from network preset and env overrides.
- Wallet provider: injected wallet via EIP-1193.

## Data sources

- V2 subgraph: `VITE_UNIV2_SUBGRAPH`.
- V3 subgraph: `VITE_UNIV3_SUBGRAPH`.
- On-chain fallback paths when subgraph data is delayed.
- Realtime updates via websocket subscriptions (`stateChanges`, `miniBlocks`) when websocket URLs are configured.

## Swap (live)

- Routing: smart mode over V3 + V2, with split support.
- V3 quote source: Quoter V2.
- V2 quote source: reserve-based path quote.
- Execution: Universal Router.
- Approvals: ERC20 -> Permit2, then Permit2 allowance for Universal Router.

Core swap addresses from config:
- V2 Factory: `0xC60940F182F7699522970517f6d753A560546937`
- V2 Router: `0x189b27c207b4cBBae1C65086F31383532443f5f2`
- V3 Factory: `0x09cF8A0b9e8C89bff6d1ACbe1467e8E335Bdd03E`
- V3 Quoter V2: `0x962e62df3df243844bd89ffb5b061919725dca2d`
- Universal Router: `0x2c61d16Ad68f030bec95370Ab8a0Ba60e7E7B0a6`
- Permit2: `0x000000000022D473030F116dDEE9F6B43aC78BA3`

## Liquidity (live)

- V2: add/remove liquidity through V2 Router.
- V3: position mint/increase/decrease/collect through Position Manager.
- Pools surface combines V2 and V3 pool data.

## Farms (live)

- Farms tab is based on V3 Staker incentives.
- Position NFTs can be staked/unstaked and rewards claimed per incentive.
- Incentive creation flow is available for authorized operators.

## Legacy contracts present in config

`MASTER_CHEF_ADDRESS` remains configured, but current farms UX is V3 Staker-based.
