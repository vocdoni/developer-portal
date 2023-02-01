// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/dracula");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vocdoni developer portal",
  tagline: "API and SDK docs to use the underlying Vocdoni Open Stack",
  url: "https://developer.vocdoni.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "vocdoni",
  projectName: "developer-portal",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  markdown: {
    mermaid: true,
  },

  scripts: [
      {
        src: 'https://plsbl-proxy.vocdoni.net/js/script.tagged-events.outbound-links.js', defer: true, 'data-domain': 'developer.vocdoni.io', 'api-host': 'https://plsbl-proxy.vocdoni.net'
      }
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/open-api.css"),
            require.resolve("./src/css/markdown.css"),
            require.resolve("./src/css/announcement-bar.css"),
            require.resolve("./src/css/feedback.css"),
          ]
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'En',
      },
    },
  },
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        image: 'img/open-graph.png', // Image for og:image and twitter:image
        metadata: [
          {name: 'keywords', content: "Blockchain Voting, Mobile Voting, Universally Verifiable, " +
                "Voting-As-A-Service, Decentralized Governance, Anonymous Voting, Privacy Centric, Secure Electronic Voting, " +
                "Tamper-Proof Digital Voting, Data-Sovereignty, Resilient Governance, Governance/Coordination Tools"},
          {property: 'og:description', content: "The Developer Portal contains everything you need to start integrating the " +
                "Vocdoni Protocol, including the API and SDK, as well as extensive documentation about the protocol design. "},
        ],
        docs: {
          sidebar: {
            hideable: true,
          },
        },
        announcementBar: {
          id: 'wip_bar',
          content:
              '<h3>Disclaimer: WIP</h3><p>We are working in this repo (WIP) and changes will be made. Review this documentation often to be up-to-date with the new changes.</p>',
          backgroundColor: '#fafbfc',
          textColor: '#091E42',
          isCloseable: false,
        },
        navbar: {
          title: "Vocdoni - Docs",
          logo: {
            alt: "Vocdoni logo",
            src: "img/logo-white.png",
          },
          items: [
            {
              type: "doc",
              docId: "get-started/intro",
              position: "left",
              label: "Introduction",
              className: "plausible-event-name=Header+Introduction",
            },
            {
              position: "left",
              label: "API",
              to: "/category/vocdoni-api",
              className: "plausible-event-name=Header+API",
            },
            {
              type: 'doc',
              docId: 'sdk/sdk',
              position: 'left',
              label: 'SDK',
              className: "plausible-event-name=Header+SDK",
            },
            {
              href: "https://dev.explorer.vote",
              docId: 'sdk/sdk',
              position: 'left',
              label: 'Explorer',
            },
            {
              href: "https://blog.vocdoni.io",
              position: "right",
              className: "header-medium-link",
              "aria-label": "Blog",
            },
            {
              href: "https://github.com/vocdoni",
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
              title: "Docs",
              items: [
                {
                  label: "OpenAPI Docs",
                  to: "/",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Stack Overflow",
                  href: "https://stackoverflow.com/questions/tagged/docusaurus",
                },
                {
                  label: "Discord",
                  href: "https://discordapp.com/invite/docusaurus",
                },
                {
                  label: "Twitter",
                  href: "https://twitter.com/docusaurus",
                },
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  href: "https://medium.com/palo-alto-networks-developer-blog",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} Palo Alto Networks, Inc. Built with Docusaurus ${DOCUSAURUS_VERSION}.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
          additionalLanguages: ["ruby", "csharp", "php"],
        },
        languageTabs: [
          {
            highlight: "javascript",
            language: "nodejs",
            logoClass: "nodejs",
          },
          {
            highlight: "bash",
            language: "curl",
            logoClass: "bash",
          },
          {
            highlight: "python",
            language: "python",
            logoClass: "python",
          },
          {
            highlight: "go",
            language: "go",
            logoClass: "go",
          },
          // {
          //   highlight: "ruby",
          //   language: "ruby",
          //   logoClass: "ruby",
          // },
          {
            highlight: "csharp",
            language: "csharp",
            logoClass: "csharp",
          },
          // {
          //   highlight: "php",
          //   language: "php",
          //   logoClass: "php",
          // },
        ],
        colorMode: {
          disableSwitch: true,
        },
      }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          vocdoni: {
            specPath: "swaggers/vocdoni-api.yaml",
            outputDir: "docs/vocdoni-api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            // template: "api.mustache", // Customize API MDX with mustache template
            downloadUrl:
              "https://raw.githubusercontent.com/vocdoni/developer-portal/main/swaggers/vocdoni-api.yaml",
          },
        },
      }
    ],
    async function TailwindPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    // [ "@easyops-cn/docusaurus-search-local",
    //   /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    //   {
    //     // `hashed` is recommended as long-term-cache of index file is possible.
    //     hashed: true,
    //     indexBlog: false,
    //     searchResultLimits: 1,
    //     searchBarPosition: "right"
    //
    //   }
    // ],

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
    "docusaurus-theme-openapi-docs",
    '@docusaurus/theme-mermaid',
    [
        "@easyops-cn/docusaurus-search-local",
        /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
        {
          // `hashed` is recommended as long-term-cache of index file is possible.
          hashed: true,
          indexBlog: false,
          searchBarPosition: "right",
          docsRouteBasePath: "/"
        }
    ]
  ],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

module.exports = config;
