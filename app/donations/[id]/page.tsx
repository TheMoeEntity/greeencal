import { Helpers } from "@/Helpers";
import { donationType } from "@/Helpers/types";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const DonationDetails = dynamic(
  () => import("../../../components/DonationsPage/DonationDetails")
);
const page = async ({ params }: any) => {
  const data = (await Helpers.getSingle(params.id)) as donationType;

  if (!data) {
    notFound();
  }
  return <DonationDetails data={data} slug={params.id} />;
};

export default page;
