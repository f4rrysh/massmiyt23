const webpack = require('webpack');

const { exec } = require('node:child_process');
const { promisify } = require('node:util');
const { resolve } = require('node:path');
const { cp } = require('node:fs/promises');

(async () => {
    try {
        // Build the server-side
        await promisify(exec)('deno task build', {
            cwd: resolve(process.cwd(), 'functions')
        });

        // Copy the server-side
        await cp(
            resolve(process.cwd(), 'functions/build'),
            resolve(process.cwd(), 'build'),
            { recursive: true }
        );

        // Build the client-side
        await promisify(webpack)([require('./webpack.config')]);
    } catch {
        return process.exit(3);
    }
})();
