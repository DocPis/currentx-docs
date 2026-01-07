import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroBackdrop} />
      <div className="container">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>CurrentX - MegaETH</p>
            <Heading as="h1" className={styles.heroTitle}>
              Ship swaps, liquidity, and farming with confidence
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Everything you need to build on the CurrentX DEX: live Uniswap V2
              quotes on MegaETH, subgraph-backed stats, and CRX farming via MasterChef.
            </p>
            <div className={styles.chips}>
              <span>Live quotes & price impact</span>
              <span>Guided liquidity flows</span>
              <span>CRX rewards & LP staking</span>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--lg', styles.primaryButton)}
                to="/docs/intro">
                Get started
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.ghostButton)}
                href="https://currentx.app/"
                target="_blank"
                rel="noreferrer">
                Launch the app
              </Link>
            </div>
          </div>

          <div className={styles.heroCard}>
            <div className={styles.cardTitle}>What's inside</div>
            <ul className={styles.cardList}>
              <li>
                <span className={styles.dot} />
                Swap flow with allowance checks and ETH/WETH wrap/unwrap.
              </li>
              <li>
                <span className={styles.dot} />
                Liquidity flows with balanced suggestions and on-chain TVL fallback.
              </li>
              <li>
                <span className={styles.dot} />
                Farms powered by MasterChef with CRX emission APR.
              </li>
              <li>
                <span className={styles.dot} />
                Contract addresses, env vars, and environment setup for MegaETH.
              </li>
              <li>
                <span className={styles.dot} />
                Applied for the MegaETH Frontier program.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="CurrentX Docs"
      description="CurrentX swaps, liquidity, and CRX farming on MegaETH">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.community} id="community">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Stay connected</Heading>
              <p>Where to find the CurrentX dApp and community.</p>
            </div>
            <div className={styles.linkGrid}>
              <a className={styles.linkCard} href="https://currentx.app/" target="_blank" rel="noreferrer">
                <span className={styles.linkBadge}>App</span>
                <div className={styles.linkTitle}>Launch CurrentX</div>
                <div className={styles.linkDesc}>Open the MegaETH dApp for swaps, liquidity, and farming.</div>
              </a>
              <a className={styles.linkCard} href="https://t.me/currentxdex" target="_blank" rel="noreferrer">
                <span className={styles.linkBadge}>Telegram</span>
                <div className={styles.linkTitle}>Telegram</div>
                <div className={styles.linkDesc}>Join the chat for quick updates and support.</div>
              </a>
              <a className={styles.linkCard} href="https://x.com/currentxdex" target="_blank" rel="noreferrer">
                <span className={styles.linkBadge}>X</span>
                <div className={styles.linkTitle}>Twitter / X</div>
                <div className={styles.linkDesc}>Follow news, releases, and testnet milestones.</div>
              </a>
              <a className={styles.linkCard} href="https://discord.gg/g33rC3RT" target="_blank" rel="noreferrer">
                <span className={styles.linkBadge}>Discord</span>
                <div className={styles.linkTitle}>Discord</div>
                <div className={styles.linkDesc}>Connect with the team and other builders.</div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
