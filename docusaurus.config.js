// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/dracula')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const {DOCUSAURUS_VERSION} = require('@docusaurus/utils')
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vocdoni developer portal',
  tagline: 'API and SDK docs to use the underlying Vocdoni Open Stack',
  url: 'https://developer.vocdoni.io/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vocdoni',
  projectName: 'developer-portal',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  markdown: {
    mermaid: true
  },

  scripts: [
    {
      src: 'https://plsbl-proxy.vocdoni.net/js/script.tagged-events.outbound-links.js',
      defer: true,
      'data-domain': 'developer.vocdoni.io',
      'api-host': 'https://plsbl-proxy.vocdoni.net'
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          docLayoutComponent: '@theme/DocPage',
          docItemComponent: '@theme/ApiItem', // Derived from docusaurus-theme-openapi
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/open-api.css'),
            require.resolve('./src/css/markdown.css'),
            require.resolve('./src/css/announcement-bar.css'),
            require.resolve('./src/css/feedback.css')
          ]
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml'
        }
      })
    ]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'En'
      }
    }
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/open-graph.png', // Image for og:image and twitter:image
      metadata: [
        {
          name: 'keywords',
          content:
            'Blockchain Voting, Mobile Voting, Universally Verifiable, ' +
            'Voting-As-A-Service, Decentralized Governance, Anonymous Voting, Privacy Centric, Secure Electronic Voting, ' +
            'Tamper-Proof Digital Voting, Data-Sovereignty, Resilient Governance, Governance/Coordination Tools'
        },
        {
          property: 'og:description',
          content:
            'The Developer Portal contains everything you need to start integrating the ' +
            'Vocdoni Protocol, including the API and SDK, as well as extensive documentation about the protocol design. '
        }
      ],
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      algolia: {
        appId: 'V06M4VRZLG',
        apiKey: '7eae56e530bd72bed3903f5810ce57b9',
        indexName: 'developer-vocdoni',
        contextualSearch: true, // It ensures that search results are relevant to the current language and version.
        searchPagePath: 'search', //path for search page that enabled by default (`false` to disable it)
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/'
        }
      },
      announcementBar: {
        id: 'wip_bar',
        content:
          '<p><strong>Disclaimer: </strong>We are working in this repo (WIP) and changes will be made. Review this documentation often to be up-to-date with the new changes.</p>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Vocdoni logo',
          src: 'img/navbar-logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Get Started',
            className: 'plausible-event-name=Header+Introduction'
          },
          {
            type: 'dropdown',
            label: 'Reference',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'sdk/sdk',
                label: 'SDK',
                className: 'plausible-event-name=Header+SDK'
              },
              {
                type: 'doc',
                docId: 'ui-components/ui-components',
                label: 'UI Components',
                className: 'plausible-event-name=Header+UICOMPONENTS'
              },
              {
                type: 'doc',
                docId: 'protocol/protocol',
                label: 'Protocol',
                className: 'plausible-event-name=Header+API'
              }
            ]
          },
          {
            href: 'https://dev.explorer.vote',
            position: 'left',
            label: 'Explorer'
          },
          {
            href: 'https://blog.vocdoni.io',
            position: 'left',
            label: 'Blog'
          },
          {
            href: 'https://github.com/vocdoni',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'OpenAPI Docs',
          //       to: '/'
          //     }
          //   ]
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/palo-alto-networks-developer-blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/PaloAltoNetworks/docusaurus-openapi-docs'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc. Built with Docusaurus ${DOCUSAURUS_VERSION}.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['ruby', 'csharp', 'php']
      },
      languageTabs: [
        {
          highlight: 'javascript',
          language: 'nodejs',
          logoClass: 'nodejs'
        },
        {
          highlight: 'bash',
          language: 'curl',
          logoClass: 'bash'
        },
        {
          highlight: 'python',
          language: 'python',
          logoClass: 'python'
        },
        {
          highlight: 'go',
          language: 'go',
          logoClass: 'go'
        },
        // {
        //   highlight: "ruby",
        //   language: "ruby",
        //   logoClass: "ruby",
        // },
        {
          highlight: 'csharp',
          language: 'csharp',
          logoClass: 'csharp'
        }
        // {
        //   highlight: "php",
        //   language: "php",
        //   logoClass: "php",
        // },
      ],
      colorMode: {
        disableSwitch: true
      }
    }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'classic',
        config: {
          vocdoni: {
            specPath: 'swaggers/vocdoni-api.yaml',
            outputDir: 'docs/vocdoni-api',
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag'
            },
            // template: "api.mustache", // Customize API MDX with mustache template
            downloadUrl:
              'https://raw.githubusercontent.com/vocdoni/developer-portal/main/swaggers/vocdoni-api.yaml'
          }
        }
      }
    ],
    async function TailwindPlugin (context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss (postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        }
      }
    }
    // [
    //   "@docusaurus/plugin-pwa",
    //   {
    //     debug: true,
    //     offlineModeActivationStrategies: [
    //       "appInstalled",
    //       "standalone",
    //       "queryString",
    //     ],
    //     pwaHead: [
    //       {
    //         tagName: "link",
    //         rel: "icon",
    //         href: "/img/fallback-account-logo-dark.png",
    //       },
    //       {
    //         tagName: "link",
    //         rel: "manifest",
    //         href: "/manifest.json", // your PWA manifest
    //       },
    //       {
    //         tagName: "meta",
    //         name: "theme-color",
    //         content: "rgb(37, 194, 160)",
    //       },
    //     ],
    //   },
    // ],
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    'docusaurus-theme-openapi-docs',
    '@docusaurus/theme-mermaid'
  ],
  stylesheets: [
    {
      href: 'https://use.fontawesome.com/releases/v5.11.0/css/all.css',
      type: 'text/css'
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ]
}

module.exports = config
