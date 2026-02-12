---
id: status
title: Status
---

> This page is the source of truth for what is live.


| Feature | Status | Contracts used (high level) | Approvals / spender | Notes |
| --- | --- | --- | --- | --- |
| Swap routing | Live | V3 Quoter V2 + Universal Router, with V2 Factory/Router route support | ERC20 approvals to Permit2, Permit2 allowance to Universal Router | Smart mode prefers V3 and can use V2 or split paths. |
| V2 pools | Live | Uniswap V2 Factory + Router | Token + LP approvals to V2 Router | Add/remove V2 liquidity is available in UI. |
| V3 positions | Live | Uniswap V3 Factory + Position Manager | Token approvals to Position Manager; NFT approvals as required | Mint/increase/decrease/collect flows are exposed in Liquidity. |
| Farms | Live | Uniswap V3 Staker + Position Manager | Reward token approvals and position approvals to V3 Staker when needed | Stake/unstake/claim incentives from V3 positions. |
| MegaVault | Beta | Avon MegaVault widget integration | Managed by widget transaction flow | Tab is live, integration surface is external widget based. |
| Subgraph | Beta | V2 + V3 The Graph endpoints | N/A | On-chain fallback paths are used when data is missing or delayed. |
| Realtime WS | Beta | MegaETH realtime client (`stateChanges`, `miniBlocks`) | N/A | Enabled on mainnet websocket endpoints when available. |
| Points / Leaderboard | Beta | Points API + season config (`VITE_POINTS_*`) | Claim/verification handled by points flow | Points tab is live; leaderboard visibility can be env-gated. |
