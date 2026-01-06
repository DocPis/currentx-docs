---
id: architecture
title: Architecture and Flows
---

Technical overview of how the dApp interacts with Sepolia and its data sources.

## Network configuration

- Chain ID: `0xaa36a7` (Sepolia).
- Default RPC: `https://1rpc.io/sepolia` (overridable with `VITE_SEPOLIA_RPC`).
- The read-only provider is used for quotes, reserves, and balances when no signature is needed; when signing is required, `getProvider` selects the injected wallet (MetaMask/Trust/Rabby).

## Tokens and addresses

- Supported tokens are defined in `src/config/tokens.js` (ETH, WETH, CRX, USDC, USDT, DAI, WBTC).
- Uniswap V2 factory/router, MasterChef, and key LP addresses are centralized in `src/config/addresses.js`.
- A small in-memory custom token registry (`customTokens`) lets the UI show extra tokens alongside the base set.

## Swap paths and quotes

- Quotes are computed on-chain via `getV2Quote`/`getV2QuoteWithMeta`:
  - Uses a direct pair when available.
  - Otherwise tries a hop through WETH.
  - The WETH/USDC pair can be forced to a known address (`WETH_USDC_PAIR_ADDRESS`) to avoid factory mismatches.
- For ETH/WETH, the dApp calls `deposit`/`withdraw` on the WETH contract directly (no router).
- UI slippage is converted to basis points to derive `amountOutMin`/`minLiquidity`.

## Liquidity and balancing

- Pools are code-configured and merged with subgraph data. If the subgraph lacks `pairs` or `pairDayDatas`, the code falls back to `pairCreateds` or on-chain reserves.
- Depositing:
  - Uses `addLiquidityETH` when ETH is involved.
  - Uses `addLiquidity` for two ERC20s after approvals to the router.
  - When reserves exist, the UI suggests the balanced amount for the second token based on the first input.
- Withdrawing:
  - Reads LP and reserves via `getV2PairReserves`; if the user has no allowance to the router, approval is requested before `removeLiquidity`/`removeLiquidityETH`.

## Farming (MasterChef)

- Pool data and CRX emissions are loaded via `fetchMasterChefFarms`, which:
  - Reads `poolInfo`, `totalAllocPoint`, and `currentxPerBlock`.
  - Estimates APR by annualizing rewards per block and dividing by LP TVL (USD price from WETH/USDC or CRX/WETH).
- User data (staked, pending, LP balance) comes from `userInfo`, `pendingCurrentX`, and `balanceOf`.
- Stake/unstake/claim always use the signer provider; errors differentiate wallet rejections from RPC issues.

## Balance handling

- The `useBalances` hook reads ETH and configured ERC20s; it subscribes to new blocks to refresh balances nearly in real time.
- Loading flags and a refresh lock (`isRefreshing` + `pendingAddress`) prevent overlapping requests.
