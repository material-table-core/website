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
          <p className={classnames(styles.tac, "hero__subtitle")}>
              <h3>
                A fork of
                <Link target="_blank" rel="noopener noreferrer" to="https://github.com/mbrn/material-table">
                  <code>mbrn/material-table</code>
                </Link>
              </h3>
          </p>
          <div className={styles.buttons}>
            <Link target="_blank" rel="noopener noreferrer" style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.btnHover)} to="https://github.com/material-table-core/core#about">
              About
            </Link>
            <Link style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.btnHover)} to={useBaseUrl("docs/getting-started/install")}>
              Docs
            </Link>
            <Link target="_blank" rel="noopener noreferrer" style={{ margin: 5 }} className={classnames("button button--outline button--primary button--lg", styles.btnHover)} to="https://material-table-core.github.io/examples">
              Examples
            </Link>
          </div>
        </div>
      </header>
      <main>{/* todo */}</main>
    </Layout>
  );
}

export default Home;
