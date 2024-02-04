import { linkType } from "./types";

export class Helpers {
  static links: linkType[] = [
    {
      name: "Home",
      isActive: false,
      href: "",
    },
    {
      name: "About",
      isActive: false,
      href: "#about",
    },
    {
      name: "Services",
      isActive: false,
      href: "#services",
    },
    {
      name: "Donations",
      isActive: false,
      href: "donations",
    },
    {
      name: "Contact",
      isActive: false,
      href: "contact",
    },
  ];
}
