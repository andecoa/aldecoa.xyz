import { GetStaticProps } from "next";
import readFilesSort from "@utils/readFilesSort";
import type { TReadFilesSort } from "@utils/readFilesSort";

export const getStaticProps: GetStaticProps = async () => {
  const projects = readFilesSort("src/data/projects");
  return { props: { projects } };
};

export default function index({ projects }: { projects: TReadFilesSort }) {
  if (projects.length === 0) return <div>Coming soon</div>;
  return (
    <div>
      <ul>
        {projects.map((post) => (
          <li key={post.name}>
            <h2>{post.name}</h2>
            <div>{post.dateCreated}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}