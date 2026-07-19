const path = require("path");
const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "@material-table/core",
  tagline: "Feature rich data table for React",
  url: "https://material-table-core.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  markdown: {
    format: "detect",
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  organizationName: "material-table-core",
  projectName: "website",
  favicon: "/img/favicon.ico",
  future: {
    v4: true,
  },
  plugins: [
    // ponytail: see src/mui-icons-compat.js — shim for icon renamed in MUI v9
    () => ({
      name: "mui-icons-compat",
      configureWebpack: () => ({
        resolve: {
          alias: {
            "@mui/icons-material$": path.resolve(
              __dirname,
              "src/mui-icons-compat.js"
            ),
          },
        },
      }),
    }),
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "demos",
        path: path.resolve(__dirname, "./demos"),
        routeBasePath: "/demos",
        include: ["**/*.md", "**/*.mdx"],
        sidebarPath: path.resolve(__dirname, "./sidebar.demos.js"),
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebar.docs.js"),
          editUrl: "https://github.com/material-table-core/website/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "material-table, material-table-core, react-material-table, react-table, material-ui-table",
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: "v8_release",
      content:
        '🎉 <b>@material-table/core v8</b> is out — now on MUI&nbsp;v9 and React&nbsp;19! <a target="_blank" rel="noopener noreferrer" href="https://github.com/material-table-core/core/releases">See what\'s new</a>',
      backgroundColor: "#fff6ce",
      textColor: "#091E42",
      isCloseable: true,
    },
    navbar: {
      title: "material-table",
      hideOnScroll: true,
      logo: {
        alt: "@material-table_logo",
        src: "/img/logo.png",
      },
      items: [
        {
          to: "/docs",
          position: "left",
          label: "Docs",
        },
        {
          to: "/demos",
          position: "left",
          label: "Demos",
        },
        {
          to: "https://github.com/material-table-core/core",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.com/channels/796859493412765697/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/material-table-core/core",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} material-table-core and contributors. Built with Docusaurus.`,
    },
  },
};
