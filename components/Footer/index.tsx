import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  return (
    <div className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div onClick={() => router.push("/")} className={styles.logo}>
            <Image
              src={logo}
              alt="card-image"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div>
          <h2>GET SUPPORT</h2>
          <div>
            <div className={styles.calIcons}>
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <div>Nepa Junction, Mile 50, Abakaliki, Ebonyi, Nigeria</div>
          </div>

          <div className={styles.calIcons}>
            <div>
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>(+234)807-548-9362 </div>
          </div>
          <div className={styles.calIcons}>
            <div style={{ width: "50px" }}>
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div>info@greencal.com, info.greencal@yahoo.com</div>
          </div>
        </div>

        <div>
          <h2>COMPANY</h2>
          <div>
            <Link href={"/#about"}>
              <i className="fa fa-angle-right"></i>
              About Us
            </Link>
          </div>
          <div>
            <Link href={"/donations"}>
              <i className="fa fa-angle-right"></i>
              Donations
            </Link>
          </div>
          <div>
            <Link href={"/contact"}>
              <i className="fa fa-angle-right"></i>
              Contact Us
            </Link>
          </div>
          <div>
            {/* <i className="fa fa-angle-right"></i> */}
            <div className={styles.icons}>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://web.facebook.com/Moses.Nwigberi/"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://twitter.com/pepnops"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>

              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/pepnops/"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                target={`_blank`}
                rel="noopener noreferrer"
                href="https://instagram.com/pepnops"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div>© 2024 Greencal Foundation </div>
      </div>
    </div>
  );
};

export default Footer;
