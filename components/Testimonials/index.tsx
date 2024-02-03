"use client";
import React from "react";
import outreach from "../../public/images/card.jpg";
import outreach2 from "../../public/images/outreach.jpg";
import greencal from "../../public/images/greencal_logo.png";
import styles from "../../app/page.module.css";
import { testimonials } from "@/Helpers/types";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";

const Testimonials = () => {
  const testimonials: testimonials = [
    {
      img: outreach,
      name: "Chijioke Nwankwo",
      work: "Software Engineer, Lagos, Nigeria",
      text: "Greencal Foundation has been a beacon of hope for children in our community. Their dedication to education and scholarships is changing lives and shaping a brighter future.",
    },
    {
      img: outreach2,
      name: "Funmilayo Adegoke",
      work: "Nutristionist, Abuja, Nigeria",
      text: "I've witnessed the impact of Greencal Foundation's food outreach programs. They not only provide nourishment but also promote a healthy community, ensuring no child goes to bed hungry.",
    },
    {
      img: outreach,
      name: "Ibrahim Abdullahi",
      work: "Education Advocate, Kano, Nigeria",
      text: "As an education advocate, I applaud Greencal Foundation's commitment to empowering young minds. The scholarships offered are instrumental in bridging the gap and creating opportunities for deserving students.",
    },
  ];
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
    <div className={styles.testimonials}>
      <h2>Testimonials</h2>
      <h1>What {`They’re`} Talking About Us</h1>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((x, i) => (
          <div key={i}>
            <div className={styles.quotes}>
              <i className="fas fa-quote-left"></i>
            </div>
            <span>
              <p>&quot; {x.text} &quot;</p>
            </span>
            <span>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star-half" aria-hidden="true"></i>
            </span>
            <span className={styles.profile}>
              <div className={styles.img}>
                <div>
                  <Image
                    alt="food png"
                    src={x.img}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div>
                <b>- {x.name.toUpperCase()}</b> <br />
                <aside>{x.work}</aside>
              </div>
            </span>
            <div className={styles.food}>
              <Image
                alt="food png"
                src={greencal}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
      <Gallery images={images} />
    </div>
  );
};

export default Testimonials;
