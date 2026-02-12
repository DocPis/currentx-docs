---
id: liquidity
title: Liquidity
---

> Status: Live (V2), V3 planned
> Last updated: 2026-02-12
> Docs version: v20260212

## Table of Contents
- [V2 Pools (Live)](#v2-pools-live)
- [Current Pool Set](#current-pool-set)
- [V3 Positions (Planned)](#v3-positions-planned)
- [Token Restrictions](#token-restrictions)

## V2 Pools (Live)

V2 pools use fungible LP tokens and a constant-product AMM.

Add liquidity:
- Select a pair and enter token amounts.
- The UI suggests balanced amounts from live reserves.
- Approve token spending to the V2 Router.
- Submit `addLiquidity` / `addLiquidityETH`.

Remove liquidity:
- Enter LP amount to burn.
- Approve LP token to the V2 Router if needed.
- Submit `removeLiquidity` / `removeLiquidityETH`.

Fee realization:
- V2 fees accrue in pool reserves.
- Fees are realized when LP tokens are burned.

## Current Pool Set

The current frontend ships with these base pools:
- `CRX/WETH`
- `WETH/USDC`
- `WETH/DAI`
- `WETH/USDT`
- `WBTC/USDC`
- `DAI/USDC`
- `USDT/USDC`
- `ETH/USDC`

## V3 Positions (Planned)

V3 position management is not currently live in the frontend runtime.

When enabled, this docs section will be expanded with:
- fee tier selection,
- tick/range configuration,
- position mint/collect/increase/decrease flows.

## Token Restrictions

Some tokens can be hidden or blocked by app configuration. Custom tokens can be added, but unsupported tokens are not guaranteed to be actionable.
