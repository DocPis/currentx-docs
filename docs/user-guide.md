---
id: user-guide
title: User Guide
---


This guide covers wallet connection, network behavior, and tab navigation in the current app.

## Wallet connection and network

- Supported wallets: MetaMask, Trust Wallet, Rabby.
- Connect flow uses `eth_requestAccounts` through the selected injected wallet.
- Current target network: Sepolia (`0xaa36a7` / `11155111`).
- If the wallet is on the wrong network, the header shows `Wrong network` and transactions may fail until you switch manually in wallet settings.
- Session persistence: `sessionStorage` key `cx_session_connected` enables auto-reconnect behavior after refresh.

## Navigation (tabs)

App tabs currently live:
- `Dashboard`
- `Swap`
- `Liquidity`
- `Farms`

Docs pages that provide extended reference:
- [Overview](./overview)
- [Status](./status)
- [Contracts](./contracts)
- [Tokenomics](./tokenomics)

## Custom tokens

- Custom tokens can be registered in Liquidity/Swap flows.
- They are stored in local storage key `__CX_CUSTOM_TOKENS__`.

## Data refresh

- Wallet balances refresh on new blocks.
- Pool and dashboard stats are subgraph-backed with on-chain fallbacks.
- If subgraph calls fail, UI warnings are shown and core actions remain available.

## Common issues

- Wallet rejection: error code `4001` / `ACTION_REJECTED`.
- No wallet detected: open the dApp in an injected-wallet browser context.
- Wrong network: switch to Sepolia and retry.

