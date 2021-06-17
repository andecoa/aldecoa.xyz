import { readdirSync, statSync } from "fs";

export type TReadFilesSort = { name: string; dateCreated: number }[];

/**
 * Gets the file names inside of the supplied path
 * @param path The path we are reading from containing all the file names we need
 * @returns An array of file names
 */
export default function readFilesSort(path: string): TReadFilesSort {
  const files = readdirSync(path);
  return files
    .map((file) => ({
      name: file,
      dateCreated: statSync(`${path}/${file}`).birthtime.getTime(),
    }))
    .sort((a, b) => a.dateCreated - b.dateCreated);
}