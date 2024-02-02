import dynamic from "next/dynamic";
const ContactPage = dynamic(() => import("../../components/ContactPage"));

const Contact = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default Contact;
