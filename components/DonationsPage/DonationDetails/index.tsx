"use client";
import Image from "next/image";
import styles from "../index.module.css";
import { Gallery } from "react-grid-gallery";
import outreach2 from "../../../public/images/outreach.jpg";
import Link from "next/link";

const DonationsDetails = () => {
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
  const customDonations = ["₦40k", "₦100k", "₦30k", "₦60k"];
  return (
    <div className={styles.donations}>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={styles.caption}>
          <div>
            <h3>
              Donations <i className="fa fa-angle-right"></i> Giving To The Poor
            </h3>
          </div>
          <h1>GIVING TO THE POOR</h1>
        </div>
      </div>
      <div className={styles.donationDetails}>
        <div className={styles.donationsGrid}>
          <div>
            <h2>SELECT YOUR DONATION</h2>
            <div className={styles.custom}>
              {customDonations.map((x, i) => (
                <div key={i}>{x}</div>
              ))}
            </div>
            <div className={styles.form}>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="">Full Name:</label>
                  <input type="text" name="" id="" />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Email:</label>
                  <input type="text" name="" id="" required />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="">Phone:</label>
                  <input type="text" name="" id="" />
                </div>
              </form>
            </div>
          </div>
          <div>
            <div className={styles.img}>
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
            <div className={styles.details}>
              <h2>Giving TO THE POOR</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus voluptate adipisci fugiat odit pariatur veniam.
              </p>
              <div>
                <div>
                  <span>Your Donation</span>
                  <span>
                    <b>₦{"50,000".toLocaleString()}</b>
                  </span>
                </div>
                <div>
                  <span>Running Donation</span>
                  <span>
                    <b>₦{"246,000".toLocaleString()}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Gallery images={images} />
    </div>
  );
};

export default DonationsDetails;
