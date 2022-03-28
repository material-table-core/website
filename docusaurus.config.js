const path = require('path')

module.exports = {
  title: "@material-table/core",
  tagline: "Feature rich data table for React",
  url: "https://material-table-core.com",
  baseUrl: "/",
  // onBrokenLinks: "ignore",
  organizationName: "material-table-core", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.
  favicon: "/img/logo.png",
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: 'demos',
        path: path.resolve(__dirname, "./demos"), // Path to data on filesystem, relative to site dir.
        routeBasePath: "/demos", // URL Route.
        include: ['**/*.md', '**/*.mdx'],
        sidebarPath: path.resolve(__dirname, "./sidebar.demos.js") // require.resolve("./sidebar.demos.js")
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
    hideableSidebar: true,
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
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
        lightIcon: "💡",
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
      // style: "primary",
      title: "Home",
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
        /*
        {
          to: "https://material-table.com",
          position: "right",
          label: "mbrn/material-table",
        },
        */ 
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
              label: "Github",
              href: "https://github.com/material-table-core/core",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} material-table-core and contributors. Built with Docusaurus.`,
    },
  },
};
