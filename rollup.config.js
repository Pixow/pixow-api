import autoExternal from 'rollup-plugin-auto-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
  },
  plugins: [
    nodeResolve(),
    typescript({
      typescript: require('typescript'),
      module: "ES2015"
    }),
    commonjs(),
    autoExternal(),
    globals(),
    builtins()
  ],
  external: [
    "axios",
    "qs"
  ]
}
