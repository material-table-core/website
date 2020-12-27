import React from 'react';
import clsx from 'clsx';
import classnames from "classnames";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';


export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className={classnames("hero__title", styles.heroTitle)}>{siteConfig.title}</h1>
          <div className={classnames("hero__subtitle", styles.heroSubTitle)}>
            <h3>
              A fork of
              <Link target="_blank" rel="noopener noreferrer" to="https://github.com/mbrn/material-table">
                <code className={classnames(styles.inverseColor)}>mbrn/material-table</code>
              </Link>
            </h3>
          </div>
          <div className={styles.buttons}>
            <Link className={classnames("button button--outline button--secondary button--lg", styles.btnHover)} to={useBaseUrl("/docs")}>
              Docs
            </Link>
            <Link className={classnames("button button--outline button--secondary button--lg", styles.btnHover)} to={useBaseUrl("/demos")}>
              Demos
            </Link>
          </div>
        </div>
      </header>
      <main>
      </main>
    </Layout>
  );
}
