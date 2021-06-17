import PageWrapper from "@components/PageWrapper";
import parseMarkdown from "@utils/parseMarkdown";
import StyledReactMarkdown from "@components/StyledReactMarkdown";
import type { GetStaticProps } from "next";
import type { TParsedMarkdown } from "@utils/parseMarkdown";

export const getStaticProps: GetStaticProps = async () => {
  const file = "./src/data/staticPages/about.md";
  const { data, content } = parseMarkdown(file);
  return {
    props: { data, content },
  };
};

export default function AboutPage({ data, content }: TParsedMarkdown) {
  return (
    <PageWrapper pageTitle={data.pageTitle}>
      <StyledReactMarkdown markdown={content} />
    </PageWrapper>
  );
}
