---
id: status
title: Status
---

> This page is the source of truth for what is live.

> Last updated: 2026-02-12
> Docs version: v20260212

| Feature | Status | Contracts used (high level) | Approvals / spender | Notes |
| --- | --- | --- | --- | --- |
| Swap routing | Live | Uniswap V2 Factory + Router | ERC20 approvals to V2 Router (`0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d`) | Direct pair or one-hop via `WETH`; no Permit2/Universal Router in current flow. |
| V2 pools | Live | Uniswap V2 Pair + Router | Token approvals to V2 Router; LP approvals to V2 Router for remove liquidity | Add/remove liquidity is available in UI. |
| V3 positions | Planned | Not configured in current frontend runtime | N/A | V3 position UX is not live in the current app. |
| Farms | Live | MasterChef (`0x8d29ebbf13786fe6c5439937d5d47e2fb8cc9f9a`) + V2 LP tokens | LP approvals to MasterChef | Claim via `deposit(pid, 0)`. |
| MegaVault | Planned | N/A (documentation concept only) | N/A | Not exposed as a live app tab. |
| Subgraph | Beta | V2-compatible subgraph endpoint (`VITE_UNIV2_SUBGRAPH`) | N/A | On-chain fallback is used when subgraph is missing data or delayed. |
| Realtime WS | Planned | Not wired in current frontend code | N/A | Current frontend relies on RPC + periodic refresh for live updates. |
| Points / Leaderboard | Planned | Tokenomics policy page (off-chain scoring + seasonal distribution) | N/A | Season schedule is documented; live app UI for points is not deployed. |
