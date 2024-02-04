import dynamic from "next/dynamic";
const DonationsPage = dynamic(() => import("../../components/DonationsPage"));
const Donations = () => {
  return <DonationsPage />;
};

export default Donations;
