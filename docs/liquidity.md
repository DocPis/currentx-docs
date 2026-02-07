---
id: liquidity
title: Liquidity (V2 Pools + V3 Positions)
---

## Table of Contents
- [V2 Pools](#v2-pools)
- [V3 Mechanics](#v3-mechanics)
- [Create a V3 Position](#create-a-v3-position)
- [Range Chart and Presets](#range-chart-and-presets)
- [How to Choose a Range](#how-to-choose-a-range)
- [Examples](#examples)
- [Token Restrictions](#token-restrictions)

The current app exposes V2 pools. V3 mechanics are documented below for protocol reference and for when V3 positions are enabled in the UI.

## V2 Pools

V2 pools use fungible LP tokens and a constant product formula.

Add liquidity (V2):
- Select the token pair and enter both amounts.
- The UI suggests balanced amounts based on current reserves.
- Approve the V2 Router to spend each token.
- Confirm the transaction to mint LP tokens.

Remove liquidity (V2):
- Select the LP token and amount to burn.
- Approve the V2 Router to spend LP tokens if needed.
- Confirm the transaction to receive the underlying assets.

Fee claims (V2):
- V2 fees accrue inside the pool reserves.
- You claim fees by burning LP tokens when you remove liquidity.

## V3 Mechanics

Note: V3 positions are not currently exposed in the app UI. This section describes how V3 concentrated liquidity works at the protocol level.

Uniswap V3 introduces concentrated liquidity. Instead of providing liquidity across the entire price curve, you choose a price range where your liquidity is active.

Core concepts:
- Fee tiers: 0.01%, 0.05%, 0.30%, 1.00%.
- Ticks: discrete price points. Your range is defined by a lower tick and an upper tick.
- Tick spacing: enforced per fee tier. CurrentX uses standard spacing of 1, 10, 60, and 200 ticks respectively.
- Concentrated liquidity: the tighter your range, the more liquidity you provide per unit of capital.

In-range vs out-of-range:
- In-range: your position is active and earns swap fees.
- Out-of-range: your position is inactive and holds only one of the two assets, earning no fees until the price re-enters your range.

V3 fee collection:
- Fees accrue to your position and are claimed via a Collect action when available in the UI or through the Position Manager.

## Create a V3 Position

Steps:
- Select Token A and Token B.
- Choose a fee tier.
- Choose a price range (full range or custom).
- Review the required deposit amounts for each token.
- Approve the Position Manager for each token.
- Submit the mint transaction.

If the pool does not exist or is uninitialized, the app can create and initialize it using the ratio of your deposit amounts.

## Range Chart and Presets

The range chart shows:
- The current price as a vertical marker.
- Your selected lower and upper bounds.
- The portion of your liquidity that is active (in-range).

Strategy presets (labels may vary) set a default range around the current price, for example:
- Full range for passive exposure.
- Wide range for lower maintenance.
- Medium range for balanced fee capture.
- Narrow range for higher fee density and higher management risk.

## How to Choose a Range

Choose a range based on your intent and expected volatility:
- Full range if you want constant exposure and minimal rebalancing.
- Wider ranges for lower maintenance but lower capital efficiency.
- Narrow ranges to maximize fee capture when you are confident about a price band.

If your position goes out-of-range, you can rebalance by adjusting the range or adding liquidity to a new position.

## Examples

V2 example (add liquidity to CRX/WETH):
- Select `CRX` and `WETH`.
- Enter the desired amounts and confirm.
- Receive LP tokens that represent your share of the pool.

V3 example (select a custom range):
- Select `WETH` and `USDT0`.
- Choose the 0.30% fee tier.
- Set a range around the current price, such as 1,800 to 2,400 USDT0 per WETH.
- Mint the position and monitor whether the price stays in-range.

## Token Restrictions

Some tokens may be hidden or blocked from liquidity provisioning by default. The token list and restrictions are defined in the app configuration.
