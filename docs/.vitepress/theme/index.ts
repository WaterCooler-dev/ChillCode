// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'

import DefaultTheme from 'vitepress/theme-without-fonts'
import './style.css'
import './font.css'

import Layout from './Layout.vue'
import Home from './components/Home.vue'
import Lecture from './components/Lecture.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('Home', Home)
    app.component('Lecture', Lecture)
  }
} satisfies Theme
