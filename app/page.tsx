import About from "@/components/About";
import Hero from "@/components/Hero/Hero";
import Testimonials from "@/components/Testimonials";
import { Helpers } from "@/Helpers";
import styles from "./page.module.css";

export default async function Home() {
  const data = await Helpers.getData("testimonials");
  const donations = await Helpers.getData("donations");
  return (
    <main className={styles.main}>
      <Hero />
      <About donations={donations} />
      <Testimonials testimonials={data} />
    </main>
  );
}
