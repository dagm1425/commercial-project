import { useEffect, useRef } from "react";
import "./styles.scss";
import Odometer from "odometer";
import { PiBuildingsLight } from "react-icons/pi";
import { MdConstruction } from "react-icons/md";
import { GiProfit } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";

export default function Index() {
    const stats = useRef(null);
    const odometerRefs = useRef([]);
    const statsData = [
        {
            label: "sqm of portfolio",
            value: "7644",
            icon: <PiBuildingsLight />
        },
        {
            label: "sqm in development",
            value: "4130",
            icon: <MdConstruction />
        },
        {
            label: "billion birr in portfolio value",
            value: "2.86",
            icon: <GiProfit />
        },
        {
            label: "total employees",
            value: "471",
            icon: <FaPeopleGroup />
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersect);

        if (stats.current) {
            observer.observe(stats.current);
        }

        return () => {
            observer.disconnect(); 
        };
    }, []);

    const handleIntersect = async (entries) => {
        const entry = entries[0]; 
        if (entry.isIntersecting) {
            await Promise.all(odometerRefs.current.map((ref) => {
                if (ref) {
                    const targetValue = ref.getAttribute('data-value');
                    return new Odometer({
                        el: ref,
                        value: 0,
                    }).update(targetValue);
                }
            }));
        }
    }
      
    return (
        <div ref={stats} className="statsWrapper">
            {statsData.map((stat, i) => {
                return (
                    <div key={i} className="statWrapper">
                        <div className="statIconWrapper">
                            {stat.icon}
                        </div>
                        <h1 ref={(ref) => odometerRefs.current.push(ref)} data-value={stat.value} className="odometer">0</h1>
                        <p>{stat.label}</p>
                    </div>
                )
            })}
        </div>
    )
}