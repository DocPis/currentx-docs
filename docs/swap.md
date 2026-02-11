---
id: swap
title: Swap
---

## Table of Contents
- [Supported Tokens](#supported-tokens)
- [Routing (V2)](#routing-v2)
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

## Routing (V2)

In the current app implementation, swaps are executed through Uniswap V2 only. There is no V3 routing path in the swap flow.

Path selection rules (V2):
- Direct pair if it exists in the V2 Factory.
- Single hop via `WETH` if no direct pair exists.

## Quotes and Slippage

- Quotes are computed from V2 pool reserves using the V2 Router `getAmountsOut` path.
- Slippage tolerance is user-configurable. The minimum received amount shown in the swap preview reflects your slippage setting.
- `ETH` &lt;-&gt; `WETH` swaps use direct wrap/unwrap (no LP fee).

## Route Display

The route panel shows:
- Each hop in the route (direct or via `WETH`).
- The selected V2 path and hop order.

## Execution

- Swaps execute through the V2 Router.
- `ETH` swaps use `swapExactETHForTokens` or `swapExactTokensForETH`.
- ERC20 swaps use `swapExactTokensForTokens`.
- `ETH` swaps include wrap/unwrap steps where required.

## Example

Swap `1 ETH` to `USDT0`:
1. Select `ETH` as input and `USDT0` as output.
2. The route display shows either a direct V2 pair or a hop via `WETH` if no direct pair exists.
3. Confirm the quoted output and execute with your preferred slippage tolerance.
