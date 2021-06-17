import PageWrapper from "@components/PageWrapper";
import parseMarkdown from "@utils/parseMarkdown";
import ReactMarkdown from "react-markdown";
import { GetStaticProps } from "next";
import type { TParsedMarkdown } from "@utils/parseMarkdown";

export const getStaticProps: GetStaticProps = async () => {
  const { data, content } = parseMarkdown(
    "./src/data/staticPages/networks-and-marketplaces.md"
  );
  return {
    props: { data, content },
  };
};

export default function NetowkrsAndMarketplacesPage({
  data,
  content,
}: TParsedMarkdown) {
  return (
    <PageWrapper pageTitle={data.pageTitle}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </PageWrapper>
  );
}
