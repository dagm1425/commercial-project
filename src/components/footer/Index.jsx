import styles from "./style.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export default function Index() {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-main"]}>
        <div className={styles["footer-info"]}>
          <h2>
            your trusted
            <br />
            real estate partner
          </h2>
          <div>
            <p>general enquiries</p>
            <div>
              <a href="mailto:info@asaitaproperties.com">
                info@asaitaproperties.com
              </a>
              <br />
              <a href="tel:+251118712663">+251 118 71 26 63</a>
            </div>
          </div>
        </div>
        <div className={styles["footer-branding"]}>
          <div className={styles.logo}>
            <img src="/images/other/logo.png" alt="logo" />
          </div>
          <div className={styles["socials-wrapper"]}>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <p className={styles["footer-note"]}>© 2024 - All Rights Reserved</p>
    </div>
  );
}
