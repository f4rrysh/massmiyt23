import { load } from 'std:dotenv';
import { bold } from 'std:fmt/colors';
import { Application } from 'x:oak';

// Util(s)
import { isLocalEnv } from './utils/env.ts';
import { log } from './utils/log.ts';

// Load all environmental variables form the `.env` file
isLocalEnv() ? await load() : void 0;

// Initialize a new Oak application
const app = new Application();

// Middleware(s)
import { useLogging } from './middlewares/logging.ts';
import { useStatic } from './middlewares/static.ts';

// Register the middleware(s)
app.use(useLogging());
app.use(useStatic());

app.addEventListener('listen', ({ hostname, port, secure }) => {
    const url = `http${secure ? 's' : ''}://${hostname ?? 'localhost'}${
        port === 80 ? '' : `:${port}`
    }/`;

    log('info', `Listening on ${bold(url)}`);
});

// Start the server
await app.listen({ port: isLocalEnv() ? 8080 : 80 });
