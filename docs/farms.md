---
id: farms
title: Farms (stake LP for CRX)
---

## Table of Contents
- [Contracts](#contracts)
- [Rewards and APR](#rewards-and-apr)
- [Actions](#actions)
- [Refresh Cadence](#refresh-cadence)

## Contracts

- MasterChef: `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0`
- CRX/WETH LP (price reference): `0x340d63169285e5ae01a722ce762c0e81a7fa3037`

## Rewards and APR

Farms distribute CRX rewards to V2 LP stakers.

APR components:
- Emissions APR: CRX per block allocated to the pool, converted to USD and divided by pool TVL.
- Fee APR: pool trading fees earned by the underlying V2 pool.

Total APR is the sum of emissions APR and fee APR. All values are estimates and change with price, volume, and TVL.

## Actions

- Deposit: approve LP token (if needed) and call `deposit(pid, amount)`.
- Withdraw: call `withdraw(pid, amount)`.
- Claim: call `deposit(pid, 0)` to harvest rewards without changing stake.

## Refresh Cadence

- Farm list refreshes periodically and on page focus.
- User data refreshes after on-chain activity and on new blocks.
