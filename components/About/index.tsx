"use client";
import { Helpers } from "@/Helpers";
import { donationType } from "@/Helpers/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../../app/page.module.css";
import outreach from "../../public/images/card.jpg";
import outreach2 from "../../public/images/outreach.jpg";

const About = ({ donations }: { donations: donationType[] }) => {
  const router = useRouter();

  return (
    <div id="services" className={styles.about}>
      <div className={styles.desc}>
        {Helpers.assets.map((x, i) => (
          <div key={i} className={styles.Card}>
            <span>
              <i className={x.icon} aria-hidden="true"></i>
            </span>
            <span>
              <h3>{x.title}</h3>
            </span>
            <span>
              <p>{x.text}</p>
            </span>
            {/* <span>
              <b>More Details</b>
            </span> */}
          </div>
        ))}
      </div>
      <div id="about" className={styles.aboutUs}>
        <div>
          <h2>About Us</h2>
          <h1>
            Empowering Lives, Building Futures: Our Commitment to Positive
            Change.
          </h1>
          <p>
            At Greencal Foundation, {`we're`} passionate about transforming
            lives in Abakaliki, Ebonyi State. With a focus on education, food
            outreach, and scholarships, we strive to create a brighter future
            for children, fostering a community of empowerment and growth.
          </p>
          {/* <div className={styles.aboutList}>
            <div>
              <div>
                <i className="fas fa-donate"></i>
              </div>
              <div>
                <div>
                  <b>Quick Fundraising</b>
                </div>
                <p>
                  Join hands with us in making a difference! Our volunteer work
                  embodies the spirit of community, kindness, and positive
                  impact. Together, we contribute to meaningful projects,
                  creating a brighter future for those in need.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fas fa-hands-helping"></i>
              </div>
              <div>
                <div>
                  <b>Volunteer</b>
                </div>
                <p>
                  Your support fuels our mission! By contributing to our
                  fundraising efforts, you become a vital part of positive
                  change. Every donation counts, bringing us one step closer to
                  providing essential resources and support to those who need it
                  most.
                </p>
              </div>
            </div>
          </div> */}
          <div className={styles.readmore}>
            <button>Read More</button>
          </div>
        </div>

        <div>
          <Image
            src={outreach2}
            alt="Kids in the classroom for the hero section"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            style={{
              objectFit: "cover",
              transform: "rotate(10deg) translateX(-10px)",
            }}
          />
          <Image
            src={outreach}
            alt="Hero Image"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.title}>
          <h3>
            <b>Your Donations help determine the fate of children</b>
          </h3>
          <h2>How to get involved</h2>
        </div>
        <div className={styles.grid}>
          {donations.map((x, i) => (
            <div key={i}>
              <div className={styles.img}>
                <div className={styles.tag}>{x.tag}</div>
                <Image
                  src={"/images" + x.img}
                  style={{ objectFit: "cover" }}
                  alt="Picture of our donations and outreach"
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
                    {x.date}
                  </span>
                  <span>
                    <i className="fa fa-clock"></i>
                    {x.time}
                  </span>
                </div>
                <p>{x.name}</p>
                <button onClick={() => router.push("/donations/" + x.slug)}>
                  DONATE NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
