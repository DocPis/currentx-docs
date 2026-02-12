---
id: migration-guide
title: Migration Guide
---


This guide is for integrators updating older CurrentX docs/integrations to match the live frontend implementation.

## 1) Network preset

- Network target is Sepolia (`chainId 0xaa36a7`, decimal `11155111`).
- Read-only RPC uses `VITE_SEPOLIA_RPC` (fallback `https://1rpc.io/sepolia`).
- Subgraph envs:
  - `VITE_UNIV2_SUBGRAPH`
  - `VITE_UNIV2_SUBGRAPH_API_KEY` (optional)

## 2) Swap migration (V2)

- Swap routing is Uniswap V2 only.
- Quotes are computed from pair reserves (not from V3 quoter paths).
- Execution uses V2 Router `swapExact*` functions.
- ERC20 approvals must target the V2 Router spender.

## 3) Liquidity and farms

- Liquidity actions are V2 add/remove LP flows.
- LP token approvals for liquidity removal target V2 Router.
- Farm staking approvals target MasterChef.

## 4) Address baseline (from current app config)

- V2 Factory: `0xb70112d72da5d6df0bb2b26a2307e4ba27cfe042`
- V2 Router: `0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d`
- MasterChef: `0x8d29ebbf13786fe6c5439937d5d47e2fb8cc9f9a`
- CRX/WETH LP: `0x340d63169285e5ae01a722ce762c0e81a7fa3037`

## 5) Deprecated assumptions to remove

- Remove Universal Router swap integration assumptions.
- Remove Permit2 spender assumptions for swap approvals.
- Remove V3 Quoter V2 dependency assumptions from swap code.

## 6) Checklist

- Confirm Sepolia chain configuration.
- Confirm V2 Router spender is used for ERC20 swap approvals.
- Validate subgraph env vars and fallback behavior.
- Re-test swap, liquidity, and farm flows end-to-end.

