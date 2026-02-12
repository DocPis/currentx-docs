---
id: architecture
title: Architecture and Flows
---


This page summarizes how the CurrentX dApp is wired today, which contracts it uses, and where the runtime configuration lives.

## Configuration entry points

From `../currentx-dex`:
- Network and providers: `src/config/web3.js`
- Addresses: `src/config/addresses.js`
- Tokens: `src/config/tokens.js`
- ABIs: `src/config/abis.js`
- Swap math and pair reads: `src/services/amm.js`
- Subgraph integration: `src/config/subgraph.js`

## Network and providers

- Active target network: Ethereum Sepolia (`0xaa36a7` / `11155111`).
- Read-only provider: `VITE_SEPOLIA_RPC` (fallback `https://1rpc.io/sepolia`).
- Wallet provider: injected wallet via EIP-1193.

## Data sources

- Primary market data: V2-compatible subgraph (`VITE_UNIV2_SUBGRAPH`).
- Fallbacks: on-chain reserve reads when subgraph data is missing.
- No production realtime WebSocket module is wired in the current frontend codebase.

## Swap (live)

- Routing: direct pair or one hop via `WETH`.
- Quote source: V2 reserves from pair contracts (`getReserves`).
- Execution: V2 Router `swapExact*` methods.
- ERC20 approvals: V2 Router spender only.

Core addresses from current config:
- V2 Factory: `0xb70112d72da5d6df0bb2b26a2307e4ba27cfe042`
- V2 Router: `0xf9ac1ee27a2db3a471e1f590cd689dee6a2c391d`

## Liquidity (live)

- Liquidity flows are V2 LP flows (add/remove via V2 Router).
- LP token approvals also target V2 Router.
- V3 position management is not exposed in the current UI.

## Farms (live)

- Farms use MasterChef with V2 LP staking.
- LP token approvals target MasterChef.
- Claim flow uses `deposit(pid, 0)`.

## Not live in current swap path

- Uniswap V3 Quoter V2
- Universal Router
- Permit2

These are not used by the current swap implementation and should not be treated as live routing dependencies.

