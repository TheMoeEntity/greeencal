import { StaticImageData } from "next/image";
export type nomSingle = {
  name: string;
  image: StaticImageData | null;
  nomination: string;
  isWinner?: boolean;
};
export type testimonials = {
  img: StaticImageData;
  name: string;
  work: string;
  text: string;
};
export type nominees = {
  title: string;
  isActive: boolean;
  id: number;
  nominees: nomSingle[];
};
export type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export type execType = {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
};
export interface amanGroupType {
  name: string;
  position: string;
  img: StaticImageData;
  maxWidth?: number;
}
export type blogPostsType = {
  title: string;
  image: StaticImageData;
};
export type noms = {
  title: string;
  image: StaticImageData;
  artist: string;
  id: number;
};
export type blogType = {
  blog_image: string;
  blog_title: string;
  slug: string;
  paragraphs: string[];
  headings?: {
    title: string;
    content: string[];
  }[];
};
export type linkType = {
  name: string;
  isActive: boolean;
  href: string;
};
