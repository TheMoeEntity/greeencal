import { linkType, testimonialsType } from "./types";
import outreach from "../public/images/card.jpg";
import outreach2 from "../public/images/outreach.jpg";
import { getDocuments } from "@/lib/firebase";

export class Helpers {
  static customDonations = ["₦40k", "₦100k", "₦30k", "₦60k"];
  static assets: { title: string; icon: string; text: string }[] = [
    {
      title: "Education & Food for Children",
      icon: "fas fa-book-open",
      text: "Empowering young minds with knowledge and nourishment for a brighter future.",
    },
    {
      title: "Outreach",
      icon: "fas fa-hands-helping",
      text: "Extending a helping hand to communities through impactful outreach initiatives. ",
    },
    {
      title: "Grants and Scholarships",
      icon: "fas fa-graduation-cap",
      text: "Fueling dreams with opportunities through grants and scholarships for aspiring minds.",
    },
  ];
  static testimonials: testimonialsType[] = [
    {
      img: outreach,
      name: "Chijioke Nwankwo",
      work: "Software Engineer, Lagos, Nigeria",
      text: "Greencal Foundation has been a beacon of hope for children in our community. Their dedication to education and scholarships is changing lives and shaping a brighter future.",
    },
    {
      img: outreach2,
      name: "Funmilayo Adegoke",
      work: "Nutristionist, Abuja, Nigeria",
      text: "I've witnessed the impact of Greencal Foundation's food outreach programs. They not only provide nourishment but also promote a healthy community, ensuring no child goes to bed hungry.",
    },
    {
      img: outreach,
      name: "Ibrahim Abdullahi",
      work: "Education Advocate, Kano, Nigeria",
      text: "As an education advocate, I applaud Greencal Foundation's commitment to empowering young minds. The scholarships offered are instrumental in bridging the gap and creating opportunities for deserving students.",
    },
  ];
  static images = [
    {
      // src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
      src: "/images/outreach7.jpg",
      width: 330,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
      tags: [
        { value: "Education", title: "Education" },
        { value: "Outreach", title: "Outreach" },
      ],
    },
    {
      // src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
      src: "/images/outreach2.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Classroom", title: "Classroom" },
        { value: "Scholarships", title: "People" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/outreach6.jpg",
      width: 320,
      height: 212,
    },
    {
      src: "https://borgenproject.org/wp-content/uploads/Charities-Operating-in-Nigeria-1030x690.jpg",
      width: 320,
      height: 212,
      tags: [
        { value: "Education", title: "Education" },
        { value: "Outreach", title: "Outreach" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
      src: "/images/outreach4.jpg",
      width: 340,
      height: 174,
      caption: "After Rain (Jeshu John - designerspics.com)",
    },
  ];
  static links: linkType[] = [
    {
      name: "Home",
      isActive: false,
      href: "",
    },
    {
      name: "Services",
      isActive: false,
      href: "#services",
    },
    {
      name: "About",
      isActive: false,
      href: "#about",
    },
    {
      name: "Testimonials",
      isActive: false,
      href: "#testimonials",
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
  static getSingle = async (id: string) => {
    const data = await this.getData("donations");
    if (!data) return;
    const single = data.find((x) => {
      return x.slug == id;
    });
    return single;
  };
  static getData = async (data: string) => {
    try {
      return await getDocuments(data);
    } catch (error) {
      return null;
    }
  };
}
