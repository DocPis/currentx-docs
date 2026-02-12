---
id: contracts
title: Contracts and Addresses
---


## Table of Contents
- [Network](#network)
- [Infrastructure](#infrastructure)
- [Uniswap V2](#uniswap-v2)
- [Uniswap V3 and Universal Router](#uniswap-v3-and-universal-router)
- [Farms](#farms)
- [Tokens](#tokens)
- [Unset in Current Preset](#unset-in-current-preset)
- [Notes](#notes)

## Network

- Chain: MegaETH
- Chain ID (dec): `4326`
- Chain ID (hex): `0x10e6`
- Explorer: `https://megaeth.blockscout.com`

## Infrastructure

| Component | Address |
| --- | --- |
| Multicall3 | `0xcA11bde05977b3631167028862bE2a173976CA11` |
| High precision timestamp oracle | `0x6342000000000000000000000000000000000002` |
| Permit2 | `0x000000000022D473030F116dDEE9F6B43aC78BA3` |

## Uniswap V2

| Component | Address |
| --- | --- |
| V2 Factory | `0xC60940F182F7699522970517f6d753A560546937` |
| V2 Router | `0x189b27c207b4cBBae1C65086F31383532443f5f2` |
| V2 Pair code hash | `0x552cb211a6cb6b2c7b263255f787f454e28411eb3ffb49389d5b6e73cd2966d0` |

## Uniswap V3 and Universal Router

| Component | Address |
| --- | --- |
| V3 Factory | `0x09cF8A0b9e8C89bff6d1ACbe1467e8E335Bdd03E` |
| V3 Quoter V2 | `0x962e62df3df243844bd89ffb5b061919725dca2d` |
| V3 Tick Lens | `0xd8fe4a55f7f79d2937637671923e59d8488683c3` |
| V3 Swap Router | `0x5a8bc70674d82ac2bc04be91cf172f60169c50b3` |
| V3 Position Manager | `0xa02e90a5f5ef73c434f5a7e6a77e6508f009cb9d` |
| V3 Multicall | `0x47163ef055ac5efdfdd946303f86820736bfbb8d` |
| V3 Migrator | `0xAA5B9F20e788063CD1e7e482c9F55b8c803E5456` |
| V3 Pool init code hash | `0xc5b9323f38f7ec5daae18bf2b6696c143def3728c6f6ed2aa34dcb31ad4fbf3f` |
| Universal Router | `0x2c61d16Ad68f030bec95370Ab8a0Ba60e7E7B0a6` |

## Farms

| Component | Address |
| --- | --- |
| V3 Staker | `0xc6a9dB70b5618DfbCA05Fa7db11bEC48782D5590` |
| MasterChef (legacy address still configured) | `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0` |
| CRX/WETH LP (legacy reference) | `0x340d63169285e5ae01a722ce762c0e81a7fa3037` |

## Tokens

| Symbol | Address |
| --- | --- |
| WETH | `0x4200000000000000000000000000000000000006` |
| USDT0 | `0xB8CE59FC3717ada4C02eaDF9682A9e934F625ebb` |
| CUSD | `0xcCcc62962d17b8914c62D74FfB843d73B2a3cccC` |
| STCUSD | `0x88887bE419578051FF9F4eb6C858A951921D8888` |
| sUSDe | `0x211Cc4DD073734dA055fbF44a2b4667d5E5fE5d2` |
| USDe | `0x5d3a1Ff2b6BAb83b63cd9AD0787074081a52ef34` |
| ezETH | `0x09601A65e7de7BC8A19813D263dD9E98bFdC3c57` |
| wstETH | `0x601aC63637933D88285A025C685AC4e9a92a98dA` |
| USDm | `0xFAfDdbb3FC7688494971a79cc65DCa3EF82079E7` |
| CRX | `0xBd5e387fa453ceBf03B1A6a9dFe2a828b93AA95B` |
| MEGA | `0x28B7E77f82B25B95953825F1E3eA0E36c1c29861` |
| BTC.b | `0xB0F70C0bD6FD87dbEb7C10dC692a2a6106817072` |

## Unset in Current Preset

The following addresses are intentionally empty in `src/shared/config/networks.js` and should not be treated as live until the preset is updated:
- `USDC_ADDRESS`
- `XBTC_ADDRESS`
- `WUSD_ADDRESS`
- `WUSDC_ADDRESS`

## Notes

- Values are sourced from `currentx-dex/src/shared/config/networks.js` and `currentx-dex/src/shared/config/addresses.js`.
- When addresses change, update this page together with [Status](./status).
