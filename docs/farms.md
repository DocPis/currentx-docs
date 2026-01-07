---
id: farms
title: Farms (staking LP for CRX)
---

- Data source: MasterChef contract (`MASTER_CHEF_ADDRESS`, `0x0e59533B28df0537bc28D05618a2c4f20EBE07a0`) on MegaETH.
- Each farm shows LP tokens, estimated APR (CRX emission/TVL), TVL, and accrued CRX.
- Auto-refresh:
  - Farm list every 30s.
  - User data (staked, pending, LP balance) every 20s when connected.
- Actions:
  - `Deposit`: approves LP on MasterChef if needed, then deposits.
  - `Withdraw`: unstakes LP.
  - `Claim`: calls `deposit(0)` to harvest CRX only.
- After each action the transaction hash is shown with a MegaETH explorer link.
- Tips: APR depends on TVL and CRX emission; if APR looks off, refresh or wait for the next auto-sync. Pending rewards update every 20s while connected.
