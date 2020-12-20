import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={`${siteConfig.title}`}>
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--secondary button--lg", styles.getStarted)} to={useBaseUrl("docs/getting-started/install")}>
              Documentation
            </Link>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--secondary button--lg", styles.getStarted)} to="https://github.com/material-table-core/refactor-material-table/discussions/4">
              Refactor Roadmap
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </Layout>
  );
}

export default Home;
