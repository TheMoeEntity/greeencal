import styles from "./index.module.css";
import logo from "../../public/images/greencal_white.png";
import Image from "next/image";
import { useRef, useState, useEffect, CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const sideContent = useRef<HTMLDivElement | null>(null);
  const [sticky, setSticky] = useState("");
  const headerRef = useRef<HTMLDivElement | null>(null);
  const more = useRef<HTMLLIElement | null>(null);
  const inner = useRef<HTMLUListElement | null>(null);
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

  const showMore = () => {
    if (more.current) {
      const elemHeight = more.current.scrollHeight;
      const height = more.current.style.maxHeight;
      more.current.style.maxHeight =
        height === "" || height === "0px" ? `${elemHeight}px` : "0";
    }
  };
  const innerAction = () => {
    if (inner.current) {
      const elemHeight = inner.current.scrollHeight;
      const height = inner.current.style.maxHeight;
      inner.current.style.maxHeight =
        height === "" || height === "0px" ? `${elemHeight}px` : "0";
    }
  };

  return (
    <div className={`${styles.header}`} style={showStyle()}>
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
            <li onClick={showMore}>
              <span>Services</span>
              <span>
                <i className="fa fa-plus"></i>
              </span>
            </li>
            <li ref={more} className={styles.more}>
              <ul>
                <li>Service Style 1</li>
                <li>Service Style 2</li>
                <li onClick={innerAction}>
                  <span>Services Style 3</span>
                  <span>
                    <i className="fa fa-plus"></i>
                  </span>
                </li>
                <ul ref={inner} className={styles.inner}>
                  <li>General Construction</li>
                  <li>Property Maintenance</li>
                  <li>Preconstruction</li>
                  <li>Virtual Design and Build</li>
                  <li>Project management</li>
                  <li>Design Build</li>
                </ul>
              </ul>
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
              src={logo}
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
              <Link href={"/"}> Home + </Link>
              <div className={styles.dropdn}>
                <ul>
                  <li className={styles.multiple}>
                    Single Pages +
                    <div className={styles.mores}>
                      <ul>
                        <li>Singin Out Loud</li>
                        <li>Nothing can stop me</li>
                        <li>Service Single 3</li>
                        <li>Lorem Ipsum</li>
                        <li>Dolor SIt </li>
                        <li>Moses Pages</li>
                        <li>Sex Playlist</li>
                        <li>Bunch of words</li>
                        <li>Sia is the greatest</li>
                      </ul>
                    </div>
                  </li>
                  <li className={styles.multiple}>
                    Multiple Pages +
                    <div className={styles.mores}>
                      <ul>
                        <li>Services Style 1</li>
                        <li>Services Style 2</li>
                        <li>Service Single 3</li>
                        <li>Lorem Ipsum</li>
                        <li>Dolor SIt </li>
                        <li>Moses Pages</li>
                        <li>Sex Playlist</li>
                        <li>Bunch of words</li>
                        <li>Sia is the greatest</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>About</li>
            <li>
              Services +
              <div className={styles.dropdn}>
                <ul>
                  <li>Donations</li>
                  <li>Outreach</li>
                  <li>Grants and Scholarships</li>
                </ul>
              </div>
            </li>
            <li>
              Donations +
              <div className={styles.dropdn}>
                <ul>
                  <li className={styles.multiple}>
                    Team
                    <div className={styles.mores}>
                      <ul>
                        <li>Team Style 1</li>
                        <li>Team Style 2</li>
                        <li>Team Style 3</li>
                        <li>Team Style 4</li>
                        <li>Team Style 5 </li>
                      </ul>
                    </div>
                  </li>
                  <li>Projects</li>
                  <li>Pricing Plan</li>
                  <li>Faq</li>
                  <li>Gallery</li>
                  <li>Shop</li>
                </ul>
              </div>
            </li>
            <li>Blog </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.search}>
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
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
