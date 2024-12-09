import styles from "./page.module.css";
import { Code } from "./code";

export const runtime = "edge";

export default async function Home(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  return (
    <main className={styles.main}>
      <Code value="Hello, World!" lang="plaintext" />
    </main>
  );
}
