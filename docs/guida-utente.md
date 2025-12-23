---
id: guida-utente
title: User guide
---

This page covers the core flows of the dApp: wallet connection, data loading, and interacting with swap, liquidity, and farming.

## Wallet connection and network

- Supported wallets in the modal: MetaMask, Trust Wallet, and Rabby (auto-detected when installed).
- Network: Sepolia (`chainId 0xaa36a7`). If the wallet is on a different chain, the header shows “Wrong network”.
- Active sessions are remembered via `sessionStorage`; on refresh the dApp attempts to reconnect without prompting again.

## Where to go next

- [Dashboard](./dashboard): TVL/volume stats, 7-day charts, and live protocol metrics (subgraph + on-chain fallback).
- [Swap](./swap): Uniswap V2 swaps with allowance checks, price impact, and wrap/unwrap for ETH/WETH.
- [Liquidity](./liquidity): Guided add/remove flows, balanced amounts, approvals, and on-chain TVL fallback.
- [Farms](./farms): Stake LP in MasterChef, view APR/pending CRX, and claim rewards.

## Notes and quick fixes

- Wallet rejections (code 4001 or ACTION_REJECTED) are surfaced as non-blocking errors.
- Deposit balancing suggestions rely on current reserves; if the pool is empty, no suggestion is shown.
- Balance snapshots also refresh on each new block via a provider listener.
