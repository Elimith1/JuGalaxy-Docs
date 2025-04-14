import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/appweb-trpr02/',

  title: "Travail Pratique 02",
  description: "Revue de code pour le travail pratique 02.",
  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Page de Mathieu Bellavance', link: '/mathieu-bellavance' },
      { text: 'Page de Samuel St-Hilaire', link: '/samuel-st-hilaire' }
    ],
    
    sidebar: [
      {
        text: 'Revue de Code',
        items: [
          { text: 'Page de Mathieu Bellavance', link: '/mathieu-bellavance' },
          { text: 'Page de Samuel St-Hilaire', link: '/samuel-st-hilaire' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
