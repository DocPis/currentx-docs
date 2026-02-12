---
id: swap
title: Swap
---


## Table of Contents
- [Supported Tokens](#supported-tokens)
- [Routing (V2)](#routing-v2)
- [Quotes and Slippage](#quotes-and-slippage)
- [Approvals and Spender](#approvals-and-spender)
- [Execution](#execution)
- [Example](#example)

## Supported Tokens

Default token list in the current app config:
- `ETH` (native)
- `WETH`
- `USDC`
- `USDT`
- `DAI`
- `WBTC`
- `CRX`

Custom tokens can be added from the UI and are persisted locally.

## Routing (V2)

In the current app implementation, swaps are executed through Uniswap V2 only.

Path selection rules:
- Direct pair if it exists in the V2 Factory.
- Single hop via `WETH` if no direct pair exists.

## Quotes and Slippage

- Quotes are computed from V2 pool reserves using constant-product math (`x*y=k`) in `src/services/amm.js`.
- Slippage tolerance is user-configurable.
- `ETH` and `WETH` use direct wrap/unwrap (no LP fee).

## Approvals and Spender

- ERC20 approvals target the V2 Router only.
- V2 Router address (from app config): `0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d`.
- Permit2 is not used in the current swap flow.

## Execution

Swaps execute through the V2 Router using:
- `swapExactETHForTokens`
- `swapExactTokensForETH`
- `swapExactTokensForTokens`

## Example

Swap `1 ETH` to `USDC`:
1. Select `ETH` as input and `USDC` as output.
2. The app uses a direct V2 pair or a one-hop route via `WETH`.
3. Review min received and submit the swap transaction.

