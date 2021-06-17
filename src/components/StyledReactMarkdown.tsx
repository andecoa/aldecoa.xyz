import ReactMarkdown from "react-markdown";
import style from "@styles/react-markdown.module.css";
import CodeBlock from "@components/CodeBlock";

export type TStyledReactMarkdown = { markdown: string };

export default function StyledReactMarkdown({
  markdown,
}: TStyledReactMarkdown) {
  return (
    <ReactMarkdown
      className={style.reactMarkDown}
      linkTarget="_blank"
      components={{ code: CodeBlock }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
