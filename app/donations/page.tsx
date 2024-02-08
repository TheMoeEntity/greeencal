import { Helpers } from "@/Helpers";
import { donationType } from "@/Helpers/types";
import dynamic from "next/dynamic";
const DonationsPage = dynamic(() => import("../../components/DonationsPage"));
const Donations = async () => {
  const donations = (await Helpers.getData("donations")) as donationType[];
  return <DonationsPage donations={donations} />;
};

export default Donations;
