---
id: farms
title: Farms (stake LP for CRX)
---

Farms are powered by a MasterChef contract and distribute CRX rewards to V2 LP stakers.

## Contracts

- MasterChef: `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0`
- CRX/WETH LP (price reference): `0x340d63169285e5ae01a722ce762c0e81a7fa3037`

## Data refresh

- Farm list refresh: every 30 seconds.
- User data refresh: every 20 seconds when connected.
- Realtime: the app listens to MegaETH miniBlocks to refresh user data after on-chain activity.

## APR estimation

- Emissions are read from `currentxPerBlock` and `totalAllocPoint`.
- APR uses ~2,628,000 blocks/year (12s block time) and on-chain LP TVL.

Prices:
- WETH price is derived from WETH pairs against USDC, CUSD, or USDm (first available).
- CRX price is derived from the CRX/WETH pool.
- Subgraph TVL is used as a fallback when on-chain estimation is missing.

## Actions

- Deposit: approve LP token (if needed) and call `deposit(pid, amount)`.
- Withdraw: call `withdraw(pid, amount)`.
- Claim: call `deposit(pid, 0)`.
- Each action shows the transaction hash with a link to the MegaETH explorer.
