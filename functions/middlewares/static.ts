import { resolve } from 'std:path';
import { Middleware, Context, Next } from 'x:oak';

/**
 * An Oak middleware to serve static file(s)
 *
 * @param path
 * @default 'static'
 */
export function useStatic(path: string = 'static'): Middleware {
    return async function (context: Context, next: Next): Promise<void> {
        await next();

        await context.send({
            root: resolve(Deno.cwd(), path),
            index: 'index.html'
        });
    };
}
