import { Application } from 'https://deno.land/x/oak@v12.6.0/mod.ts';

// Deno's standard library
// Current version: 0.198.0
import { resolve } from 'https://deno.land/std@0.198.0/path/mod.ts';
import {
    bold,
    brightBlue,
    brightGreen,
    brightRed,
    brightYellow
} from 'https://deno.land/std@0.198.0/fmt/colors.ts';

/**
 * Format the time to a specific timezone. Perfect to use with logger(s)
 * 
 * @param time The time to format
 * @return The formatted time
 */
function formatTimeString(time: number = Date.now()): string {
    // NOTE: Change this to your prefered/local timezone
    const localTimeZone = 'Asia/Singapore';

    // I live in Malaysia but sadly `Asia/Kuala Lumpur` doesn't exists
    // Luckily, Singapore share the same time zone with Malaysia
    // `Asia/Singapore` will work
    const current = new Date(time).toLocaleTimeString('en-US', {
        timeZone: localTimeZone,
        hour12: false
    });

    return current;
}


/**
 * Log message formatted with time and log type
 * 
 * @param type The type of logging
 * @param message The text to log
 */
function log(type: 'error' | 'warn' | 'info', ...message: string[]): void {
    const time = brightBlue(`[${formatTimeString()}]`);

    switch (type) {
        case 'error':
            return console.log(time, brightRed('[!]'), ...message);

        case 'warn':
            return console.log(
                time,
                brightRed(brightYellow('[?]')),
                ...message
            );
        
        case 'info':
            return console.log(time, brightBlue('[*]'), ...message);
        
        default:
            return log('error', `'${type}' is not a valid logging type`);
    }
}

// Initialize a new Oak application
const app = new Application();

// Register a middleware to log request(s)
app.use(async (context, next) => {
    await next();

    // Get the request method and URL
    const method = brightGreen(context.request.method);
    const url = brightGreen(context.request.url.pathname);

    log('info', method, url);
});

// Register a middleware to serve static file(s)
app.use(async (context, next) => {
    await next();

    await context.send({
        root: resolve(Deno.cwd(), 'static'),
        index: 'index.html'
    });
});

// NOTE: The `port` will be overwritten in a Deploy environment
const serveOption: Deno.ServeOptions = {
    port: 8080,
    onListen({ hostname, port }) {
        if (Deno.env.get('DENO_REGION')) {
            return log(
                'info',
                'Listening on:',
                bold(`http://${hostname}:${port}/`)
            );
        } else {
            return log('info', 'Listening on:', bold(`https://${hostname}/`));
        }
    }
}

// Serve the application by handling request and returning a `Response` object
Deno.serve(serveOption, async (request) => {
    const body = JSON.stringify({
        message: 'An unexpected internal server error has occurred',
        code: 500
    });

    const response = await app.handle(request) || new Response(body, {
        statusText: 'An unexpected internal server error has occurred',
        status: 500
    });

    return response;
});
