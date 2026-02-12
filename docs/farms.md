---
id: farms
title: Farms (V3 incentives)
---


## Table of Contents
- [Contracts](#contracts)
- [Incentive Model](#incentive-model)
- [Actions](#actions)
- [Approvals and Spenders](#approvals-and-spenders)
- [Refresh Cadence](#refresh-cadence)

## Contracts

- V3 Staker: `0xc6a9dB70b5618DfbCA05Fa7db11bEC48782D5590`
- V3 Position Manager: `0xa02e90a5f5ef73c434f5a7e6a77e6508f009cb9d`
- V3 Factory: `0x09cF8A0b9e8C89bff6d1ACbe1467e8E335Bdd03E`

## Incentive Model

Farms are position-based incentives built on Uniswap V3 Staker.

At runtime, users can:
- Discover active incentives.
- Match eligible V3 positions to incentive pools.
- Stake/unstake positions and claim reward token allocations.

## Actions

- Stake: stake an eligible V3 position NFT into an incentive.
- Unstake: remove staked position from incentive.
- Claim: claim accrued rewards from the incentive.
- Withdraw: withdraw deposited position NFT when stakes are cleared.
- Create incentive: available in-app for authorized operators.

## Approvals and Spenders

- Position approvals can target V3 Staker before staking.
- Reward token approvals target V3 Staker for incentive creation.

## Refresh Cadence

- Incentives and position data refresh periodically.
- User data refreshes after on-chain activity.
