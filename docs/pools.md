---
id: pools
title: Pools
---

## Table of Contents
- [Pool List](#pool-list)
- [Metrics](#metrics)
- [V2 vs V3 Display](#v2-vs-v3-display)
- [APR Breakdown](#apr-breakdown)

## Pool List

The Pools page lists active pools and allows filtering by token pair and TVL. In the current app implementation, the list is V2-only.

## Metrics

Common metrics shown for each pool:
- TVL.
- 24h volume.
- 24h fees.
- APR (fee APR and, when applicable, incentive APR).

## V2 vs V3 Display

Note: V3 pool rows are not currently shown in the app UI. The details below apply when V3 pool listings are enabled.

V2 pools:
- Identified by the pair name and a single 0.30% fee.
- LP token supply is shown when available.

V3 pools:
- Identified by the pair name and fee tier (0.01%, 0.05%, 0.30%, 1.00%).
- Liquidity is concentrated, so TVL and fee metrics are tied to the active price range.

## APR Breakdown

APR is estimated from on-chain and subgraph data:
- Fee APR is derived from swap fees collected over the last 24h relative to pool TVL.
- Incentive APR is derived from farming emissions, if the pool is staked in MasterChef.

APR values are estimates and can change quickly with volume and price.
