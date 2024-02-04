import dynamic from "next/dynamic";
const DonationsPage = dynamic(() => import("../../components/DonationsPage"));
import { Suspense } from "react";
import Loading from "../loading";
const Donations = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DonationsPage />
    </Suspense>
  );
};

export default Donations;
