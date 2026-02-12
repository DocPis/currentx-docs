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
| IL (Impermanent Loss) | Difference between LP value and simple hold value. |
| LP | Liquidity provider. In live flows this is a V2 LP token position. |
| TVL | Total value locked in a pool or protocol. |
| APR | Annual percentage rate estimated from fees and incentives. |
| Tick / fee tier / range | V3 concentrated-liquidity concepts (planned, not live in current UI). |

## FAQ

How do I claim V2 fees?
- V2 fees are included in pool reserves. You realize them by removing liquidity (burning LP tokens).

Why is my transaction failing on wallet connect or swap?
- Wallet may reject the request (`4001` / `ACTION_REJECTED`).
- Wallet may be on the wrong network (switch to Sepolia).
- The selected pair may have low or missing liquidity.

Can I use V3 positions in the current app UI?
- Not yet. V3 position flows are planned and are not currently live.

