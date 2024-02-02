import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <About />
      <Testimonials />
    </main>
  );
}
