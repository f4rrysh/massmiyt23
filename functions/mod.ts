import 'std/dotenv/load.ts';

import { Application } from 'x:oak';
import { colors } from 'std:fmt';

const { bold } = colors;

// Util(s)
import { log } from './utils/log.ts';

// Initialize a new Oak application
const app = new Application();

// Route(s)
import api from './routes/api.ts';

app.use(api.routes());
app.use(api.allowedMethods());

// Middleware(s)
import { useLogging } from './middlewares/logging.ts';
import { useStatic } from './middlewares/static.ts';

// Register the middleware(s)
app.use(useLogging());
app.use(useStatic());

// NOTE: The `port` will be overwritten in a Deploy environment
const serveOption: Deno.ServeOptions = {
    port: 8080,
    onListen({ hostname, port }) {
        if (!Deno.env.get('DENO_REGION')) {
            return log(
                'info',
                'Listening on:',
                bold(`http://${hostname}:${port}/`)
            );
        } else {
            return log('info', 'Listening on:', bold(`https://${hostname}/`));
        }
    }
};

// Serve the application by handling request and returning a `Response` object
Deno.serve(serveOption, async (request) => {
    const body = JSON.stringify({
        message: 'An unexpected internal server error has occurred',
        code: 500
    });

    const response =
        (await app.handle(request)) ||
        new Response(body, {
            statusText: 'An unexpected internal server error has occurred',
            status: 500
        });

    return response;
});
