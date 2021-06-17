import { GetStaticProps } from "next";
import readFilesSort from "@utils/readFilesSort";
import type { TReadFilesSort } from "@utils/readFilesSort";

export const getStaticProps: GetStaticProps = async () => {
  const blog = readFilesSort("src/data/blog");
  return { props: { blog } };
};

export default function index({ blog }: { blog: TReadFilesSort }) {
  if (blog.length === 0) return <div>Coming soon</div>;
  return (
    <div>
      <ul>
        {blog.map((post) => (
          <li key={post.name}>
            <h2>{post.name}</h2>
            <div>{post.dateCreated}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
