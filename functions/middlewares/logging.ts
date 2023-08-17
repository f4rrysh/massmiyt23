import { Middleware, Context, Next } from 'x:oak';
import { brightGreen } from 'std:fmt/colors';

import { log } from '../utils/log.ts';

/**
 * An Oak middleware for logging request(s)
 */
export function useLogging(): Middleware {
    return async function (context: Context, next: Next): Promise<void> {
        await next();

        // Get the request method and URL
        const method = brightGreen(context.request.method);
        const url = brightGreen(context.request.url.pathname);

        log('info', method, url);
    };
}
