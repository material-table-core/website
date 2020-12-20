module.exports = {
  title: "@material-table/core",
  tagline: "Feature rich data table for React",
  url: "https://material-table-core.com",
  baseUrl: "/",
  favicon: "",
  organizationName: "material-table-core", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: "🌙",

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: "2px",
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: "\u{1F602}",

        lightIconStyle: {
          marginLeft: "1px",
        },
      },
    },
    announcementBar: {
      id: "announcement_bar", // Any value that will identify this message.
      content: '🚧 Under construction 🚧 <a target="_blank" rel="noopener noreferrer" href="https://github.com/material-table-core">Please visit here if you would like to contribute!</a>',
      backgroundColor: " #fff6ce", // '#e8eaf5', // Defaults to `#fff`.
      textColor: "#091E42", // Defaults to `#000`.
      isCloseable: false,
    },
    navbar: {
      style: "primary",
      title: '@material-table',
      hideOnScroll: false,
      logo: {
        alt: "@material-table_logo",
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
