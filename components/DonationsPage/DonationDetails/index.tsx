"use client";
import Image from "next/image";
import styles from "../index.module.css";
import { Gallery } from "react-grid-gallery";
import outreach2 from "../../../public/images/outreach3.jpg";
import { Helpers } from "@/Helpers";

const DonationsDetails = () => {
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
              {Helpers.customDonations.map((x, i) => (
                <div key={i}>{x}</div>
              ))}
            </div>
            <div className={styles.form}>
              <form>
                <div className={styles.formGroup}>
                  <label htmlFor="">Amount</label>
                  <input type="number" name="" value={50000} />
                </div>
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
                <div className={styles.formGroup}>
                  <label htmlFor="">Select Category:</label>
                  <select className="custom-select" style={{ width: "100%" }}>
                    <option>--Choose--</option>
                    <option>Donation</option>
                    <option>Support</option>
                    <option>Grants</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <button type="submit">DONATE NOW</button>
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
      <Gallery images={Helpers.images} />
    </div>
  );
};

export default DonationsDetails;
