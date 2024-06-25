// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// import { themes as prismThemes } from 'prism-react-renderer';

import darkCode from './src/utils/codeDark.ts';
import lightCode from './src/utils/codeLight.ts';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'robotics is ez',
  tagline: '',
  favicon: 'img/favicon.ico',

  url: 'https://www.roboticsisez.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'EZ-Robotics', // Usually your GitHub org/user name.
  projectName: 'EZ-Site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        googleTagManager: {
          containerId: 'GTM-P9R9K2VK',
        },
        docs: false,

        blog: {
          blogSidebarCount: 'ALL',
          postsPerPage: 7,
          blogSidebarTitle: 'All My Projects',
          showReadingTime: true,
          readingTime: ({ content, frontMatter, defaultReadingTime }) =>
            defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
          routeBasePath: '/projects', // url
          path: './projects', // file path

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'robotics is ez',
        items: [
          { to: '/about', label: 'About Me', position: 'right' },
          { to: '/projects', label: 'Projects', position: 'left' },
          { to: 'https://ez-robotics.github.io/EZ-Template/', label: 'EZ-Template Docs', position: 'left' },
          // { to: 'https://ez-robotics.github.io/EZ-GUI/', label: 'EZ-GUI Docs', position: 'left' },

          {
            href: 'https://github.com/EZ-Robotics',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'EZ-Template',
                to: 'https://ez-robotics.github.io/EZ-Template/',
              },
              /*{
                label: 'EZ-GUI',
                to: 'https://ez-robotics.github.io/EZ-GUI/',
              },*/
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/roboticsisez',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@roboticsisez',
              },
              {
                label: 'EZ-Template Discord',
                href: 'https://discord.gg/EHjXBcK2Gy',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Me',
                href: '/about',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EZ-Robotics',
              },
            ],
          },
        ],
        copyright: `jess@roboticsisez.com   -   (818) 568 0184   -   Copyright © ${new Date().getFullYear()} robotics is ez - built with docusaurus`,
      },
      prism: {
        theme: lightCode,
        darkTheme: darkCode,
      },
    }),
};

export default config;
