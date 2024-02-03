"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { Gallery } from "react-grid-gallery";
import outreach2 from "../../public/images/outreach.jpg";

const DonationsPage = () => {
  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://borgenproject.org/wp-content/uploads/Charities-Operating-in-Nigeria-1030x690.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Ocean", title: "Ocean" },
        { value: "People", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      width: 320,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
  ];
  return (
    <div className={styles.donations}>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.caption}>
          <div>
            <h3>
              Home <i className="fa fa-angle-right"></i> Donations
            </h3>
          </div>
          <h1>DONATIONS YOU CAN MAKE</h1>
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.title}>
          <h3>
            <b>We Love To Help Poor</b>
          </h3>
          <h2>Help & Donate To Us Now</h2>
        </div>
        <div className={styles.grid}>
          {[...Array(6)].map((_x, i) => (
            <div key={i}>
              <div className={styles.img}>
                <div className={styles.tag}>Outreach</div>
                <Image
                  src={outreach2}
                  style={{ objectFit: "cover" }}
                  alt="Event"
                  fill
                  quality={100}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className={styles.capt}>
                <div className={styles.date}>
                  <span>
                    <i className="fa fa-calendar"></i>
                    23 May, 2023
                  </span>
                  <span>
                    <i className="fa fa-clock"></i>
                    10:30 AM
                  </span>
                </div>
                <p>We assure you that your donations will be used wisely</p>
                <button>DONATE NOW</button>
              </div>
            </div>
          ))}
        </div>
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default DonationsPage;
