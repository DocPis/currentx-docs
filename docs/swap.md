---
id: swap
title: Swap
---

- **Tokens**: ETH/WETH, CRX, USDC, USDT, cUSD, USDm, plus any custom tokens you add.
- **Inputs**: Set Sell/Buy tokens, enter an amount, or tap 25/50/75/100% of balance.
- **Quoting & LiveRoute**:
  - Uses a direct pair when available; otherwise one hop via WETH. ETH/WETH uses wrap/unwrap (no router fee).
  - LiveRoute listens to on-chain `Sync` events for every pool in the active path and updates the path, price impact, and min received in real time.
  - The `Route (Live)` card under "You receive" shows Path, Expected output, Price impact, Min received (based on the active execution mode), Updated time, and a badge marking Turbo or Protected.
- **Execution**:
  - ERC20 sells: allowance check; "Approve" appears when needed.
  - Swap shows success/error and a link to the MegaETH explorer when mined.
  - Execution Proof shows Expected vs Executed, Slippage (the applied mode-specific value), Gas used, Tx link, and an outcome grade (Great/OK/Bad).
- **Tips**: If quoting fails, check token addresses, subgraph availability, or try a smaller size on low-liquidity pairs.

## Swap Execution Modes (Turbo/Protected) & LiveRoute

### Using the toggle
- In the swap panel, choose between `Turbo` and `Protected`; the active choice is reflected as a badge inside the `Route (Live)` card.
- Toggle changes update immediately without refreshing the page; the min received figure and slippage logic follow the selected mode.

### LiveRoute: how to read it
- Route (Live) streams updates from the `Sync` events of the LPs involved in the current path, so Path, Price impact, and Min received shift as reserves move.
- An Updated timestamp and status dot show recency; values freeze only while the quote is locked for signature.
- If the route changes (e.g., better path found), the card switches path and recomputes impact/min received using the active mode.

### Turbo mode
- Calculates effective slippage automatically from live price impact and short-term quote volatility; hard cap at 5%.
- Before sending the transaction, if the live quote has drifted by ~1.5% or more, the UI refreshes the quote and asks you to accept the new numbers.
- Min received uses the calculated Turbo slippage, and the Execution Proof shows the exact slippage applied.

### Protected mode
- Tight slippage (at most 0.8%, floor 0.05%) and conservative routing: direct pair when available or a single hop via WETH.
- If the quote moves by ~0.9% before signing, the app re-quotes so you can confirm updated numbers.
- Min received is based on the Protected slippage, and the Execution Proof records the applied value.

### Quote lock and signing
- When you click Swap and the wallet prompt opens, the quote locks: LiveRoute pauses and shows the last values.
- Turbo/Protected remain active during the lock; the pre-check re-quote (Turbo ~1.5%, Protected ~0.9%) happens before the lock starts.
- After signing (or canceling), LiveRoute resumes immediately with fresh reserves.

### Network switch and presets
- If a testnet preset is configured, a `Mainnet / Testnet` toggle appears in the header; your choice is persisted and the page reloads to pick the correct RPC and addresses from the preset.
- The toggle is also influenced by `VITE_DEFAULT_NETWORK_PRESET`: setting it to `testnet` loads the testnet preset by default (unless the saved user choice overrides it).

### Testnet environment variables
- Provide a testnet preset with the same fields used on mainnet: RPC endpoint, factory, router, WETH, token addresses (CRX, USDC, USDT, cUSD, USDm, or any you expose), and protocol contracts (e.g., MasterChef, incentives).
- Add them to your Vite env file (or preset JSON) with testnet-specific values. A typical layout is:
  - `VITE_DEFAULT_NETWORK_PRESET=testnet`
  - `VITE_RPC_URL_TESTNET=https://your-testnet-rpc`
  - `VITE_FACTORY_ADDRESS_TESTNET=0x...` and `VITE_ROUTER_ADDRESS_TESTNET=0x...`
  - `VITE_WETH_ADDRESS_TESTNET=0x...` (wrapped native token)
  - Token addresses such as `VITE_TOKEN_CRX_TESTNET=0x...`, `VITE_TOKEN_USDC_TESTNET=0x...`, `VITE_TOKEN_USDT_TESTNET=0x...`, `VITE_TOKEN_CUSD_TESTNET=0x...`, `VITE_TOKEN_USDM_TESTNET=0x...`, plus any extra tokens you list in the UI.
  - Protocol addresses such as `VITE_MASTERCHEF_ADDRESS_TESTNET=0x...` or other contract IDs the swap UI references.
- After setting the env, restart the app so the testnet preset and the Mainnet/Testnet toggle pick up the new values.
