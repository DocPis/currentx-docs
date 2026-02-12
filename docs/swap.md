---
id: swap
title: Swap
---


## Table of Contents
- [Supported Tokens](#supported-tokens)
- [Routing (Smart: V3 + V2)](#routing-smart-v3--v2)
- [Quotes and Slippage](#quotes-and-slippage)
- [Approvals and Spenders](#approvals-and-spenders)
- [Execution](#execution)
- [Example](#example)

## Supported Tokens

Default token registry is loaded from the active network config and includes:
- `ETH` (native)
- `WETH`
- `CRX`
- `USDT0`
- `CUSD`
- `STCUSD`
- `USDe`
- `USDm`
- `MEGA`

Custom tokens can be added from the UI and are persisted locally.

## Routing (Smart: V3 + V2)

In the live app, route preference is smart:
- V3 routes are explored first across available fee tiers.
- V2 routes are available as fallback and for split optimization.
- Split routes can combine V3 and V2 legs when output is better.

`ETH` to `WETH` conversions use direct wrap/unwrap, not pool routing.

## Quotes and Slippage

- V3 quote path uses Uniswap V3 Quoter V2.
- V2 quote path uses reserve-based quote logic.
- Slippage tolerance is user-configurable.
- The app can re-quote before submit when price movement exceeds guard thresholds.

## Approvals and Spenders

For ERC20 sell tokens:
- First approval: ERC20 allowance to `Permit2` (`0x000000000022D473030F116dDEE9F6B43aC78BA3`).
- Second allowance: Permit2 allowance to Universal Router (`0x2c61d16Ad68f030bec95370Ab8a0Ba60e7E7B0a6`).

Direct `ETH` to `WETH` wrap/unwrap does not require token approvals.

## Execution

All non-wrap swaps execute through Universal Router commands:
- `V3_SWAP_EXACT_IN`
- `V2_SWAP_EXACT_IN`
- `WRAP_ETH` / `UNWRAP_WETH`

This means both V3 and V2 routes are executed through the same router surface.

## Example

Swap `1 ETH` to `USDT0`:
1. Select `ETH` as input and `USDT0` as output.
2. The app computes a smart route (V3, V2, or split).
3. Review min received and slippage.
4. Submit the transaction and verify on MegaETH explorer.
