---
id: megavault
title: MegaVault
---

## Table of Contents
- [Status](#status)
- [What It Is](#what-it-is)
- [How It Works](#how-it-works)
- [Using MegaVault](#using-megavault)
- [Fees](#fees)
- [Tradeoffs and Risks](#tradeoffs-and-risks)

## Status

The current app repo does not include MegaVault contracts, strategies, or fee configuration. The sections below describe the intended model, but concrete strategy/fee details are not defined in this codebase yet.

## What It Is

MegaVault is a managed liquidity vault that aggregates user deposits and deploys them into predefined strategies on CurrentX. It is designed for users who want automated positioning instead of manually managing V3 ranges or farm staking.

## How It Works

When enabled:
- Users deposit supported assets and receive vault shares.
- The vault deploys pooled assets into strategies (for example, V3 ranges or incentive-bearing pools).
- Fees and rewards are periodically compounded back into the vault.
- Vault share value changes as the strategy gains or loses value.

The active strategy, target assets, and allocation logic are shown in the MegaVault UI.

## Using MegaVault

Typical flow:
- Select a vault and review its strategy details.
- Deposit the supported asset(s).
- Track performance and share balance in the MegaVault dashboard.
- Withdraw by redeeming shares back into the underlying asset(s).

## Fees

Vault fees, if any, are displayed in the UI. These can include management fees, performance fees, or withdrawal fees depending on the strategy.

## Tradeoffs and Risks

- Smart contract risk in the vault and underlying protocols.
- Strategy risk, including out-of-range exposure for V3 positions.
- Impermanent loss and volatility risk.
- Liquidity risk if the vault strategy is concentrated or thinly traded.
- Performance can lag manual strategies in fast-moving markets.
