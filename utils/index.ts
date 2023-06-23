/**
 * Returns `true` if the given value is an object, `false` otherwise.
 *
 * @param val The value that is to be checked.
 */
export function isFileObject(val: unknown): boolean {
  return (
    val != null &&
    typeof val === 'object' &&
    Array.isArray(val) === false &&
    Object.keys(val).length == 3 &&
    val.hasOwnProperty('uri') &&
    val.hasOwnProperty('type') &&
    val.hasOwnProperty('name')
  );
}

/**
 * Returns `true` if the value is either `undefined` or `null`, `false`
 * otherwise.
 * @param {any} value Some value.
 * @returns {Boolean}
 */
export function isNil(value: unknown): value is undefined | null {
  return typeof value === 'undefined' || value === null;
}
