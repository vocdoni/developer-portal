// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vocdoni developer portal",
  tagline: "API and SDK docs to use the underlying Vocdoni Open Stack",
  url: "https://vocdoni.github.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "vocdoni",
  projectName: "developer-portal",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/vocdoni/developer-portal/",
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: "Blockchain Voting, Mobile Voting, Universally Verifiable, " +
            "Voting-As-A-Service, Decentralized Governance, Anonymous Voting, Privacy Centric, Secure Electronic Voting, " +
            "Tamper-Proof Digital Voting, Data-Sovereignty, Resilient Governance, Governance/Coordination Tools"}],
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "Vocdoni - Docs",
        logo: {
          alt: "Vocdoni logo",
          src: "img/logo-dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "get-started/intro",
            position: "left",
            label: "Get Started",
          },
          {
            position: "left",
            label: "API",
            to: "/category/vocdoni-api",
          },
          {
            type: 'doc',
            docId: 'sdk/sdk',
            position: 'left',
            label: 'SDK',
          },
          {
            href: "https://documentation.aragon.org/products/aragon-vocdoni/what-is-aragon-vocdoni",
            docId: 'sdk/sdk',
            position: 'left',
            label: 'Guides',
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
        {
          highlight: "javascript",
          language: "nodejs",
          logoClass: "nodejs",
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
      },
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

  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

module.exports = config;
