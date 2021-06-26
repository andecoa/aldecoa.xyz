import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import ts from "react-syntax-highlighter/dist/cjs/languages/prism/typescript";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import type {
  CodeComponent,
  ReactMarkdownProps,
} from "react-markdown/src/ast-to-react";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("python", python);

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
    <code className="p-1 pt-0.5 bg-indigo-100 dark:text-indigo-900 rounded text-sm">
      {children}
    </code>
  );
};

export default CodeBlock;
