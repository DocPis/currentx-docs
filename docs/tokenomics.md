---
id: tokenomics
title: Tokenomics
---

## Table of Contents
- [Official Allocation (Active)](#official-allocation-active)
- [Leaderboard Season Budget](#leaderboard-season-budget)
- [Season 1 Timing](#season-1-timing)
- [Claim](#claim)

## Official Allocation (Active)

Total supply: `1,000,000 CRX`.
CRX is fixed supply: leaderboard rewards are distributed from existing allocations, with no additional minting.

| Bucket | % | CRX | Notes |
| --- | ---: | ---: | --- |
| LP (Genesis) | 25% | 250,000 | Initial liquidity bootstrap with transparent ownership/lock policy. |
| Leaderboard Rewards (Seasons) | 40% | 400,000 | Seasonal rewards for swap and LP activity. |
| Farms / Liquidity Mining | 15% | 150,000 | Incentives for LP and position programs. |
| Partnerships / MM / Aggregators | 5% | 50,000 | Milestone-based ecosystem incentives. |
| Treasury / Runway | 5% | 50,000 | Operations, maintenance, contingency. |
| Security / Bug Bounty / Audits | 5% | 50,000 | Security programs and audits. |
| Team / Contributors (Vesting) | 5% | 50,000 | Contributor compensation with vesting. |
| **Total** | **100%** | **1,000,000** |  |

This table is the canonical tokenomics allocation and matches [CRX Distribution & Leaderboard Rewards](./tokenomics/crx-distribution).

## Leaderboard Season Budget

Leaderboard rewards pool: `400,000 CRX`.

| Season | CRX Allocation |
| --- | ---: |
| Season 1 | 120,000 |
| Season 2 | 90,000 |
| Season 3 | 70,000 |
| Season 4 | 50,000 |
| Season 5 | 40,000 |
| Season 6 | 30,000 |
| **Total** | **400,000** |

Each season allocation follows the same payout mechanics: `30%` unlocks at claim and `70%` vests linearly over `90 days` from claim time, so the full season amount is not instantly liquid.

## Season 1 Timing

- Season 1 starts: `2026-02-12 00:00 UTC (00:00 UK/GMT, 01:00 Rome/CET)`
- Season 1 ends: `2026-03-12 00:00 UTC (00:00 UK/GMT, 01:00 Rome/CET)`
- Finalization target: `2026-03-14 00:00 UTC (00:00 UK/GMT, 01:00 Rome/CET)`
- Claim opens: `2026-03-14 00:00 UTC (00:00 UK/GMT, 01:00 Rome/CET)`

## Claim

Leaderboard season rewards follow this claim flow:

- Season length: leaderboard seasons run on a `30-day` cadence (Season 1 uses the fixed dates listed above).
- Eligibility: rewards become claimable only after season finalization is complete.
- Immediate unlock: `30%` of the user reward unlocks at claim.
- Vesting: the remaining `70%` vests linearly over `90 days`.
- Vesting start: the `90-day` vesting period starts when the user claims. Delaying claim delays vesting start.
- Supply source: rewards are funded from existing CRX allocations; no additional CRX is minted.
