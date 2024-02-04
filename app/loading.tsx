"use client";
import Image from "next/image";
import logo from "../public/images/greencal_logo.png";

const Loading = () => {
  return (
    <div className="preloader">
      <div className="loaderContainer">
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
      </div>
    </div>
  );
};

export default Loading;
