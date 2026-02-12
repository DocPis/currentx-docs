---
id: liquidity
title: Liquidity
---


## Table of Contents
- [V2 Pools](#v2-pools)
- [V3 Positions](#v3-positions)
- [Approvals and Spenders](#approvals-and-spenders)
- [Pool Discovery](#pool-discovery)
- [Token Restrictions](#token-restrictions)

## V2 Pools

V2 pools use fungible LP tokens and constant-product AMM behavior.

Add liquidity:
- Select a pair and enter amounts.
- The UI suggests balanced amounts from live reserves when available.
- Approve tokens to V2 Router.
- Submit `addLiquidity` / `addLiquidityETH`.

Remove liquidity:
- Enter LP amount to burn.
- Approve LP token to V2 Router if needed.
- Submit `removeLiquidity` / `removeLiquidityETH`.

## V3 Positions

V3 position management is live in the Liquidity section.

Available flows:
- Select token pair and fee tier.
- Set price range.
- Mint new position.
- Increase/decrease liquidity.
- Collect accrued fees.

Position manager used by UI:
- `0xa02e90a5f5ef73c434f5a7e6a77e6508f009cb9d`

## Approvals and Spenders

- V2 token and LP approvals target V2 Router.
- V3 token approvals target V3 Position Manager.
- If a position is staked in Farms, position approval to V3 Staker can be required.

## Pool Discovery

- Pool data is sourced from V2/V3 subgraphs with fallback logic.
- The UI can jump from Pools into Liquidity with preselected pair context.

## Token Restrictions

Some tokens can be hidden/disabled by network config. Custom tokens can be added, but unsupported tokens are not guaranteed to be actionable.
