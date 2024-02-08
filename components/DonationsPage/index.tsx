"use client";
import Image from "next/image";
import styles from "./index.module.css";
import { Gallery } from "react-grid-gallery";
import outreach2 from "../../public/images/outreach5.jpg";
import Link from "next/link";
import { Helpers } from "@/Helpers";
import { donationType } from "@/Helpers/types";
import { useRouter } from "next/navigation";

const DonationsPage = ({ donations }: { donations: donationType[] }) => {
  const router = useRouter();
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
        <Gallery images={Helpers.images} />
      </div>
    </div>
  );
};

export default DonationsPage;
