---
id: megavault
title: MegaVault
---


## Table of Contents
- [Status](#status)
- [What It Is](#what-it-is)
- [How It Works](#how-it-works)
- [Using MegaVault](#using-megavault)
- [Risks](#risks)

## Status

MegaVault is available in the app as a live tab through an embedded Avon widget integration.

## What It Is

MegaVault provides a managed vault flow directly inside CurrentX for deposit and withdrawal actions.

## How It Works

- CurrentX mounts the Avon MegaVault widget on MegaETH.
- Wallet connection from CurrentX is reused by the widget flow.
- Strategy and vault-specific transaction details are handled by the widget integration layer.

## Using MegaVault

Typical flow:
- Open `MegaVault` tab.
- Connect wallet (if not connected).
- Select deposit/withdraw path in widget.
- Confirm on-chain transactions from wallet.

## Risks

- Smart contract and integration risk.
- Strategy performance risk.
- Liquidity and market risk.
- Third-party widget dependency risk.
