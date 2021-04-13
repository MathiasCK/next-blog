import NotificationContext from "../../../store/notification.context";
import classes from "./notification.module.css";
import { useContext } from "react";
import ReactDOM from "react-dom";

const Notification = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById("notifications")
  );
};

export default Notification;
