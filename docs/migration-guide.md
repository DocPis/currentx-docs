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

## 4) Liquidity and farms migration

- Liquidity now includes both V2 pools and V3 position flows.
- Farms surface is V3 Staker (position-based), not the old V2 LP MasterChef UX.

## 5) Address baseline (from current app config)

- V2 Factory: `0xC60940F182F7699522970517f6d753A560546937`
- V2 Router: `0x189b27c207b4cBBae1C65086F31383532443f5f2`
- V3 Factory: `0x09cF8A0b9e8C89bff6d1ACbe1467e8E335Bdd03E`
- V3 Quoter V2: `0x962e62df3df243844bd89ffb5b061919725dca2d`
- V3 Position Manager: `0xa02e90a5f5ef73c434f5a7e6a77e6508f009cb9d`
- Universal Router: `0x2c61d16Ad68f030bec95370Ab8a0Ba60e7E7B0a6`
- Permit2: `0x000000000022D473030F116dDEE9F6B43aC78BA3`
- V3 Staker: `0xc6a9dB70b5618DfbCA05Fa7db11bEC48782D5590`

## 6) Deprecated assumptions to remove

- Legacy single-router swap assumptions.
- Legacy approval assumptions that skipped Permit2 and Universal Router.
- Legacy assumptions that V3 position UX was unavailable.
- Legacy farms assumptions based only on V2 LP MasterChef flows.
- Legacy network assumptions based on pre-MegaETH deployments.
