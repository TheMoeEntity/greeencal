import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Helpers } from "..";
import { linkType } from "../types";

export const useResize = () => {
  const [val, setVal] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto";
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + "px";
    }
  };

  useEffect(resizeTextArea, [val]);
  return { val, setVal, textAreaRef };
};

export const useScrollTop = () => {
  const pathname = usePathname();
  const scrollBtn = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    if (scrollBtn.current) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        scrollBtn.current.style.bottom = "30px";
        scrollBtn.current.style.opacity = "1";
      } else {
        scrollBtn.current.style.bottom = "-20px";
        scrollBtn.current.style.opacity = "0";
      }
    }
  };
  const scrollTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { scrollTop, scrollBtn, pathname };
};
export const useLinks = () => {
  const router = useRouter();
  const [links, setLinks] = useState<linkType[]>(Helpers.links);
  const pathname = usePathname();
  useEffect(() => {
    console.log(pathname.slice(1, pathname.length));
    setLinks((currLink) => {
      const newLink = currLink.map((x) =>
        x.href === pathname.slice(1, pathname.length)
          ? {
              ...x,
              isActive: true,
            }
          : {
              ...x,
              isActive: false,
            }
      );
      return newLink;
    });
  }, [pathname]);
  const LinkAction = (page: string) => {
    setLinks((currLink) => {
      const newLink = currLink.map((x) =>
        x.href === page
          ? {
              ...x,
              isActive: true,
            }
          : {
              ...x,
              isActive: false,
            }
      );
      return newLink;
    });
    router.push(`/${page}`);
  };
  return { links, LinkAction };
};
