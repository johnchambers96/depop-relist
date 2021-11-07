/**
 * Take a list of strings and into a single string
 * @param strings
 * @param delimiter
 * @returns String
 */
export function joinStrings<T>(strings: T[], delimiter = " "): string {
  return strings.filter((s) => s && typeof s === "string").join(delimiter);
}

/**
 * Will find username within an anchor tag
 * @returns String
 */
export const findUsername = (): string => {
  return (
    document
      .querySelectorAll(`[href*="/likes/"]`)[0]
      ?.getAttribute("href")
      ?.split("/")[1] || ""
  );
};


