---
id: migration-guide
title: Migration Guide
---

This guide is for integrators updating from older CurrentX docs or configs to the current release.

## 1) Network preset

- Network is MegaETH mainnet only (`chainId 0x10e6`, decimal `4326`).
- Provide RPC URLs via `VITE_RPC_URL` / `VITE_RPC_URLS` (the app rotates on rate limits).
- Provide WebSocket URLs via `VITE_WS_URL` / `VITE_WS_URLS` or rely on RPC-derived WS + fallback `wss://mainnet.megaeth.com/ws`.
- Subgraph: `VITE_UNIV2_SUBGRAPH` with `VITE_UNIV2_SUBGRAPH_API_KEY` when using the Graph gateway.

## 2) Swap migration (V3)

- Swap now uses Uniswap V3 Quoter V2 and the Universal Router.
- ERC20 approvals must target **Permit2** (`0x000000000022D473030F116dDEE9F6B43aC78BA3`).
- If you previously approved the V2 router, update your approval flow.

## 3) Liquidity migration

- V2 pools remain, but the Liquidity page also supports V3 positions via the Nonfungible Position Manager.
- V3 positions are minted with `createAndInitializePoolIfNecessary` and `mint`.
- Increase, decrease, and collect actions are not exposed in the UI yet. TODO.

## 4) Address updates

- V2 Factory: `0xC60940F182F7699522970517f6d753A560546937`
- V2 Router: `0x189b27c207b4cBBae1C65086F31383532443f5f2`
- V3 Factory: `0x09cF8A0b9e8C89bff6d1ACbe1467e8E335Bdd03E`
- Universal Router: `0x2c61d16Ad68f030bec95370Ab8a0Ba60e7E7B0a6`
- Position Manager: `0xA02E90A5F5eF73c434f5A7E6A77E6508f009cB9D`

## 5) Token registry changes

- USDm address is `0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7`.
- New tokens in the registry: `USDT0`, `STCUSD`, `USDe`, `sUSDe`, `ezETH`, `wstETH`, `MEGA`.
- Liquidity blocked tokens are documented in the Liquidity page.

## 6) Checklist

- Update env vars and addresses from `src/shared/config/networks.js` and `src/shared/config/addresses.js`.
- Update swap integration to use Permit2 and the Universal Router.
- Validate token decimals and allowances after the registry update.
