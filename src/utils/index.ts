/**
 * Take a list of strings and into a single string
 * @param strings
 * @param delimiter
 * @returns String
 */
export function joinStrings<T>(strings: T[], delimiter = " "): string {
  return strings.filter((s) => s && typeof s === "string").join(delimiter);
}
