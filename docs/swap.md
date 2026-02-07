---
id: swap
title: Swap
---

## Table of Contents
- [Supported Tokens](#supported-tokens)
- [V2 vs V3 Routing](#v2-vs-v3-routing)
- [Quotes and Slippage](#quotes-and-slippage)
- [Route Display](#route-display)
- [Execution](#execution)
- [Example](#example)

## Supported Tokens

Default token list on MegaETH:
- `ETH` (native)
- `WETH`
- `USDT0`
- `USDm`
- `CUSD`
- `STCUSD`
- `sUSDe`
- `USDe`
- `ezETH`
- `wstETH`
- `CRX`
- `MEGA`
- `BTCB`
- `XBTC` (TBD, address not set)

Tokens that are hidden or blocked for liquidity may not be selectable in Swap until enabled by the app config.

## V2 vs V3 Routing

CurrentX supports both Uniswap V2 and Uniswap V3 liquidity. The router selection follows these rules:
- V3 routes are preferred when a V3 pool exists for the pair and fee tier.
- V2 routes are used as a fallback when V3 liquidity is missing or when the app is configured to prefer V2 pools for legacy pairs.
- When enabled, routes can include a single hop via `WETH` to access deeper liquidity.

## Quotes and Slippage

- V3 quotes are produced by Quoter V2.
- V2 quotes use pool reserves via the V2 Router.
- Slippage tolerance is user-configurable. The minimum received amount shown in the swap preview reflects your slippage setting.

## Route Display

The route panel shows:
- Each hop in the route (direct or via `WETH`).
- Whether the hop is V2 or V3.
- For V3 hops, the fee tier used (0.01%, 0.05%, 0.30%, 1.00%).

## Execution

- V3 swaps execute through the Universal Router.
- V2 swaps execute through the V2 Router.
- `ETH` swaps include wrap/unwrap steps where required.

## Example

Swap `1 ETH` to `USDT0`:
1. Select `ETH` as input and `USDT0` as output.
2. The route display shows either a direct V3 pool (with fee tier) or a hop via `WETH` if liquidity is deeper.
3. Confirm the quoted output and execute with your preferred slippage tolerance.
