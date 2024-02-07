import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials";
import { Helpers } from "@/Helpers";
import styles from "./page.module.css";

export default async function Home() {
  const data = await Helpers.getData();
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Testimonials testimonials={data} />
    </main>
  );
}
