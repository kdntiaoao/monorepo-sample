import { getBlogList } from "../utils";
import styles from "./page.module.css";

export default async function Page(): Promise<JSX.Element> {
  const blogList = await getBlogList();
  console.log(blogList);

  return (
    <main>
      <h1>Next.js App</h1>
      <ul>
        {blogList.map((blog) => (
          <li key={blog.id} className={styles.box}>
            <p>ID: {blog.id}</p>
            <p>タイトル: 「{blog.title}」</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
