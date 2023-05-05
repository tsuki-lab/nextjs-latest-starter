import styles from './page.module.scss';
import { Card } from '@/components/Card';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>
          <a href="https://nextjs.org">Next.js</a> latest starter
        </h1>

        <p className={styles.message}>
          Get started by editing <code>app/page.tsx</code>
        </p>

        <div className={styles.cards}>
          <Card
            href="https://nextjs.org/docs"
            title="Documentation"
            description="Find in-depth information about Next.js features and API."
          />

          <Card
            href="https://nextjs.org/learn"
            title="Learn"
            description="Learn about Next.js in an interactive course with quizzes!"
          />

          <Card
            href="https://github.com/vercel/next.js/tree/canary/examples"
            title="Examples"
            description="Discover and deploy boilerplate example Next.js projects."
          />

          <Card
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            title="Deploy"
            description="Instantly deploy your Next.js site to a public URL with Vercel."
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tsuki-lab"
          target="_blank"
          rel="noopener noreferrer"
        >
          by hanetsuki
        </a>
      </footer>
    </div>
  );
}
