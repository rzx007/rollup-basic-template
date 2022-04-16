import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
const proConfig = [
  babel({
    exclude: 'node_modules/**'
  }),
  terser(),
]

export { proConfig }