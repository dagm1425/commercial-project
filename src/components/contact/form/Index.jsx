import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import emailjs from "@emailjs/browser";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { LuDot } from "react-icons/lu";
import { BsArrowRightShort } from "react-icons/bs";

export default function Index() {
    const form = useRef(null);
    const contactWrapper = useRef(null);
    const [isSendingMsg, setIsSendingMsg] = useState(false);
    const [isMsgSent, setIsMsgSent] = useState(false);
    const [isMsgNotSent, setIsMsgNotSent] = useState(false);
    
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(contactWrapper.current, {
            opacity: 0,
            y: "5vh",
        }, {
            opacity: 1,
            y: 0,
            duration: .7,
            ease: "power1.out",
            scrollTrigger: {
                trigger: contactWrapper.current,
                start: "top 80%",
                end: "+=100",
            },
        })
    }, []);

    
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSendingMsg(true)
    
        emailjs.sendForm('service_id', 'template_id', form.current, 'YOUR_PUBLIC_KEY')
          .then(() => {
            (e.target).reset();
            setIsSendingMsg(false);
            setIsMsgSent(true);
            setTimeout(() => {
                setIsMsgSent(false);
            }, 3000);
          }, (error) => {
              setIsMsgNotSent(true);
              console.log(error.text);
              setTimeout(() => {
                setIsMsgNotSent(false);
            }, 3000);
          });
        
          setIsMsgSent(false);
    };

    return (
        <div ref={contactWrapper} className={styles["contact-wrapper"]}>
            <div className={styles["contact-info"]}>
                <div className={styles["contact-item"]}>
                    <p>visit us</p>
                    <p>haya hulet, woreda 08, alemnesh plaza<br/> addis abeba, ethiopia</p>
                </div>
                <div className={styles["contact-item"]}>
                    <p>call us</p>
                    <p>Mon-Fri from 10am to 6pm <br/>+251 118 71 26 63/64/65</p>
                </div>
                <div className={styles["contact-item"]}>
                    <p>chat to us</p>
                    <p>info@asaitaproperties.com</p>
                </div>
                <div className={styles["contact-item"]}>
                    <p>social media</p>
                    <div className={styles["socials-wrapper"]}>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaXTwitter /></a>
                    </div>
                </div>
            </div>
            <form ref={form} className={styles["contact-form"]} onSubmit={sendEmail}>
                <div className={styles["user-info"]}>
                    <div className={styles["form-group"]}>
                        <label htmlFor="user_name">name</label>
                        <input id="user_name" type="text" name="user_name" required />
                    </div>
                    <div className={styles["form-group"]}>
                        <label htmlFor="user_email">email</label>
                        <input id="user_email" type="text" name="user_email" required />
                    </div>
                </div>
                <div className={styles["form-group"]}>
                        <label htmlFor="subject">subject</label>
                        <input id="subject" type="text" name="subject" required />
                </div>
                <div className={styles["form-group"]}>
                        <label htmlFor="user_message">message</label>
                        <textarea id="user_message" name="user_message" rows={1} cols={45} required ></textarea>
                </div>
                <button type="submit">
                    <LuDot />
                    <span>send message</span>
                    <BsArrowRightShort />
                </button>
            </form>
            {(isSendingMsg || isMsgSent || isMsgNotSent) && 
            <div className={styles.snackbar}>
                <div>
                    {isSendingMsg && "Sending message..."}
                    {isMsgSent && "Message sent!"}
                    {isMsgNotSent && "Message not sent!"} 
                </div>
            </div>}
        </div>
    )
}