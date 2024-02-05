import dynamic from "next/dynamic";
const DonationDetails = dynamic(
  () => import("../../../components/DonationsPage/DonationDetails")
);
const page = () => {
  return <DonationDetails />;
};

export default page;
