import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/core',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    'eslint',
  ],
})
