import { create } from "zustand";
import {
  DonationsSlice,
  createDonationSlice,
  TestimonialSlice,
  createTestimonialSlice,
} from "./slices";

type StoreState = TestimonialSlice & DonationsSlice;

export const useAppStore = create<StoreState>()((...a) => ({
  ...createDonationSlice(...a),
  ...createTestimonialSlice(...a),
}));
