import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.logo}>
            <Image
              src={logo}
              style={{
                objectFit: "cover",
              }}
              alt="Greencal-foundation logo"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p>
            Giving help To Those Who Need It. Charity works make the world a
            better place.
          </p>
          <strong>Opening Hours :</strong> Monday Sat: 9am to 6pm
          <div className={styles.icons}>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-pinterest"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div>
          <h2>GET SUPPORT</h2>
          <div>
            <div>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>Nepa Junction, Mile 50, Abakaliki, Ebonyi, Nigeria</div>
          </div>

          <div>
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>(+234) 807 548 9362, (+880) 155 69569 366</div>
          </div>
          <div>
            <div style={{ width: "50px" }}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>info@greencal.com, info.greencal@yahoo.com</div>
          </div>
        </div>
        <div>
          <h2>OUR SERVICES</h2>
          <div>
            <i className="fa fa-angle-right"></i>
            Donations
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Grants and Scholarships
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Education.
          </div>
          <div>
            <i className="fa fa-angle-right"></i>
            Outreach
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2024 Greencal Foundation.</div>
        <div>
          <ul>
            <li>
              <Link href={"/"}>
                Home <i className="fas fa-circle"></i>
              </Link>
            </li>
            <li>
              <Link href={"/#about"}>
                About <i className="fas fa-circle"></i>
              </Link>
            </li>
            <li>
              <Link href={"/#services"}>
                Services <i className="fas fa-circle"></i>
              </Link>
            </li>
            <li>
              <Link href={"/donations"}>
                Donations <i className="fas fa-circle"></i>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                Contact <i className="fas fa-circle"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.credits}>
        <p>
          Designed and developed by{" "}
          <a
            target={`_blank`}
            rel="noopener noreferrer"
            href="https://github.com/TheMoeEntity"
          >
            Moses Nwigberi{" "}
          </a>
          - Freelance Web Developer
        </p>
      </div>
    </div>
  );
};

export default Footer;
