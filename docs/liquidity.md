---
id: liquidity
title: Liquidity (V2 Pools + V3 Positions)
---

The Liquidity tab supports both Uniswap V2 pools (LP tokens) and Uniswap V3 concentrated positions (NFTs).

## V2 pools

- Pools are loaded directly from the V2 factory (`allPairs`) and merged with subgraph stats.
- TVL, volume, and fees use the subgraph when available; on-chain reserves are used as fallback.
- A Quickstart card links directly to the `CRX/WETH` pool when it exists.

Add liquidity (V2):
- Enter both token amounts. The UI suggests balanced amounts based on current reserves.
- ETH pairs call `addLiquidityETH`; ERC20 pairs call `addLiquidity`.
- Router approvals are requested per token when needed.
- If the pair does not exist, the app calls `createPair` first, then continues.
- Slippage: default `0.5%`, max `50%` (min amounts are derived from this value).
- WETH is ERC20. If you select WETH instead of ETH, you must wrap ETH first.

Withdraw liquidity (V2):
- Enter LP amount or use 25/50/75/100% shortcuts.
- The router is approved to spend LP tokens if needed.
- `removeLiquidity` / `removeLiquidityETH` is used with min amounts computed from reserves and slippage.

Tokens blocked from liquidity:
- `BTC.b` / `BTCB` (`0xB0F70C0bD6FD87dbEb7C10dC692a2a6106817072`)
- `sUSDe` (`0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2`)
- `ezETH` (`0x09601A65e7de7BC8A19813D263dD9E98bFdC3c57`)
- `wstETH` (`0x601aC63637933D88285A025C685AC4e9a92a98dA`)
- `stcUSD` (`0x88887bE419578051FF9F4eb6C858A951921D8888`)
- `USDe` (`0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34`)

## V3 positions (concentrated liquidity)

- Contract: Nonfungible Position Manager (NFT positions).
- Fee tiers: `0.01%`, `0.05%`, `0.30%`, `1.00%`.
- Tick spacing: `1`, `10`, `60`, `200` (respectively).

Create a position (V3):
- Choose Token A, Token B, fee tier, and range.
- Pool initialization: if the pool is missing or uninitialized, the app calls `createAndInitializePoolIfNecessary` using the ratio of your deposit amounts.
- Approvals: ERC20 tokens are approved to the Position Manager with `MAX_UINT256` if needed.
- Slippage: default `0.5%`, max `50%`, applied to `amount0Min` / `amount1Min`.

Range modes:
- `Full range`: uses min/max ticks (`-887272` to `887272`) rounded to spacing.
- `Custom`: input price bounds; the UI converts price to ticks and rounds to spacing. If the token order is reversed, the price range is inverted to match token0/token1 ordering.

View positions (V3):
- Positions are listed from the Position Manager and displayed as NFTs.
- Metadata is loaded from `tokenURI` (supports IPFS and base64 JSON).
- Actions beyond minting (increase, decrease, collect) are not exposed in the UI yet. TODO.

## Custom tokens

- Add custom tokens by contract address in the Liquidity page.
- Metadata (symbol, name, decimals) is fetched from the token contract.
- Added tokens are stored in local storage under `__CX_CUSTOM_TOKENS__` and reused in Swap.
