---
id: liquidity
title: Liquidity
---

- **Pool list**: CRX/WETH, WETH/USDC, WETH/DAI, WETH/USDT, WBTC/USDC, DAI/USDC, USDT/USDC, ETH/USDC with live TVL/volume/fees. TVL falls back to on-chain estimates when subgraph data is missing.
- **Autopilot**: One-click entry into CRX/WETH deposit flow.
- **Deposit flow**:
  - Enter both token amounts; balanced suggestions come from current reserves.
  - ETH pools use `addLiquidityETH`; two-ERC20 pools use `addLiquidity`.
  - Router approvals are requested automatically when needed.
- **Withdraw flow**:
  - Enter LP to burn or use 25/50/75/100% of your LP balance.
  - Approves LP to the router if not already approved, then calls `removeLiquidity`/`removeLiquidityETH`.
- **Pair creation**: If the pair doesn't exist on Sepolia, first liquidity will create it automatically.
- **Troubleshooting**: If TVL/volume are blank, the subgraph may be down; you can still add/remove liquidity because on-chain reads power the actions.
