---
id: user-guide
title: User Guide
---


This guide covers wallet connection, network behavior, and tab navigation in the current app.

## Wallet connection and network

- Supported injected wallets include MetaMask, Trust Wallet, and Rabby.
- Connect flow uses `eth_requestAccounts` and can prompt network add/switch to MegaETH.
- Current target network: MegaETH (`0x10e6` / `4326`).
- If wallet is on the wrong network, the header shows `Wrong network` and transactions can fail until switch is completed.
- Session persistence uses `sessionStorage` key `cx_session_connected` for reconnect behavior.

## Navigation (tabs)

App tabs currently live:
- `Dashboard`
- `Swap`
- `Bridge`
- `Liquidity`
- `Pools`
- `Points`
- `Farms`
- `MegaVault`

Docs pages for deeper reference:
- [Overview](./overview)
- [Status](./status)
- [Contracts](./contracts)
- [Tokenomics](./tokenomics)

## Custom tokens

- Custom tokens can be registered in Liquidity/Swap flows.
- They are stored in local storage key `__CX_CUSTOM_TOKENS__`.

## Data refresh

- Wallet balances refresh on new blocks and periodic intervals.
- Realtime updates are available on MegaETH websocket feeds (`stateChanges`, `miniBlocks`) when endpoints are configured.
- Pool and dashboard stats are subgraph-backed with on-chain fallbacks.

## Common issues

- Wallet rejection: error code `4001` / `ACTION_REJECTED`.
- No wallet detected: open the dApp in an injected-wallet browser context.
- Wrong network: switch to MegaETH and retry.
- Swap approval error: complete Permit2 + Universal Router allowance flow before retrying.
