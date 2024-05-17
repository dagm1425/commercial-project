import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Odometer from "odometer";
import { PiBuildingsLight } from "react-icons/pi";
import { MdConstruction } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Index() {
  const statsWrapper = useRef(null);
  const odometerRefs = useRef([]);
  const statsData = [
    {
      label: "sqm of portfolio",
      value: "7644",
      icon: <PiBuildingsLight />,
    },
    {
      label: "sqm in development",
      value: "4130",
      icon: <MdConstruction />,
    },
    {
      label: "billion birr in value",
      value: "2.86",
      icon: <GiProfit />,
    },
    {
      label: "total employees",
      value: "471",
      icon: <FaPeopleGroup />,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect);

    if (statsWrapper.current) {
      observer.observe(statsWrapper.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersect = async (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      await Promise.all(
        odometerRefs.current.map((ref) => {
          if (ref) {
            const targetValue = ref.getAttribute("data-value");
            return new Odometer({
              el: ref,
              value: 0,
            }).update(targetValue);
          }
        }),
      );
    }
  };

  return (
    <div ref={statsWrapper} className={styles["stats-wrapper"]}>
      {statsData.map((stat, i) => {
        return (
          <div key={i} className={styles["stat-wrapper"]}>
            <div className={styles["stat-icon-wrapper"]}>{stat.icon}</div>
            <h2
              ref={(ref) => odometerRefs.current.push(ref)}
              data-value={stat.value}
              className="odometer"
            >
              0
            </h2>
            <p>{stat.label}</p>
          </div>
        );
      })}
    </div>
  );
}
