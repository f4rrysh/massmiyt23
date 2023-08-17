import { groupBy } from 'lodash';

export function group(objects: Record<string, unknown>[], key: string) {
    return groupBy(objects, (object) => object[key] === key);
}
