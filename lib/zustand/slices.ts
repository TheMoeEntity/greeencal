import { Helpers } from "@/Helpers";
import { donationType, testimonialsType } from "@/Helpers/types";
import { DocumentData } from "firebase/firestore";
import { StateCreator } from "zustand";

export interface TestimonialSlice {
  testimonials: testimonialsType[];
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

export const createDonationSlice: StateCreator<DonationsSlice> = (
  set,
  get
) => ({
  donations: [],
  fetchDonations: async () => {
    const fetched = get().donations;
    const res = await Helpers.getData("donations")
      .then((x) => {
        fetched.push(x as unknown as donationType);
        return x;
      })
      .catch(() => []);
    fetched.push(res as unknown as donationType);
    set({ donations: fetched });
  },
});
export const createTestimonialSlice: StateCreator<TestimonialSlice> = (
  set,
  get
) => ({
  testimonials: [],
  fetchTestimonials: async () => {
    const fetched = get().testimonials;
    const res = await Helpers.getData("testimonials")
      .then((x) => {
        fetched.push(x as unknown as testimonialsType);
        return x;
      })
      .catch(() => []);
    fetched.push(res as unknown as testimonialsType);
    set({ testimonials: fetched });
  },
});
