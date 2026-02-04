---
id: swap
title: Swap
---

CurrentX swaps are Uniswap V3 compatible and executed through the Universal Router.

## Supported tokens (default list)

- `ETH`, `WETH`, `USDC`, `CUSD`, `USDm`, `CRX`, `MEGA`.
- Additional tokens appear after they are added to the custom token registry (Liquidity page).

## Quoting and routing

Quotes come from the Uniswap V3 Quoter V2.

Route options:
- Direct pool if available.
- One hop via `WETH` if direct liquidity is missing or worse.

Routing logic:
- `Turbo` mode compares direct vs WETH hop output and chooses the better route.
- `Protected` mode uses the direct pool if available; otherwise a single hop via `WETH`.

Other behaviors:
- Fee tiers scanned: `0.01%`, `0.05%`, `0.30%`, `1.00%`.
- Quotes auto refresh every ~3 seconds while an amount is entered and refresh on window focus.
- `ETH` <-> `WETH` uses direct wrap/unwrap (no LP fee, no router path).

## Execution modes and slippage

Defaults:
- Base slippage: `0.5%`.
- Slippage cap: `3%` (max `5%`).

Auto slippage:
- `Turbo`: `max(base, 0.6 * priceImpact + 0.45 * quoteVolatility + 0.35)` capped at 5%.
- `Protected`: `max(0.05%, min(base or 0.3%, 0.8%))`.
- Effective slippage = `min(autoSlippage, slippageCap)`.

Pre-flight re-quote thresholds:
- `Turbo`: re-quote if price moved by more than `1.5%`.
- `Protected`: re-quote if price moved by more than `0.9%`.

Notes:
- `priceImpact` is not computed for V3 pools (UI shows `--`).

## Approvals (ERC20 sells)

Approvals:
- Approvals are sent to Permit2 (spender for the Universal Router).

Approval modes:
- `Exact`: approve only the current swap amount.
- `Unlimited`: approve `MAX_UINT256` once.

## Execution details

- Router call: `UniversalRouter.execute(...)` with `V3_SWAP_EXACT_IN`.
- Deadline: 20 minutes.
- ETH routes use `WRAP_ETH` / `UNWRAP_WETH` steps when needed.
- A swap receipt panel shows expected vs executed output, min received, gas used, and the chosen route.

## Common errors

- "V3 router not configured": missing Universal Router or Quoter address in the active network preset.
- "No V3 pools found": neither direct nor WETH hop pool exists for the pair.
- Wallet rejection (`4001`, `ACTION_REJECTED`) or RPC rate limits.
