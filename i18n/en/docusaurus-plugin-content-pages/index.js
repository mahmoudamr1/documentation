import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    title: '24/7 Support',
    Svg: require('@site/static/img/advantage-icon-1.svg').default,
    description: (
      <>
        What if you need help? Our support will always be by your side.
      </>
    ),
  },
  {
    title: 'No Coding Experience Required',
    Svg: require('@site/static/img/advantage-icon-2.svg').default,
    description: (
      <>
        You can create professional landing pages without needing a developer.
      </>
    ),
  },
  {
    title: 'Easily Build Landing Pages',
    Svg: require('@site/static/img/advantage-icon-3.svg').default,
    description: (
      <>
        You can build landing pages using just the mouse or import ready-made pages for most products.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Easy Orders
        </Heading>
        <p className="hero__subtitle">
          Create your free online store for life, easily and quickly.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://app.easy-orders.net/">
            Discover Easy Orders
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome to Easy Orders"
      description="Create your free online store for life with ease and speed.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
