import ContactForm from "../../components/contact/contact-form";
import Head from "next/head";

const ContactPage = () => {
  return (
    <div>
      <Head>
        <title>NextJS Blog | Contact</title>
        <meta name="description" content="NextJS Blog" />
      </Head>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
