import React, { useEffect, useState } from "react";
import LDheader from "../../components/ldheader";
import "../../css files/ld-notifications.css";
import { fetchMockData } from "../../mockData";
import { NotificationsNoneRounded } from "@mui/icons-material";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from mock data
    fetchMockData().then((data) => {
      setNotifications(data.notifications);
    });
  }, []);

  // Group notifications by date
  const groupedNotifications = notifications.reduce((group, notification) => {
    const { date } = notification;
    if (!group[date]) {
      group[date] = [];
    }
    group[date].push(notification);
    return group;
  }, {});

  return (
    <>
      <div>
        <LDheader className={`notification`} indicator={"indicator"}></LDheader>
        <div className="notification__container">
          <div className="notification__div">
            <div className="notification__div--header">
              <img src="bell.png" alt="" /> Notifications
            </div>
            <div className="notification__div--list">
              {/* Render grouped notifications */}
              {Object.entries(groupedNotifications).map(
                ([date, notifications]) => (
                  <div key={date} className="notification__list">
                    <p className="notifications__date">{date}</p>
                    {notifications.map((notification) => (
                      <div key={notification.id} className="notification__item">
                        <div className="notifs-icon__div">
                          <NotificationsNoneRounded></NotificationsNoneRounded>
                        </div>
                        <p>{notification.message}</p>
                      </div>
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
