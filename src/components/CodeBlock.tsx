import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import type {
  CodeComponent,
  ReactMarkdownProps,
} from "react-markdown/src/ast-to-react";

const CodeBlock: CodeComponent = ({
  inline = false,
  className = "",
  children,
}: ReactMarkdownProps & {
  inline: boolean;
  className: string;
}) => {
  const match = /language-(\w+)/.exec(className || "");
  if (!inline && match) {
    return (
      <SyntaxHighlighter
        style={materialOceanic}
        language={match[1]}
        PreTag="div"
        showLineNumbers
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }
  return (
    <code className="p-0.5 bg-indigo-100 dark:text-indigo-900">{children}</code>
  );
};

export default CodeBlock;
