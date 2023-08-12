import { resolve } from 'std:path';
import { build, stop } from 'x:esbuild';
import { load,
plugin as importMapPlugin
} from 'esm:esbuild-plugin-import-map';

// Load `import-map.json` first
load(resolve(Deno.cwd(), 'import-map.json'));

await build({
    entryPoints: [resolve(Deno.cwd(), 'mod.ts')],
    outfile: resolve(Deno.cwd(), 'build/mod.js'),
    plugins: [importMapPlugin()],
    minify: Deno.env.get('DENO_ENV') === 'production',
    target: 'esnext',
    bundle: true,
    format: 'esm',

});

// Required for Deno
stop();
