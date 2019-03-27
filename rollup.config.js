import sourcemaps from 'rollup-plugin-sourcemaps';
import closureCompiler from '@ampproject/rollup-plugin-closure-compiler';

export default [{
    // library
    input: 'src/qr-scanner.js',
    output: {
        name: 'QrScanner',
        file: 'dist/qr-scanner.min.js',
        format: 'iife',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        closureCompiler({
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            rewrite_polyfills: false,
        })
    ]
}, {
    // worker
    input: 'src/worker.js',
    output: {
        file: 'dist/qr-scanner-worker.min.js',
        format: 'iife',
        interop: false,
        sourcemap: true,
    },
    plugins: [
        sourcemaps(),
        closureCompiler({
            //compilation_level: 'ADVANCED',
            //warning_level: 'QUIET',
            language_in: 'ECMASCRIPT6',
            language_out: 'ECMASCRIPT5',
            rewrite_polyfills: false,
        }),
    ]
}];
