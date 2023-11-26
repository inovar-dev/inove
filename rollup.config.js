import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel'
export default{
    input: 'tagu/index.js',
    output: {
		format: 'es',
		file: 'src/index.js',
        sourcemap: true,
        name: "Inovet"
	},
    plugins: [
        resolve(), 
        commonjs(),
        terser(),
        // babel({ babelHelpers: 'bundled' }),
    ],
    
}