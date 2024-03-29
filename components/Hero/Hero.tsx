"use client";
import styles from "./Hero.module.css";
import Image from "next/image";
import outreach from "../../public/images/outreach.jpg";
import grill from "../../public/images/card.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function Hero() {
  const spinRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (spinRef.current) {
      spinRef.current.classList.add(styles.animateIn);
    }
  }, []);

  return (
    <div className={styles.hero}>
      <Image
        src={outreach}
        alt="Background image of our outreach in Abakaliki, Ebonyi state"
        priority
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
      />
      <div className={styles.overlay}></div>
      <div className={styles.caption}>
        <ParallaxProvider>
          <Parallax speed={-10}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {
                  x: "-100vw",
                  opacity: 0,
                },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: 1,
                    duration: 1,
                    type: "spring",
                    bounce: 0.4,
                  },
                },
              }}
            >
              <div>
                <div>
                  <h2>Charity is our priority</h2> <br />
                  <h1>Giving help To Those Who Need It.</h1>
                  <p>
                    Empowering lives through compassionate giving. Join Greencal
                    Foundation in making a positive impact in Abakaliki, Ebonyi
                    State, Nigeria.
                  </p>
                  <br />
                  <div className={styles.book}>
                    <button>DONATE NOW</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Parallax>
        </ParallaxProvider>
        <div>
          <div ref={spinRef} className={styles.spin}>
            <Image
              className={`${styles.spinImg}`}
              src={grill}
              alt="Picture of one of our events"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
