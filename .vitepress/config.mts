import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VetoAPI Client",
  description: "A New approach to syncing your users film data to VetoAPI",
  srcDir: "src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/guide/' },
          { text: 'Installation', link: '/guide/install' },
        ]
      },
      {
        text: 'User',
        items: [
          { text: 'Creating your user', link: '/guide/user/creation' },
          { text: 'Creating Lists', link: '/guide/user/lists' },
          { text: 'Rating your Media', link: '/guide/user/rating' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FifthWit/' }
    ]
  }
})
