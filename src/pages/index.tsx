import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
            <p className={styles.kicker}>CurrentX - Sepolia</p>
            <Heading as="h1" className={styles.heroTitle}>
              Ship swaps, liquidity, and farming with confidence
            </Heading>
            <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
              Everything you need to build on CurrentX: live Uniswap V2 routing
              on Sepolia, subgraph-backed stats, and CRX farming via MasterChef.
            </p>
            <div className={styles.chips}>
              <span>Swap V2 live</span>
              <span>Approvals to V2 Router</span>
              <span>Status page as source of truth</span>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--lg', styles.primaryButton)}
                to="/docs/intro">
                Get started
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.ghostButton)}
                to="/docs/status">
                Check live status
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
                Contract addresses and network params from the live dApp config.
              </li>
              <li>
                <span className={styles.dot} />
                Tokenomics and season timing with UTC/UK/Rome standard.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const telegramIcon = useBaseUrl('/img/social/telegram.png');
  const xIcon = useBaseUrl('/img/social/x.png');
  const discordIcon = useBaseUrl('/img/social/discord.png');

  return (
    <Layout
      title="CurrentX Docs"
      description="CurrentX swaps, liquidity, and CRX farming on Sepolia">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.community} id="community">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2">Stay connected</Heading>
              <p>Where to find the CurrentX app and community.</p>
            </div>
            <div className={styles.linkGrid}>
              <a className={styles.linkCard} href="https://currentx.app/" target="_blank" rel="noreferrer">
                <span className={styles.linkBadge}>App</span>
                <div className={styles.linkTitle}>Launch CurrentX</div>
                <div className={styles.linkDesc}>Open the Sepolia dApp for swaps, liquidity, and farming.</div>
              </a>
              <a className={styles.linkCard} href="https://t.me/currentxdex" target="_blank" rel="noreferrer">
                <span className={styles.socialBadge}>
                  <img className={styles.socialBadgeIcon} src={telegramIcon} alt="Telegram logo" />
                </span>
                <div className={styles.linkTitle}>Telegram</div>
                <div className={styles.linkDesc}>Join the chat for quick updates and support.</div>
              </a>
              <a className={styles.linkCard} href="https://x.com/currentxdex" target="_blank" rel="noreferrer">
                <span className={styles.socialBadge}>
                  <img className={styles.socialBadgeIcon} src={xIcon} alt="X logo" />
                </span>
                <div className={styles.linkTitle}>Twitter / X</div>
                <div className={styles.linkDesc}>Follow releases and product updates.</div>
              </a>
              <a className={styles.linkCard} href="https://discord.gg/g33rC3RT" target="_blank" rel="noreferrer">
                <span className={styles.socialBadge}>
                  <img className={styles.socialBadgeIcon} src={discordIcon} alt="Discord logo" />
                </span>
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
