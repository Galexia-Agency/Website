import galexia from 'eslint-config-galexia'

export default [
  {
    name: 'galexia/ignores',
    ignores: [
      '.nuxt/',
      '.output/',
      'dist/',
      'public/js/',
      // Generated CMS output and state; cms/worker.ts is linted with the app.
      'cms/dist/',
      'cms/runtime/',
      'cms/.cache/',
      'cms/.wrangler/',
      'cms/migration/',
      'cms/node_modules/'
    ]
  },
  ...galexia,
  {
    name: 'galexia/worker-names',
    files: ['worker/**/*.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'typeLike', format: ['PascalCase'] },
        // Worker bindings and vars (env.FORMS_EMAIL) are UPPER_CASE, as in wrangler.jsonc.
        { selector: 'typeProperty', format: ['camelCase', 'UPPER_CASE'] }
      ]
    }
  }
]
