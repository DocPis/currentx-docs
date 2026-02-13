---
id: bridge
title: Bridge (Relay)
---


## Table of Contents
- [What it is](#what-it-is)
- [Where to find it](#where-to-find-it)
- [Supported chains](#supported-chains)
- [Bridge flow](#bridge-flow)
- [Wallet behavior](#wallet-behavior)
- [Common errors](#common-errors)
- [Known bridged assets on MegaETH](#known-bridged-assets-on-megaeth)
- [Safety notes](#safety-notes)

## What it is

The Bridge tab embeds Relay directly inside CurrentX so users can move assets cross-chain to and from MegaETH without leaving the app.

Implementation snapshot:
- UI provider: Relay (`@relayprotocol/relay-kit-ui`).
- In-app source tag: `currentx.app`.
- Route in app: `/bridge`.

## Where to find it

- App tab: `Bridge`.
- Official Relay site: `https://relay.link`.
- CurrentX support: `https://discord.gg/hebSwdXwVv`.

## Supported chains

Current runtime is configured for:
- MegaETH (`4326` / `0x10e6`)
- Ethereum
- Base
- Arbitrum
- Optimism
- BNB Chain
- Polygon

Default destination token on open is native `ETH` on MegaETH.

## Bridge flow

1. Open the `Bridge` tab and connect wallet.
2. Select source chain, asset, and amount.
3. Confirm network switch in wallet if requested.
4. Review route and submit transaction(s).
5. Wait for settlement and verify funds on destination chain.

## Wallet behavior

- Wallet VM scope is EVM (`supportedWalletVMs = ["evm"]`).
- The Bridge tab reuses the active app wallet session.
- If a live wagmi wallet client is missing, the app falls back to injected wallet adaptation.
- Destination address defaults to the connected wallet address.

## Common errors

| Error pattern | Meaning | Recommended action |
| --- | --- | --- |
| `insufficient funds` | Balance is too low for amount + gas on source chain. | Reduce amount or add funds for gas. |
| `switch` / `chain` | Wallet is on the wrong network for the step. | Approve network switch and retry. |
| `reject` / `denied` | Signature or transaction was rejected in wallet. | Re-submit and approve in wallet. |
| `no quotes available` | No executable route was returned for current pair/amount. | Try another amount/token or retry later. |
| `missing a wallet` / `valid wallet` | Wallet session is out of sync with Relay widget. | Disconnect/reconnect wallet and retry. |

## Known bridged assets on MegaETH

Current token metadata includes bridge-linked assets:

| Asset | Source token | Bridge field in app config | MegaETH token |
| --- | --- | --- | --- |
| `sUSDe` | `0x9D39A5DE30e57443BfF2A8307A4256c8797A3497` (Ethereum) | `0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2` | `0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2` |
| `ezETH` | `0xbf5495Efe5DB9ce00f80364C8B423567e58d2110` (Ethereum) | `0xC8140dA31E6bCa19b287cC35531c2212763C2059` | `0x09601A65e7de7BC8A19813D263dD9E98bFdC3c57` |
| `wstETH` | `0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0` (Ethereum) | `0x1ba9bE96A5c21dcdB9D22bEC3f00abCb6336fd65` | `0x601aC63637933D88285A025C685AC4e9a92a98dA` |

## Safety notes

- Keep gas funds on both source and destination chains.
- Start with a small test transfer for first-time routes.
- Verify chain/token/amount before signing.
- For unresolved failures, share wallet address and tx hash in Discord support.
