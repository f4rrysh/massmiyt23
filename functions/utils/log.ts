import { brightBlue, brightRed, brightYellow } from 'std:fmt/colors';
import { formatTimeString } from './time.ts';

/**
 * Log message formatted with time and log type
 *
 * @param type The type of logging
 * @param message The text to log
 */
export function log(
    type: 'error' | 'warn' | 'info',
    ...message: string[]
): void {
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
