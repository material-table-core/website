import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Unopinionated</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Material Table puts the control in your hands and stays out of your way.
      </>
    ),
  },
  {
    title: <>Extensible through modularity</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Material Table exposes a lot of it's internals. Ultimately this puts 'feature-functionality' in user land, which can be a double edged sword.
      </>
    ),
  },
  {
    title: <>Fully featured</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        🎉 Have your cake and eat it, too! 🎉
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  // Hack to get certain background color only on home page
  React.useEffect(() => {
    let html = document.querySelector('html.homepage-background-styles');
    if (!html) {
      html = document.querySelector('html');
      html.classList.add('homepage-background-styles');
    }

    return () => html.classList.remove('homepage-background-styles');
  });

  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="React datatable based on Material-UI">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              style={{ margin: 5 }}
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              target="_blank"
              to={useBaseUrl('https://oze4.github.io/material-table-core/#/demo/000')}>
              Examples
            </Link>
            <Link
              style={{ margin: 5 }}
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/about')}>
              Docs
            </Link>
            <Link
              style={{ margin: 5 }}
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              target="_blank"
              to={useBaseUrl('https://oze4.github.io/material-table-core/#/issue-tracker')}>
              Issue Tracker
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={`${styles.features} home-page-feature`}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
