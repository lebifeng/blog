const config = {
  /**
   * Your document title, will show at the left top corner and also `document.title`
   *
   * @Default 'Docit'
   */
  title: "Attack on Titan",

  /**
   * Public path for your assets, also check out https://vitejs.dev/config/#base
   *
   * @Default '/'
   */
  publicPath: "https://github.com/lebifeng/blog/",

  /**
   * A path to your provider, need to be an absolute path.
   *
   * @Default path.resolve(CLIENT_PATH, './components/DefaultProvider/index.js'),
   */
  // providerPath: "https://blizzbolts.github.io/docit/",

  /**
   * Custom Sidebar Configs
   *
   * @Default undefined
   */
  // sidebars: [
  //   { title: "Get Started", path: "/index" },
  //   {
  //     title: "Usage",
  //     children: [
  //       {
  //         title: "Syntax",
  //         path: "/usage/Syntax",
  //       },
  //       {
  //         title: "Sidebars",
  //         path: "/usage/sidebar",
  //       },
  //       { title: "Static Resources", path: "/usage/static-resources" },
  //     ],
  //   },
  //   {
  //     title: "Config File",
  //     path: "/Configs",
  //   },
  //   { title: "FAQ", path: "/FAQ" },
  //   { title: "Feature Request List", path: "/feature-request" },
  // ],

  /**
   * Custom Social Info
   * 
   * @Default undefined
   */
  socials: {
    // Twitter: 'xxx',
    Github: 'https://github.com/lebifeng/blog'
  }
};
export default config;