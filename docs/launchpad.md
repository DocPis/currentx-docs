---
id: launchpad
title: Launchpad
---


## Table of Contents
- [Overview](#overview)
- [Market](#market)
- [Filtering & Sorting](#filtering--sorting)
- [Live Buys Feed](#live-buys-feed)
- [Token Detail](#token-detail)
- [Trading](#trading)
- [Create and Manage Tokens](#create-and-manage-tokens)
- [Vault & Locker](#vault--locker)

## Overview

Launchpad brings token discovery, market tracking, and trading into a single workflow.

- Access path: `/launchpad`.
- It is currently hidden from the main tab navigation.
- Users can still open it directly by URL.

## Market

The Market view lists available tokens in a card-based layout.

- Cards show key token metrics at a glance.
- Infinite scrolling loads additional listings as users continue browsing.
- A default sort is applied on first load and can then be changed.

## Filtering & Sorting

Filtering and sorting controls help users narrow results and reprioritize the list quickly.

Available filters:
- Trending
- New
- Top Market Cap
- Top Volume 24h
- Top Gainers

Available sorting options:
- Market Cap
- Volume 24h
- Buys per Minute
- Price change 1h
- Price change 24h
- Newest

## Live Buys Feed

The Live Buys Feed shows real-time buy activity to highlight market momentum.

- New buy events stream continuously.
- Users can filter the feed by token to focus on one market.

## Token Detail

The token detail page combines charting, market stats, and project context.

- Chart support includes Dexscreener when available, with an internal sparkline fallback.
- Key statistics include price, price change, market cap, volume, and liquidity.
- The Activity section shows buys, sells, and trades.
- The About section includes description, website, creator, and launch parameters.

## Trading

The trading widget lets users buy and sell tokens directly from the token detail page.

- It provides price estimates before confirmation.
- It handles both buy and sell flows in one place.
- If backend services are unavailable, clear error messages are shown.

## Create and Manage Tokens

`Create Token` and `My Tokens` are planned but not yet active.

- `Create Token` is planned for launching new tokens.
- `My Tokens` is planned for managing and monitoring created tokens.

## Vault & Locker

Vault and Locker are future features for advanced post-launch management.

- Vault is intended for liquidity management workflows.
- Locker is intended for token locking based on project rules.
