module.exports = {
  title: '@material-table/core',
  tagline: 'React data table component that based on Material-UI. This is a maintained fork of mbrn/material-table',
  url: 'https://material-table-core.com',
  baseUrl: '/',
  favicon: '',
  organizationName: 'oze4', // Usually your GitHub org/user name.
  projectName: 'material-table-core-website', // Usually your repo name.
  themeConfig: {
    // defaultDarkMode: true,
    announcementBar: {
      id: 'announcement_bar', // Any value that will identify this message.
      content:
        '🚧 Under construction 🚧 <br /><a target="_blank" rel="noopener noreferrer" href="https://github.com/oze4/material-table-core-website">Please visit here if you would like to contribute!</a>',
      backgroundColor: ' #fff6ce', // '#e8eaf5', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
    },
    navbar: {
      title: '@material-table/core',
      logo: {
        alt: 'My Site Logo',
        // src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/getting-started/about',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
          items: [
            { to: 'docs/getting-started/about', label: '@material-table/core@v2.0.x' },
            { href: 'https://material-table.com', label: 'material-table' }
          ],
        },
        {
          href: 'https://oze4.github.io/material-table-core/#/demo',
          title: 'EXAMPLES',
          position: 'right',
          className: 'material-icons code tooltip examples',
          'aria-label': 'Demo',
        },
        {
          href: 'https://oze4.github.io/material-table-core/#/issue-tracker',
          title: 'ISSUE TRACKER',
          position: 'right',
          className: 'material-icons bug-report tooltip issue-tracker',
          'aria-label': 'Issue Tracker',
        },
        {
          href: 'https://github.com/oze4/material-table-core',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    /*
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    */
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'docs/getting-started/installation',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/oze4/material-table-core-website/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/oze4/material-table-core-website/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock']
};
