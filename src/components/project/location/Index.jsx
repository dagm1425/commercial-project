import PropTypes from 'prop-types';
import styles from "./style.module.scss";

export default function Index({ location }) {
    return (
        <div className={styles["location-wrapper"]}>
            <iframe src={location} width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

Index.propTypes = {
    location: PropTypes.string.isRequired
}