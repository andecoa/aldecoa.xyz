import readFilesSort from "@utils/readFilesSort";
import parseMarkdown from "@utils/parseMarkdown";
import StyledReactMarkdown from "@components/StyledReactMarkdown";
import PageWrapper from "@components/PageWrapper";
import parseDate from "@utils/parseDate";
import getReadTime from "@utils/getReadTime";
import { IoTimeOutline, IoCalendarOutline } from "react-icons/io5";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { TParsedMarkdown } from "@utils/parseMarkdown";

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPath = "./src/data/blog";
  const blog = readFilesSort(blogPath);
  const paths = blog.map((post) => ({
    params: { slug: post.name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPath = "./src/data/blog";
  const { data, content, dateCreated } = parseMarkdown(
    `${blogPath}/${params.slug}.md`
  );
  return { props: { data, content, dateCreated } };
};

export default function BlogSlugPage({
  data,
  content,
  dateCreated,
}: TParsedMarkdown) {
  return (
    <PageWrapper pageTitle={data.pageTitle}>
      <div className="mb-12">
        <h1>{data.pageTitle}</h1>
        <div className="flex justify-between w-60">
          <div>
            <IoCalendarOutline className="inline-block mr-2" />
            <time dateTime={parseDate(dateCreated)}>
              {parseDate(dateCreated)}
            </time>
          </div>
          <div>
            <IoTimeOutline className="inline-block mr-2" />
            <span>{getReadTime(content)} min</span>
          </div>
        </div>
      </div>
      <StyledReactMarkdown markdown={content} />
    </PageWrapper>
  );
}
