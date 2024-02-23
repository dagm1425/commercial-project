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
            <h1>connect with us</h1>
            <p>Connect with us to know more about our properties.</p>
            <form className="contactForm" onSubmit={sendEmail}>
                <input type="text" placeholder="Name" name="user_name" required />
                <input type="text" placeholder="Email" name="user_email" required />
                <input type="text" placeholder="Subject" name="subject" required />
                <textarea placeholder="Message" name="user_message" rows={15} cols={87} required ></textarea>
                <input type="submit" value="Submit" />
            </form>
            {(isSendingMsg || isMsgSent || isMsgNotSent) && 
            <div className="snackbar">
                <div className="text-slate-700 text-md font-semibold uppercase">
                    {isSendingMsg && "Sending message..."}
                    {isMsgSent && "Message sent!"}
                    {isMsgNotSent && "Message not sent!"} 
                </div>
            </div>}
        </div>
    )
}