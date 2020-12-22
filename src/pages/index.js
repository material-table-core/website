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
      <header className={classnames("hero hero-primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.btnHover)} to={useBaseUrl("docs/getting-started/install")}>
              Docs
            </Link>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.btnHover)} to="https://material-table-core.github.io/examples">
              Examples
            </Link>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.btnHover)} to="https://github.com/material-table-core/core/discussions">
              More Info
            </Link>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.hideMobile, styles.btnHover)} to="https://github.com/mbrn/material-table">
              mbrn/material-table
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className={classnames(styles.tac)}>
          <p>
            Fork of <code>mbrn/material-table</code>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
