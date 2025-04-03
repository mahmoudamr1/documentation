
module.exports = {
  title: " ",  
  tagline: "أنشئ متجرًا مجانيًا مدى الحياة مع Easy Orders.",  
  favicon: "img/easy-icon.png",
  url: "https://www.easy-orders.net/",
  baseUrl: "/",
  organizationName: "easy orders",
  projectName: "easy orders",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "ar",
    locales: ["ar", "en"],
    path: "i18n",
    localeConfigs: {
      ar: {
        label: "العربية",
        direction: "rtl",  
        htmlLang: "ar",
        path: "ar",
      },
      en: {
        label: "English",
        direction: "ltr", 
        htmlLang: "en",
        path: "en",
      },
    },
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        language: ["ar", "en"],
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "",  
      logo: {
        alt: "Easy Orders Logo",
        src: "img/easy-logo.png",
      },
      items: [
        {
          type: "search",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://app.easy-orders.net",
          label: "easy orders",
          position: "left",
        },
        {
          href: "https://www.easy-orders.net/blog/",
          label: "Blog",
          position: "right",
        },
        {
          type: "localeDropdown",  
          position: "right",
        },
      ],
      hideOnScroll: false,
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Important Links",
          items: [
            {
              label: "Dashboard",
              href: "https://app.easy-orders.net/",
            },
            {
              label: "Blog",
              href: "https://www.easy-orders.net/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/easyorders",
            },
          ],
        },
      ],
      copyright: "Copyright © 2025 Easy Orders",
    },
  },
};