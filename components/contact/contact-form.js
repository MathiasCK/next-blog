import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification.context";
import classes from "./styles/contact.module.css";

const ContactForm = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const notificationCtx = useContext(NotificationContext);

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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then((data) => {
        console.log(data);
        notificationCtx.showNotification({
          title: "Signed up!",
          message: "Succesfully registered for newsletter",
          status: "success",
        });
        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error signing up!",
          message: error.message || "Error registering for newsletter",
          status: "error",
        });
      });
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
