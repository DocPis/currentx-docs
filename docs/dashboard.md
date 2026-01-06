---
id: dashboard
title: Dashboard
---

- **What you see**: TVL, total volume, pair count, and tx count from the configured Uniswap V2 subgraph (`VITE_UNIV2_SUBGRAPH`).
- **Charts**: 7-day history (TVL line + volume bars) plus a "Today" datapoint computed live. Table shows daily TVL/volume.
- **Resilience**: If the subgraph fails, an inline alert appears but the rest of the UI stays usable.
- **Status**: CurrentX is applied to the MegaETH Frontier program (pending review).
