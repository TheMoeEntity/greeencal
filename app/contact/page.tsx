import dynamic from "next/dynamic";
const ContactPage = dynamic(() => import("../../components/ContactPage"));

const Contact = () => {
  return (
    <div className="contactpage">
      <ContactPage />
    </div>
  );
};

export default Contact;
