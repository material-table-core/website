import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { useColorMode } from "@docusaurus/theme-common";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.css";
import MaterialTable from "@material-table/core";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControlLabel, Switch, Paper } from "@mui/material";

const firstNames = ["Ada", "Grace", "Alan", "Linus", "Margaret", "Dennis", "Barbara", "Ken", "Radia", "Donald"];
const lastNames = ["Lovelace", "Hopper", "Turing", "Torvalds", "Hamilton", "Ritchie", "Liskov", "Thompson", "Perlman", "Knuth"];
const teams = { 1: "Frontend", 2: "Backend", 3: "Infra", 4: "Design" };

const data = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  name: firstNames[i % firstNames.length],
  surname: lastNames[(i * 3) % lastNames.length],
  team: (i % 4) + 1,
  commits: ((i * 37) % 90) + 10,
}));

const features = [
  { label: "Actions", to: "/demos/actions/basic", desc: "Row & toolbar action buttons" },
  { label: "Editable", to: "/demos/edit/editable", desc: "Inline row add, update & delete" },
  { label: "Grouping", to: "/demos/group/basic", desc: "Drag headers to group rows" },
  { label: "Filtering", to: "/demos/filter/basic", desc: "Built-in per-column filters" },
  { label: "Selection", to: "/demos/selection/basic", desc: "Checkbox row selection" },
  { label: "Export", to: "/demos/export/basic", desc: "CSV & PDF export out of the box" },
  { label: "Detail Panel", to: "/demos/details-panel/basic", desc: "Expandable row detail views" },
  { label: "Remote Data", to: "/demos/remote-data/basic", desc: "Server-side paging & search" },
  { label: "Tree Data", to: "/demos/tree-data/basic", desc: "Nested parent/child rows" },
  { label: "Summary Row", to: "/demos/Summaryrow/basic", desc: "Aggregate totals per column" },
  { label: "Custom Components", to: "/demos/override/toolbar", desc: "Override any table component" },
  { label: "Styling", to: "/demos/style/rows", desc: "Style rows, cells & headers" },
];

function LiveDemo() {
  const { colorMode } = useColorMode();
  const [options, setOptions] = React.useState({
    selection: true,
    filtering: false,
    grouping: true,
  });
  const theme = React.useMemo(
    () => createTheme({ palette: { mode: colorMode } }),
    [colorMode]
  );
  const toggle = (key) => (e) =>
    setOptions((prev) => ({ ...prev, [key]: e.target.checked }));
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.demoToggles}>
        {Object.entries(options).map(([key, value]) => (
          <FormControlLabel
            key={key}
            control={<Switch checked={value} onChange={toggle(key)} />}
            label={key[0].toUpperCase() + key.slice(1)}
          />
        ))}
      </div>
      <MaterialTable
        title="Contributors"
        data={data}
        columns={[
          { title: "ID", field: "id", width: 80 },
          { title: "Name", field: "name" },
          { title: "Surname", field: "surname" },
          { title: "Team", field: "team", lookup: teams },
          { title: "Commits", field: "commits", type: "numeric" },
        ]}
        options={{
          ...options,
          paginationType: "stepped",
          headerStyle: { fontWeight: 600 },
        }}
        components={{
          Container: (props) => <Paper {...props} elevation={2} />,
        }}
      />
    </ThemeProvider>
  );
}

export default function Home() {
  const { siteConfig = {} } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className={clsx("hero__title", styles.heroTitle)}>
            {siteConfig.title}
          </h1>
          <p className={clsx("hero__subtitle", styles.heroSubTitle)}>
            {siteConfig.tagline} — built on <b>MUI&nbsp;v9</b> and{" "}
            <b>React&nbsp;19</b>
          </p>
          <div className={styles.badges}>
            <img
              alt="npm version"
              src="https://img.shields.io/npm/v/@material-table/core?color=2ea44f&label=%40material-table%2Fcore"
            />
            <img
              alt="npm downloads"
              src="https://img.shields.io/npm/dm/@material-table/core?color=blue"
            />
            <img
              alt="license"
              src="https://img.shields.io/npm/l/@material-table/core?color=lightgrey"
            />
          </div>
          <div className={styles.install}>
            <CodeBlock language="bash">
              npm install @material-table/core
            </CodeBlock>
          </div>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to={useBaseUrl("/docs")}
            >
              Get Started
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              to={useBaseUrl("/demos")}
            >
              Live Demos
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="container margin-vert--lg">
          <h2 className="text--center margin-bottom--lg">
            Everything a data table needs
          </h2>
          <div className={styles.featureGrid}>
            {features.map((f) => (
              <Link
                key={f.label}
                to={f.to}
                className={clsx("card", styles.featureCard)}
              >
                <h3>{f.label}</h3>
                <p>{f.desc}</p>
              </Link>
            ))}
          </div>
        </section>
        <section className="container margin-vert--lg">
          <h2 className="text--center">Try it live</h2>
          <p className="text--center">
            Toggle features on and off — then drag a column header to group,
            select rows, or filter. Every demo page on this site is live-editable,
            too.
          </p>
          <BrowserOnly fallback={<div />}>{() => <LiveDemo />}</BrowserOnly>
        </section>
      </main>
    </Layout>
  );
}
