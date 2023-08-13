const { cp, rm, readdir } = require('node:fs/promises');
const { exec } = require('node:child_process');
const { promisify } = require('node:util');
const { resolve } = require('node:path');

const webpack = require('webpack');

(async () => {
    try {
        // Clean the build directory
        await rm('build', {
            recursive: true,
            force: true
        });

        // Build the server-side
        await promisify(exec)('deno task build', {
            cwd: resolve(process.cwd(), 'functions'),
            env: {
                ...process.env,

                // Set `DENO_ENV` to production to minify mod.ts
                DENO_ENV: 'production'
            }
        });

        // Copy the server-side
        await cp(
            resolve(process.cwd(), 'functions/build'),
            resolve(process.cwd(), 'build/server'),
            { recursive: true }
        );

        // Copy import-mao.json and deno.json
        for await (const file of await readdir(
            resolve(process.cwd(), 'functions')
        )) {
            // It's not a JSON
            if (!file.endsWith('.json')) {
                continue;
            }

            await cp(
                resolve(process.cwd(), 'functions', file),
                resolve(process.cwd(), 'build', file)
            );
        }

        // Build the client-side
        await promisify(webpack)([require('./webpack.config')]);
    } catch (error) {
        error instanceof Error
            ? console.log('ERROR', error.name, error.message)
            : console.log('ERROR', error);

        return process.exit(3);
    }
})();
