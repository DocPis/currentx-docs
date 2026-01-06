---
id: swap
title: Swap
---

- **Tokens**: ETH/WETH, CRX, USDC, USDT, DAI, WBTC plus any custom tokens you add.
- **Inputs**: Set Sell/Buy tokens, enter an amount, or tap 25/50/75/100% of balance.
- **Quoting**:
  - Direct pair when available; otherwise one hop via WETH.
  - ETH/WETH uses wrap/unwrap (no router fee).
  - Min received = live quote minus chosen slippage (default 0.5%).
  - Price impact estimated from reserves.
- **Execution**:
  - ERC20 sells: allowance check; "Approve" appears when needed.
  - Swap shows success/error and a link to SepoliaScan when mined.
- **Tips**: If quoting fails, check token addresses, subgraph availability, or try a smaller size on low-liquidity pairs.
