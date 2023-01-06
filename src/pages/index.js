import React from "react";
import clsx from "clsx";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import MaterialTable from "@material-table/core";

const data = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  name: `Name ${i + 1}`,
  surname: `Surname ${i + 1}`,
}));

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={classnames("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </h1>
          <div className={classnames("hero__subtitle", styles.heroSubTitle)}>
            <h3>
              A fork of
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/mbrn/material-table"
              >
                <code className={classnames(styles.inverseColor)}>
                  mbrn/material-table
                </code>
              </Link>
            </h3>
          </div>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.btnHover
              )}
              to={useBaseUrl("/docs")}
            >
              Docs
            </Link>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.btnHover
              )}
              to={useBaseUrl("/demos")}
            >
              Demos
            </Link>
          </div>
        </div>
      </header>
      <main>
        <ul className={classnames(styles.features)}>
          <li>
            <Link to={useBaseUrl("/demos/actions/basic")}>Actions</Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/override/toolbar")}>
              Override Components
            </Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/columns/render-image")}>Columns</Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/details-panel/basic")}>
              Details Panel
            </Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/edit/editable")}>Editable</Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/export/basic")}>Export</Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/filter/basic")}>Filter</Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/group/basic")}>Grouping</Link>
            <Link to={useBaseUrl("/demos/group/override")}>
              Override Grouping
            </Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/selection/basic")}>Selection</Link>
          </li>
          <li>
            <Link to={useBaseUrl("/demos/Summaryrow/basic")}>Summary Row</Link>
          </li>
        </ul>
        <MaterialTable
          data={data}
          columns={[
            { title: "id", field: "id" },
            { title: "Surname", field: "surname" },
            { title: "Name", field: "name" },
          ]}
          options={{
            numberOfPagesAround: 5,
            paginationType: "stepped",
          }}
          title="Material Table Core"
        />
      </main>
    </Layout>
  );
}
