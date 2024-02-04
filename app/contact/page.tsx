import dynamic from "next/dynamic";
const ContactPage = dynamic(() => import("../../components/ContactPage"));
import { Suspense } from "react";
import Loading from "../loading";

const Contact = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="contactpage">
        <ContactPage />
      </div>
    </Suspense>
  );
};

export default Contact;
