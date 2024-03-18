import { useRef, useState } from "react";
import "./styles.scss";
import emailjs from "@emailjs/browser";

export default function Index() {
    const form = useRef(null);
    const [isSendingMsg, setIsSendingMsg] = useState(false);
    const [isMsgSent, setIsMsgSent] = useState(false);
    const [isMsgNotSent, setIsMsgNotSent] = useState(false);
    
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
        <div className="contactWrapper">
            <div className="contactHeader">
                <h1>connect with us</h1>
                <p>Connect with us to know more about our properties.</p>
            </div>
            <div className="contactMain">
                <div className="contactInfo">
                    <p><span>address: </span>haya hulet, woreda 08, alemnesh plaza<br /> addis abeba, ethiopia.</p>
                    <p><span>telephone: </span>+251 416 05 05/06/07</p>
                    <p><span>email: </span><a href="#">info@asaitaproperties.com</a></p>
                </div>
                <form className="contactForm" onSubmit={sendEmail}>
                    <div className="userInfo">
                        <input type="text" placeholder="Name" name="user_name" required />
                        <input type="text" placeholder="Email" name="user_email" required />
                    </div>
                    <input type="text" placeholder="Subject" name="subject" required />
                    <textarea placeholder="Message" name="user_message" rows={7} cols={45} required ></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            {(isSendingMsg || isMsgSent || isMsgNotSent) && 
            <div className="snackbar">
                <div>
                    {isSendingMsg && "Sending message..."}
                    {isMsgSent && "Message sent!"}
                    {isMsgNotSent && "Message not sent!"} 
                </div>
            </div>}
        </div>
    )
}