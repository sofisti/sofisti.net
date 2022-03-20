import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
  lang: 'en-US',
  title: 'The Sofisti Manifesto',
  description: 'What is the Sofisti app and why bottom up knowledge matters',

  // theme and its config
  theme: '@vuepress/theme-default',

  themeConfig: {
    repo: 'sofisti/sofisti.net',
    displayAllHeaders: true,
    sidebar: [
      {
        text: 'Manifesto',
        link: '/',
        collapsible: false,
        children: [
          {
            text: 'Why Sofisti?',
            link: '/'
          },
          {
            text: 'Concepts',
            link: 'concepts',
          },
          {
            text: 'Challenges',
            link: '/challenges'
          }
        ]
      }
    ]
  },
})
