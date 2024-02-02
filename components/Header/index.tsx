import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import logo2 from "../../public/images/greencal_logo.png";
import Image from "next/image";
import { useRef, useState, useEffect, CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();
  const showStyle = (): CSSProperties | {} => {
    const talkStyle: CSSProperties = {
      position: "relative",
      backgroundColor: "rgba(0, 0, 0, 0.8) !important",
      boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1) !important",
      backdropFilter: " blur(5px) !important",
      WebkitBackdropFilter: " blur(5px) !important",
    };

    return pathname === "/contact" ? talkStyle : {};
  };
  useEffect(() => {
    window.addEventListener("scroll", isSticky);

    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (headerRef.current) {
      let number = headerRef.current.style.display === "" ? 120 : 175;
      const stickyClass = scrollTop >= number ? styles.isSticky : "";
      setSticky(stickyClass);
    }
  };

  const show = () => {
    setSideBar(true);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "70%";
        sideContent.current.style.visibility = "visible";
      }
    }, 700);
  };

  const hide = () => {
    setSideBar(false);
    setTimeout(() => {
      if (sideContent.current) {
        sideContent.current.style.width = "0%";
        sideContent.current.style.visibility = "hidden";
      }
    }, 400);
  };

  return (
    <div className={`${styles.header}`}>
      <div
        style={{ right: sidebar ? "0%" : "-100%" }}
        className={styles.sidebar}
      >
        <div ref={sideContent} className={styles.sidecontent}>
          <div onClick={hide} className={styles.close}>
            &times;
          </div>
          <ul>
            <li>
              <span>Home</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li>About</li>
            <li>
              <span>Services</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li>
              <span>Pages</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li>Blog</li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={headerRef}
        style={{ display: "none" }}
        className={styles.headerOne}
      >
        <div>
          <div>
            <i className="fa fa-envelope"></i> info@konstruk.com
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div>
            <i className="fa fa-phone"></i> (+1) 7854-333-222
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
          <div>
            <i className="fa fa-marker"></i> 31 New Street, NY, USA
            &nbsp;&nbsp;&nbsp;&nbsp;|
          </div>
        </div>

        <div>
          <div>
            <i style={{ color: "#FFB703" }} className="fa fa-clock"></i> Hours:
            Mon-Fri: 9.00 am - 7.00 pm &nbsp;&nbsp;&nbsp;&nbsp;|
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div className={`${styles.headerTwo} ${sticky}`}>
        <div className={styles.logo}>
          <Link href={`/`}>
            <Image
              src={pathname == "/contact" ? logo2 : logo}
              style={{
                objectFit: "cover",
              }}
              alt="company logo"
              fill
              quality={100}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <ul>
            <li>
              <Link href={"/"}> Home </Link>
            </li>
            <li>
              <Link href={"/#about"}>About</Link>
            </li>
            <li>
              <Link href={"/#services"}>Services</Link>
            </li>
            <li>
              <Link href={"/donations"}>Donations</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.search}>
          <div>{`LETS`} TALK</div>
        </div>
        <div onClick={show} className={styles.bars}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
};

export { Header };
