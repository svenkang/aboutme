module.exports = {
  title: 'Sven Kang',
  tagline: 'The software engineer who makes things happen.',
  url: 'https://svenkang.io',
  baseUrl: '/',
  favicon: 'img/logo.svg',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'svenkang', 
  projectName: 'aboutme', 
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',
        lightIcon: '☀️',
      }
    },
    googleAnalytics: {
      trackingID: 'UA-187576306-1',
      anonymizeIP: true, 
    },
    navbar: {
      title: 'Sven Kang',
      logo: {
        alt: 'Sven Kang',
        src: 'img/logo.svg',
        srcDark: 'img/logo_dark.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {to: 'blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/svenkang/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
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
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/svenkang/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Sven Kang, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/svenkang/aboutme/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/svenkang/aboutme/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
