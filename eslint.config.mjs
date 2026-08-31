import next from 'eslint-config-next'

const eslintConfig = [
  ...next,
  {
    ignores: ['.next/**', 'public/_pagefind/**']
  }
]

export default eslintConfig
