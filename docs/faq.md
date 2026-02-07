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
| Tick | A discrete price step in Uniswap V3. Ranges are defined by lower and upper ticks. |
| Fee tier | The swap fee charged by a V3 pool (0.01%, 0.05%, 0.30%, 1.00%). |
| Range | The price interval where a V3 position is active and earns fees. |
| Slippage | The maximum price movement you accept between quote and execution. |
| IL (Impermanent Loss) | The difference between holding assets in a pool and holding them outside the pool. |
| LP | Liquidity provider. In V2 this is a fungible LP token; in V3 it is an NFT position. |
| TVL | Total value locked in a pool or protocol. |
| APR | Annual percentage rate, typically derived from fees and incentives. |

## FAQ

Why is my range not earning fees?
- The current price may be outside your range, making the position inactive.
- There may be little or no trading volume in your range.
- You selected a fee tier with lower volume.
- The pool may be new or thin, so fees are small relative to your position size.

Why do I only see one token in my V3 position?
- When the price moves outside your range, the position holds only one of the two assets until the price re-enters the range.

How do I claim V2 fees?
- V2 fees are included in pool reserves. You claim them by removing liquidity (burning LP tokens).

Why is XBTC unavailable?
- XBTC is listed as `TBD` until its contract address is finalized and added to the CurrentX token registry.
