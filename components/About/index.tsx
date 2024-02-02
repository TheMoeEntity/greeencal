import Image from "next/image";
import styles from "../../app/page.module.css";
import outreach from "../../public/images/card.jpg";
import outreach2 from "../../public/images/outreach.jpg";

const About = () => {
  const assets: { title: string; icon: string }[] = [
    {
      title: "Education & Food for Chidren",
      icon: "fa-solid fa-user-tie",
    },
    {
      title: "Outreach",
      icon: "fa-solid fa-cart-plus",
    },
    {
      title: "Grants and Scholarships",
      icon: "fa-solid fa-clock-rotate-left",
    },
  ];

  return (
    <div className={styles.about}>
      <div className={styles.desc}>
        {assets.map((x, i) => (
          <div key={i} className={styles.Card}>
            <span>
              <i className={x.icon} aria-hidden="true"></i>
            </span>
            <span>
              <h3>{x.title}</h3>
            </span>
            <span>
              <p>
                When deciding which charity to donate to, it important to do
                your research.
              </p>
            </span>
            <span>
              <b>More Details</b>
            </span>
          </div>
        ))}
      </div>
      <div className={styles.aboutUs}>
        <div>
          <h2>About Us</h2>
          <h1>We Are Best Charity Organization around.</h1>
          <p>
            When deciding which charity to donate to, {`it's`} important to do
            your search and find one that aligns with your values and interests.
            Look for charities that are transparent preventable diseases,
          </p>
          <div className={styles.aboutList}>
            <div>
              <div>
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div>
                <div>
                  <b>Quick Fundraising</b>
                </div>
                <p>
                  Fund programs that help children escape poverty providing
                  vocational training.
                </p>
              </div>
            </div>
            <div>
              <div>
                <i className="fa-solid fa-user-tie"></i>
              </div>
              <div>
                <div>
                  <b>Volunteer</b>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quis, totam veritatis doloribus molestiae impedit commodi.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.readmore}>
            <button>Read More</button>
          </div>
        </div>

        <div>
          <Image
            src={outreach2}
            alt="Hero Image"
            priority
            fill
            style={{
              objectFit: "cover",
              transform: "rotate(10deg) translateX(-10px)",
            }}
          />
          <Image src={outreach} alt="Hero Image" priority fill />
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
          {[...Array(3)].map((_x, i) => (
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
      </div>
    </div>
  );
};

export default About;
