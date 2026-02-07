---
id: user-guide
title: User Guide
---

This guide covers wallet connection, network behavior, and how to navigate CurrentX.

## Wallet connection and network

- Supported wallets: MetaMask, Trust Wallet, Rabby.
- On connect, the app attempts `wallet_switchEthereumChain` to MegaETH (`chainId 0x10e6`, decimal `4326`). If the chain is missing, it calls `wallet_addEthereumChain` using the RPC list and explorer from the active network preset.
- Mobile: open the site inside the Trust Wallet in-app browser. The wallet modal includes a deep link for Trust Wallet on iOS/Android.
- Session persistence: `sessionStorage` key `cx_session_connected` is set after a successful connect, so refreshes auto reconnect. Disconnect clears the session.
- When the wallet is on the wrong chain, swaps and liquidity actions are blocked until you switch to MegaETH.

## Whitelist

- The app shows a banner that links to `https://currentx.app/whitelist`.
- Flow: connect wallet, switch to MegaETH if prompted, submit the whitelist form.

## Navigation (tabs)

- [Overview](./overview): protocol summary, architecture, and V2/V3 comparison.
- [Dashboard](./dashboard): protocol TVL/volume and top pools (subgraph backed).
- [Swap](./swap): V2/V3 routing, quotes, and slippage.
- [Liquidity](./liquidity): V2 pools (LP tokens) and V3 concentrated positions (NFTs).
- [Pools](./pools): pool list, metrics, and APR breakdowns.
- [Farms](./farms): stake V2 LP tokens in MasterChef to earn CRX.
- [MegaVault](./megavault): managed liquidity vaults.
- [FAQ / Glossary](./faq): definitions and common questions.
- [Contracts](./contracts): network and on-chain addresses.

## Custom tokens (optional)

- The Liquidity page allows adding a custom token by contract address.
- Added tokens are stored in local storage under `__CX_CUSTOM_TOKENS__` and appear in the Swap and Liquidity selectors.
- Tokens blocked from liquidity (see Liquidity docs) cannot be added.

## Data refresh and realtime

- Balances refresh on new blocks and on MegaETH realtime feeds (`stateChanges` and `miniBlocks`).
- Realtime feeds are mainnet only; fallback polling is always active.
- Pool stats and dashboard metrics are subgraph backed with on-chain fallbacks. Errors show inline without blocking actions.

## Common issues

- Wallet rejection: error code `4001` / `ACTION_REJECTED`.
- RPC rate limit: retry, or reload to rotate the RPC pool.
- Wrong network: switch to MegaETH before retrying.
