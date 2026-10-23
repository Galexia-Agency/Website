import galexia from 'eslint-config-galexia'

export default [
  {
    name: 'galexia/ignores',
    ignores: [
      '.nuxt/',
      '.output/',
      'dist/',
      'cms/',
      'public/js/',
      // The forms worker (.mjs) keeps its own style, as in joebailey.xyz.
      '**/*.mjs'
    ]
  },
  ...galexia,
  {
    name: 'galexia/nuxt-globals',
    files: ['app/**/*.js'],
    languageOptions: {
      // Nuxt's fetch helper
      globals: { $fetch: 'readonly' }
    }
  }
]
