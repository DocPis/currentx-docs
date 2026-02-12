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
    title: 'Smart swaps',
    pill: 'Swap',
    accent: 'linear-gradient(135deg, #0ea5e9, #2563eb)',
    href: '/docs/swap',
    description: (
      <>
        Universal Router execution with smart V3 + V2 routing, Permit2 approvals,
        and slippage-aware min received checks.
      </>
    ),
  },
  {
    title: 'V2 pools + V3 positions',
    pill: 'Liquidity',
    accent: 'linear-gradient(135deg, #22d3ee, #34d399)',
    href: '/docs/liquidity',
    description: (
      <>
        Manage classic V2 LP positions and concentrated V3 positions in one
        liquidity surface.
      </>
    ),
  },
  {
    title: 'Incentives on V3',
    pill: 'Farms',
    accent: 'linear-gradient(135deg, #a855f7, #6366f1)',
    href: '/docs/farms',
    description: (
      <>
        Stake V3 positions into live incentive programs and track reward flows
        directly from the app.
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
          <p>Built around the exact flows currently live in the MegaETH dApp.</p>
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
