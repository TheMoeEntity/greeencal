"use client";
import React from "react";
import greencal from "../../public/images/greencal_logo.png";
import styles from "../../app/page.module.css";
import Image from "next/image";
import { Gallery } from "react-grid-gallery";
import { Helpers } from "@/Helpers";
import { testimonials } from "@/Helpers/types";

const Testimonials = ({ testimonials }: any) => {
  return (
    <div id="testimonials" className={styles.testimonials}>
      <h2>Testimonials</h2>
      <h1>What {`They're`} Saying About Us</h1>
      <div className={styles.testimonialsGrid}>
        {testimonials.map((x: testimonials, i: number) => (
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
                    alt="Picture of testifier"
                    src={"/images" + x.img}
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
                alt="Greencal foundation company logo"
                src={greencal}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
      <Gallery images={Helpers.images} />
    </div>
  );
};

export default Testimonials;
