import readFilesSort from "@utils/readFilesSort";
import parseMarkdown from "@utils/parseMarkdown";
import parseDate from "@utils/parseDate";
import getReadTime from "@utils/getReadTime";
import PageWrapper from "@components/PageWrapper";
import { IoTimeOutline, IoCalendarOutline } from "react-icons/io5";
import Link from "next/link";
import type { GetStaticProps } from "next";
import type { TBlogPost } from "@ts/content";

export const getStaticProps: GetStaticProps = async () => {
  const blogPath = "./src/data/blog";
  const blog = readFilesSort(blogPath);
  const formattedBlog: TBlogPost[] = blog.map((post) => {
    const { data, content } = parseMarkdown(`${blogPath}/${post.name}.md`);
    return {
      slug: post.name,
      title: data.pageTitle,
      date: post.dateCreated,
      dateString: parseDate(post.dateCreated),
      readTime: getReadTime(content),
    };
  });

  return { props: { blog: formattedBlog } };
};

export default function BlogPage({ blog }: { blog: TBlogPost[] }) {
  if (blog.length === 0)
    return (
      <PageWrapper pageTitle="Blog under construction...">
        <h1>Blog</h1>
        <p>Under construction...</p>
      </PageWrapper>
    );

  return (
    <PageWrapper pageTitle="Angelo's Blog">
      <h1 className="mb-12">Blog</h1>
      <ul className="space-y-8">
        {blog.map((post) => (
          <li key={post.slug} className="max-w-2xl">
            <Link href={`/blog/${post.slug}`}>
              <h3 className="font-bold text-lg hover:text-indigo-500">
                {post.title}
              </h3>
            </Link>
            <div className="flex justify-between w-60">
              <div>
                <IoCalendarOutline className="inline-block mr-2" />
                <time dateTime={post.dateString}>{post.dateString}</time>
              </div>
              <div>
                <IoTimeOutline className="inline-block mr-2" />
                <span>{post.readTime} min</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
}
