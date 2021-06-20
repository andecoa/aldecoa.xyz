import { readdirSync, statSync } from "fs";
import path from "path";

export type TReadFilesSort = { name: string; dateCreated: number }[];

/**
 * Gets the file names inside of the supplied directory
 * @param dir The path we are reading from containing all the file names we need
 * @returns An array of file names
 */
export default function readFilesSort(dir: string): TReadFilesSort {
  const fullPath = path.join(process.cwd(), dir);
  const files = readdirSync(fullPath);
  return files
    .map((file) => ({
      name: path.parse(file).name,
      dateCreated: statSync(`${fullPath}/${file}`).birthtime.getTime(),
    }))
    .sort((a, b) => a.dateCreated - b.dateCreated);
}
