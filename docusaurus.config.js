module.exports = {
  title: '@material-table/core',
  tagline: 'Flexible React Data Table with the help of Material-UI',
  url: 'https://material-table-core.com',
  baseUrl: '/',
  favicon: '',
  organizationName: 'material-table-core', // Usually your GitHub org/user name.
  projectName: 'website', // Usually your repo name.
  themeConfig: {
    defaultDarkMode: false,
    announcementBar: {
      id: 'announcement_bar', // Any value that will identify this message.
      content:
        '🚧 Under construction 🚧 <br /><a target="_blank" rel="noopener noreferrer" href="https://github.com/material-table-core">Please visit here if you would like to contribute!</a>',
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
          href: 'https://github.com/material-table-core',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
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
        },*/
        {
          title: 'Community',
          items: [
            {
              label: 'Gitter',
              href: 'https://gitter.im/MaterialTableCore/community',
            },
          ],
        },
        /*{
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
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
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
