---
id: migration-guide
title: Migration Guide
---


This guide is for integrators updating old CurrentX assumptions to the current live frontend runtime.

## 1) Network preset

- Target network is MegaETH (`chainId 0x10e6`, decimal `4326`).
- Explorer: `https://megaeth.blockscout.com`.
- RPC is loaded from active network preset plus env overrides.

## 2) Swap migration

- Swap is not V2-only anymore.
- Current routing is smart over V3 and V2.
- Quotes use V3 Quoter V2 plus V2 quote fallback.
- Execution is through Universal Router (including V2 legs).

## 3) Approval migration

For ERC20 swap input, approval flow is:
1. ERC20 allowance to Permit2.
2. Permit2 allowance to Universal Router.

Do not assume direct ERC20 allowance to V2 Router for swap execution.
