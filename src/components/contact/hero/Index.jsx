import styles from "./style.module.scss";
import Overlay from "../../common/overlay/Index";
import BreadCrumb from "../../common/bread-crumb/Index";

export default function Index() {
  return (
    <div className={styles["contact-wrapper"]}>
      <BreadCrumb links={["home", "contact"]} />
      <div className={styles["contact-main"]}>
        <h1>connect with us</h1>
        <p>
          we&apos;re here to answer your questions and guide your real estate
          journey.
        </p>
      </div>
      <Overlay />
    </div>
  );
}
