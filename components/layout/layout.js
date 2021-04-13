import { useContext } from "react";
import NotificationContext from "../../store/notification.context";
import Notification from "../ui/notification";
import Navbar from "./navbar";

const Layout = (props) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </div>
  );
};

export default Layout;
