// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import antfu from '@antfu/eslint-config'

export default withNuxt(
  antfu({
    vue: true,
    typescript: true,
    formatters: {
      css: true,
      html: true,
      markdown: 'prettier',
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
  }, {
    rules: {
      'no-undef': 0,
      'vue/multi-word-component-names': 0,
      'unused-imports/no-unused-vars': 1,
      'no-console': 1,
    },
  }),
)
