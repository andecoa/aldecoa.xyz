import PageWrapper from "@components/PageWrapper";
import parseMarkdown from "@utils/parseMarkdown";
import StyledReactMarkdown from "@components/StyledReactMarkdown";
import { GetStaticProps } from "next";
import type { TParsedMarkdown } from "@utils/parseMarkdown";

export const getStaticProps: GetStaticProps = async () => {
  const { data, content } = parseMarkdown(
    "./src/data/staticPages/tech-stack.md"
  );
  return {
    props: { data, content },
  };
};

export default function TechStackPage({ data, content }: TParsedMarkdown) {
  return (
    <PageWrapper pageTitle={data.pageTitle}>
      <StyledReactMarkdown markdown={content} />
    </PageWrapper>
  );
}
