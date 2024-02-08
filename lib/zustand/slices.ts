import { Helpers } from "@/Helpers";
import { donationType, testimonials } from "@/Helpers/types";
import { DocumentData } from "firebase/firestore";
import { StateCreator } from "zustand";

export interface TestimonialSlice {
  testimonials: testimonials[];
  fetchTestimonials: () => void;
}
export interface DonationsSlice {
  donations: donationType[];
  fetchDonations: () => void;
}
const getAllDonations = async () => {
  let donations: DocumentData = [];
  await Helpers.getData("testimonials").then((x) => {
    donations.push(x);
  });
  return donations;
};

export const createDonationSlice: StateCreator<DonationsSlice> = (set) => ({
  donations: [],
  fetchDonations: async () => {
    const res = await Helpers.getData("donations");
    set({ donations: res as donationType[] });
  },
});
export const createTestimonialSlice: StateCreator<TestimonialSlice> = (
  set
) => ({
  testimonials: [],
  fetchTestimonials: async () => {
    const res = await Helpers.getData("testimonials");
    set({ testimonials: res as testimonials[] });
  },
});
