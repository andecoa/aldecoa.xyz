import matter from "gray-matter";

export type TParsedMarkdown = {
  data: { pageTitle: string };
  content: string;
};

/**
 * Parses a markdwown file with a YAML header
 * @param filepath The path of the markdown file
 * @returns an object containing the YAML header of the markdown file and the parsed content as HTML
 */
export default function parseMarkdown(filepath: string): TParsedMarkdown {
  const { data, content } = matter.read(filepath);
  const { pageTitle } = data;
  return { data: { pageTitle }, content };
}
