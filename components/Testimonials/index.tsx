import React from "react";
import outreach from "../../public/images/card.jpg";
import outreach2 from "../../public/images/outreach.jpg";
import greencal from "../../public/images/greencal_logo.png";
import styles from "../../app/page.module.css";
import { testimonials } from "@/Helpers/types";
import Image from "next/image";

const Testimonials = () => {
  const testimonials: testimonials = [
    {
      img: outreach,
      name: "Ansu Fati",
      work: "Footballer, lagos",
    },
    {
      img: outreach2,
      name: "Tim Cook",
      work: "Web Developer, USA",
    },
    {
      img: outreach,
      name: "Tasha Haddish",
      work: "Food Critic, Abuja",
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
              <p>
                &quot; Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis est ea omnis iure harum ratione aperiam fugiat at
                consequuntur ipsam hic, totam dolore voluptas repellat? &quot;
              </p>
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
    </div>
  );
};

export default Testimonials;
