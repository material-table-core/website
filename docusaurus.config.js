module.exports = {
  title: "@material-table/core",
  tagline: "Feature rich data table for React via Material-UI",
  url: "https://material-table-core.com",
  baseUrl: "/",
  favicon: "",
  organizationName: "material-table-core", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
    },
    announcementBar: {
      id: "announcement_bar", // Any value that will identify this message.
      content: '🚧 Under construction 🚧 <br /><a target="_blank" rel="noopener noreferrer" href="https://github.com/material-table-core">Please visit here if you would like to contribute!</a>',
      backgroundColor: " #fff6ce", // '#e8eaf5', // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
    },
    navbar: {
      //title: 'Home',
      hideOnScroll: true,
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      links: [
        {
          to: "docs/getting-started/about",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
          items: [
            { to: "docs/getting-started/about", label: "@material-table/core@v2.0.x" },
            { href: "https://material-table.com", label: "material-table" },
          ],
        },
        {
          href: "https://github.com/material-table-core",
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
              label: "Gitter",
              href: "https://gitter.im/MaterialTableCore/community",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} material-table-core and contributors. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "docs/getting-started/install",
          sidebarPath: require.resolve("./sidebars.json"),
          editUrl: "https://github.com/material-table-core/website",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
