---
id: faq
title: FAQ and Glossary
---


## Table of Contents
- [Glossary](#glossary)
- [FAQ](#faq)

## Glossary

| Term | Definition |
| --- | --- |
| Slippage | Maximum price movement accepted between quote and execution. |
| IL (Impermanent Loss) | Difference between LP value and hold value. |
| LP | Liquidity provider position (V2 LP token or V3 NFT position). |
| TVL | Total value locked in a pool or protocol. |
| APR | Annual percentage rate estimated from fees and incentives. |
| Tick / fee tier / range | V3 concentrated-liquidity concepts used by the live V3 liquidity flow. |

## FAQ

How do I claim V2 fees?
- V2 fees are embedded in pool reserves and realized when removing liquidity.

How do I claim V3 fees?
- Use the V3 collect action on your position in Liquidity.

Why is my swap failing?
- Wallet rejected the request (`4001` / `ACTION_REJECTED`).
- Wallet is on wrong network (switch to MegaETH).
- Missing approvals for Permit2 and/or Universal Router allowance.
- Route has insufficient liquidity for selected size/slippage.

Can I use V3 positions in the current app UI?
- Yes. V3 position flows are live in Liquidity.
