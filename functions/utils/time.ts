/**
 * Format the time to a specific timezone. Perfect to use with logger(s)
 *
 * @param time The time to format
 * @return The formatted time
 */
export function formatTimeString(time: number = Date.now()): string {
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
