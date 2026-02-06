---
id: onchain-references
title: On-chain References
---

Addresses and network parameters used by the CurrentX dApp on MegaETH.

## Network

- Chain ID (hex): `0x10e6`
- Chain ID (dec): `4326`
- Explorer: `https://megaeth.blockscout.com` (default; override via `VITE_EXPLORER_BASE` or `VITE_MEGAETH_EXPLORER`)

RPC URLs (default pool):
- `https://mainnet.megaeth.com/rpc`
- `https://rpc-megaeth-mainnet.globalstake.io`

WebSocket URLs:
- From env: `VITE_WS_URL`, `VITE_WS_URLS`, `VITE_MEGAETH_REALTIME_WS`
- Derived from the active RPC URL (http -> ws, `/rpc` -> `/ws`)
- Fallback: `wss://mainnet.megaeth.com/ws`

Subgraph:
- URL: `https://gateway.thegraph.com/api/subgraphs/id/AokDW2tqCMiFvVqXUEfiwY94mNXoBQfsszwd5bnPiNcr`
- API key (if using Graph gateway): `VITE_UNIV2_SUBGRAPH_API_KEY`

## Core contracts

### Uniswap V2 (liquidity pools)

| Component | Address | Notes |
| --- | --- | --- |
| Factory | `0xC60940F182F7699522970517f6d753A560546937` | Pair discovery (`allPairs`, `getPair`) |
| Router | `0x189b27c207b4cBBae1C65086F31383532443f5f2` | Add/remove liquidity |
| Pair code hash | `0x552cb211a6cb6b2c7b263255f787f454e28411eb3ffb49389d5b6e73cd2966d0` | Deterministic pair address |

### Uniswap V3 (swap + positions)

| Component | Address | Notes |
| --- | --- | --- |
| Factory | `0x09cF8A0b9e8C89bff6d1ACbe1467e8E335Bdd03E` | Pool discovery |
| Quoter V2 | `0x962e62DF3dF243844Bd89FfB5B061919725DCa2d` | Off-chain quoting |
| Position Manager | `0xA02E90A5F5eF73c434f5A7E6A77E6508f009cB9D` | NFT positions |
| Swap Router | `0x5a8BC70674d82Ac2bC04bE91Cf172F60169c50B3` | V3 router (not used by UI) |
| Universal Router | `0x2c61d16Ad68f030bec95370Ab8a0Ba60e7E7B0a6` | Swap execution in UI |
| Tick Lens | `0xD8Fe4A55f7f79D2937637671923E59d8488683C3` | Pool tick views |
| Interface Multicall | `0x47163ef055aC5EFdFDD946303F86820736BfBb8D` | V3 multicall |
| Migrator | `0xAA5B9F20e788063CD1e7e482c9F55b8c803E5456` | V2 -> V3 migration |
| Pool init code hash | `0xc5b9323f38f7ec5daae18bf2b6696c143def3728c6f6ed2aa34dcb31ad4fbf3f` | Deterministic pool address |

### Protocol + infra

| Component | Address | Notes |
| --- | --- | --- |
| CRX token | `0xDEdDFD6F6fD2eDa3B0bC01c3Dfa03F2eA6f40504` | CurrentX token (6 decimals) |
| MasterChef | `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0` | Farms (CRX emissions) |
| CRX/WETH LP | `0x340d63169285e5ae01a722ce762c0e81a7fa3037` | APR/price reference |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` | ERC20 approval for Universal Router |
| Multicall3 | `0xcA11bde05977b3631167028862bE2a173976CA11` | Batch on-chain reads |
| High-precision timestamp oracle | `0x6342000000000000000000000000000000000002` | Microsecond timestamp |

## Tokens

Only tokens with an address on the active network are included in the on-chain registry. Hidden tokens are not shown in the default UI.

| Symbol | Decimals | Address | Notes |
| --- | --- | --- | --- |
| ETH | 18 | Native | Native asset |
| WETH | 18 | `0x4200000000000000000000000000000000000006` | Wrapped ETH |
| CRX | 6 | `0xDEdDFD6F6fD2eDa3B0bC01c3Dfa03F2eA6f40504` | CurrentX |
| USDC | 6 | `0x4c99d545E82D32dA12Cc634a3964b1698073DA2B` | Stablecoin |
| USDT0 | 6 | `0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb` | Tether on MegaETH |
| CUSD | 18 | `0xcCcc62962d17b8914c62D74FfB843d73B2a3cccC` | Cap USD |
| STCUSD | 18 | `0x88887bE419578051FF9F4eb6C858A951921D8888` | Staked cUSD (liquidity blocked) |
| sUSDe | 18 | `0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2` | Hidden + liquidity blocked |
| USDe | 18 | `0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34` | Liquidity blocked |
| ezETH | 18 | `0x09601A65e7de7BC8A19813D263dD9E98bFdC3c57` | Hidden + liquidity blocked |
| wstETH | 18 | `0x601aC63637933D88285A025C685AC4e9a92a98dA` | Hidden + liquidity blocked |
| USDm | 18 | `0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7` | MegaUSD |
| MEGA | 18 | `0x28B7E77f82B25B95953825F1E3eA0E36c1c29861` | Mega token |
| BTC.b | 8 | `0xB0F70C0bD6FD87dbEb7C10dC692a2a6106817072` | Hidden + liquidity blocked |
| XBTC | 18 | TODO | Address not configured in `networks.js` |
| WUSD | 18 | TODO | Address not configured in `networks.js` |
| WUSDC | 6 | TODO | Address not configured in `networks.js` |
