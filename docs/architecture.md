---
id: architecture
title: Architecture and Flows
---

Technical overview of how the dApp interacts with MegaETH and its data sources.

## Network configuration

- Chain ID: `0x10e6` (MegaETH).
- Default RPC: `https://mainnet.megaeth.com/rpc` (override via your RPC env var if needed).
- The read-only provider is used for quotes, reserves, and balances when no signature is needed; when signing is required, `getProvider` selects the injected wallet (MetaMask/Trust/Rabby).

## Tokens and addresses

- Core addresses (factory, router, tokens, farms) are centralized in `src/config/addresses.js`.
- MegaETH addresses in use:
  - Factory: `0x1F49127E87A1B925694a67C437dd2252641B3875`
  - Router: `0x40276Cff28774FaFaF758992415cFA03b6E4689c`
  - CurrentX (CRX): `0xDEdDFD6F6fD2eDa3B0bC01c3Dfa03F2eA6f40504`
  - MasterChef: `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0`
  - WETH: `0x4200000000000000000000000000000000000006`
  - USDC: `0x4c99d545E82D32dA12Cc634a3964b1698073DA2B`
  - cUSD: `0xcCcc62962d17b8914c62D74FfB843d73B2a3cccC`
  - USDm: `0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E74`
- A small in-memory custom token registry (`customTokens`) lets the UI show extra tokens alongside the base set.

## Swap paths and quotes

- Quotes are computed on-chain via `getV2Quote`/`getV2QuoteWithMeta`:
  - Uses a direct pair when available.
  - Otherwise tries a hop through WETH.
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
  - Estimates APR by annualizing rewards per block and dividing by LP TVL (prices derived from available reference pairs on MegaETH).
- User data (staked, pending, LP balance) comes from `userInfo`, `pendingCurrentX`, and `balanceOf`.
- Stake/unstake/claim always use the signer provider; errors differentiate wallet rejections from RPC issues.

## Balance handling

- The `useBalances` hook reads ETH and configured ERC20s; it subscribes to new blocks to refresh balances nearly in real time.
- Loading flags and a refresh lock (`isRefreshing` + `pendingAddress`) prevent overlapping requests.
