---
id: swap
title: Swap
---

- **Tokens**: ETH/WETH, CRX, USDC, USDT, cUSD, USDm, plus any custom tokens you add.
- **Inputs**: Set Sell/Buy tokens, enter an amount, or tap 25/50/75/100% of balance.
- **Quoting**:
  - Direct pair when available; otherwise one hop via WETH.
  - ETH/WETH uses wrap/unwrap (no router fee).
  - Min received = live quote minus chosen slippage (default 0.5%).
  - Price impact estimated from reserves.
  - **Live route preview**: under "You receive", show a compact card labeled "Route (Live)" with:
    - `Path`: e.g., `WETH -> USDM -> TOKEN`.
    - `Expected output`: e.g., `123.45`.
    - `Price impact`: e.g., `0.08%`.
    - `Min received (slippage)`: e.g., `122.95`.
    - `Updated`: "just now" with a small status dot. The quote refreshes in realtime without a page reload.
  - **LiveRoute badge**: a subtle `LiveRoute` badge with a checkmark icon and a tooltip: "Route updates in real-time to keep best execution."
- **Execution**:
  - ERC20 sells: allowance check; "Approve" appears when needed.
  - Swap shows success/error and a link to the MegaETH explorer when mined.
  - After confirmation, open an **Execution Proof** box with:
    - `Expected`: quoted output before signature.
    - `Executed`: actual output.
    - `Slippage`: realized percentage.
    - `Gas used`: on-chain gas.
    - `Tx`: link to the explorer.
    - `Outcome grade`: Great / OK / Bad, shown with check/warning/error icons so users can quickly judge execution quality.
- **Tips**: If quoting fails, check token addresses, subgraph availability, or try a smaller size on low-liquidity pairs.

## Live routing logic

- **Refresh cadence**: poll every 300-800 ms (or per miniblock subscription) to recompute quotes via on-chain call/quoter/simulated route, then update the UI card and badge state.
- **Pre-signature lock**: when the user initiates signing, lock the displayed quote for 3-5 seconds.
- **Re-quote prompt**: if the locked quote drifts beyond the tolerance, auto-trigger a light prompt: "Price moved by 0.12%. Update quote?" and refresh on accept.
- **Experience target**: CEX-like flow: realtime updates, minimal surprises, and quick confirmation of what executed versus what was expected.
