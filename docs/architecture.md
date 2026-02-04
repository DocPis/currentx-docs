---
id: architecture
title: Architecture and Flows
---

This page summarizes how the CurrentX dApp is wired to MegaETH, which contracts it uses, and where configuration lives.

## Configuration entry points

- Network preset: `src/shared/config/networks.js`
- Addresses: `src/shared/config/addresses.js`
- Token registry: `src/shared/config/tokens.js`
- ABI registry: `src/shared/config/abis.js`
- Web3 utilities and provider selection: `src/shared/config/web3.js`

## Network and providers

- Active network: MegaETH mainnet (`chainId 0x10e6`, decimal `4326`).
- RPC pool: built from env vars and preset defaults, with rotation on rate limits.
- Read-only provider prefers injected wallets to avoid CORS, then falls back to RPC URLs.
- Explorer base URL is pulled from the network preset.

## Data sources

- Subgraph (Uniswap V2 schema): `src/shared/config/subgraph.js`.
- Cache TTL: 20s, retries: 2.
- Optional proxy: `VITE_SUBGRAPH_PROXY` (for CORS).
- Realtime feed: MegaETH websockets (`stateChanges` and `miniBlocks`) via `src/shared/services/realtime.js`.

## Swap (V3)

- Quoting: Uniswap V3 Quoter V2.
- Routing: direct or WETH hop, fee tiers `0.01%`, `0.05%`, `0.30%`, `1.00%`.
- Execution: Universal Router `execute` with `V3_SWAP_EXACT_IN` and optional wrap/unwrap steps.
- Approvals: Permit2 (spender) with Exact or Unlimited modes.

## Liquidity

V2 pools:
- Pool list is built from the V2 Factory `allPairs` plus token metadata from the registry and on-chain lookups.
- Live stats (TVL, volume, fees) are fetched from the subgraph, with on-chain reserve fallback.
- Pair creation is handled by `createPair` before the first addLiquidity.

V3 positions:
- Positions are minted through the Nonfungible Position Manager.
- Ranges are converted to ticks and rounded to the fee tier tick spacing.
- If a pool is not initialized, `createAndInitializePoolIfNecessary` is called using the deposit ratio.
- Position NFTs are rendered using `tokenURI` (IPFS and base64 supported).

## Farms (MasterChef)

- Pools and APR are loaded from MasterChef via `poolInfo`, `totalAllocPoint`, and `currentxPerBlock`.
- APR uses on-chain LP reserves with subgraph fallback.
- Claim uses `deposit(pid, 0)`.

## Balances and multicall

- Balances are refreshed per block and via realtime miniBlocks.
- ERC20 reads are batched with Multicall3 when available; direct RPC is used as fallback.
- Custom tokens are stored in local storage under `__CX_CUSTOM_TOKENS__`.
