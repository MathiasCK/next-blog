import { useRef } from "react";
import classes from "./styles/contact.module.css";

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const registrationHandler = (e) => {
    e.preventDefault();

    const userEmail = emailRef.current.value;
    const userName = nameRef.current.value;
    const userMessage = messageRef.current.value;

    fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        name: userName,
        message: userMessage,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert("Message sent");
    emailRef.current.value = "";
    nameRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form className={classes.form} onSubmit={registrationHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input ref={nameRef} type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            ref={messageRef}
            type="text"
            id="message"
            required
            rows="5"
          />
        </div>
        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
