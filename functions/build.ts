import { build, stop } from 'https://deno.land/x/esbuild@v0.19.1/mod.js';
import { resolve } from 'https://deno.land/std@0.198.0/path/mod.ts';

await build({
    entryPoints: [resolve(Deno.cwd(), 'mod.ts')],
    outfile: resolve(Deno.cwd(), 'build/mod.js'),
    minify: Deno.env.get('DENO_ENV') === 'production',
    target: 'esnext',
    format: 'esm'
});

// Required for Deno
stop();