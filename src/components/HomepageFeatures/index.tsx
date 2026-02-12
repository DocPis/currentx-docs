import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  pill: string;
  accent: string;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamless swaps',
    pill: 'Swap',
    accent: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    href: '/docs/swap',
    description: (
      <>
        ETH/WETH wrap and Uniswap V2 routing with allowance checks, price
        impact, and min received based on your slippage.
      </>
    ),
  },
  {
    title: 'Liquidity without guesswork',
    pill: 'Liquidity',
    accent: 'linear-gradient(135deg, #22d3ee, #34d399)',
    href: '/docs/liquidity',
    description: (
      <>
        Guided add/remove flows, balanced suggestions from on-chain reserves,
        and fallback TVL estimates when the subgraph is missing data.
      </>
    ),
  },
  {
    title: 'Earn CRX from your LPs',
    pill: 'Farming',
    accent: 'linear-gradient(135deg, #a855f7, #6366f1)',
    href: '/docs/farms',
    description: (
      <>
        Stake LP tokens in the MasterChef, track APR and pending CRX, and
        inspect transactions on Sepolia explorer links.
      </>
    ),
  },
];

function Feature({title, description, pill, accent, href}: FeatureItem) {
  return (
    <div className={styles.card}>
      <Link to={href} className={styles.cardLink}>
        <div className={styles.pill} style={{backgroundImage: accent}}>
          {pill}
        </div>
        <Heading as="h3" className={styles.cardTitle}>
          {title}
        </Heading>
        <p className={styles.cardBody}>{description}</p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features} id="highlights">
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Why CurrentX</Heading>
          <p>Built around the exact flows currently live in the Sepolia dApp.</p>
        </div>
        <div className={styles.featureGrid}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
