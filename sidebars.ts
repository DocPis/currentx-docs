import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Start Here',
      items: ['overview', 'intro', 'status'],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: [
        'tokenomics',
        {type: 'doc', id: 'tokenomics/crx-distribution', label: 'CRX Distribution & Leaderboard Rewards'},
      ],
    },
    {
      type: 'category',
      label: 'User guide',
      items: ['user-guide', 'dashboard', 'swap', 'liquidity', 'pools', 'farms', 'megavault', 'faq'],
    },
    {
      type: 'category',
      label: 'Technical details',
      items: ['contracts', 'architecture', 'migration-guide'],
    },
  ],
};

export default sidebars;
