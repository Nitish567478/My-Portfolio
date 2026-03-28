import React, { useState } from "react";
import { FiSend, FiMail, FiMapPin, FiClock, FiCheckCircle, FiXCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";

import {
  ContactSection,
  ContactContainer,
  InfoSide,
  FormSide,
  ContactHeading,
  ContactText,
  ContactEmail,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton,
  StatusBadge,
  InfoItem,
  MessageContainer,
  MessageText,
  SuccessIcon,
  ErrorIcon
} from "./StyleComponents";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);
  const [messageText, setMessageText] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const hideMessage = () => {
    setMessageStatus(null);
    setMessageText("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessageStatus(null);
    setMessageText("");

    try {
      const adminRes = await emailjs.send(
        "service_xzuz89a",
        "template_bzk3mv9",
        {
          to_name: "Nitish Kumar Yadav",
          to_email: "kumarnitsh147grd@gmail.com",
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
        },
        "_rYUni-xtUrX7x4wk"
      );

      const autoRes = await emailjs.send(
        "service_xzuz89a",
        "template_678eors",
        {
          to_name: formData.from_name,
          to_email: formData.from_email,
          message: formData.message,
          from_name: "Nitish Kumar Yadav",
          from_email: "kumarnitsh147grd@gmail.com",
        },
        "_rYUni-xtUrX7x4wk"
      );

      if (adminRes.status === 200 && autoRes.status === 200) {
        setMessageStatus("success");
        setMessageText("Message sent successfully!");
        setFormData({ from_name: "", from_email: "", message: "" });
        setTimeout(hideMessage, 5000);
      } else {
        throw new Error("Email failed");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setMessageStatus("error");
      setMessageText("Failed to send message. Please try again.");
      setTimeout(hideMessage, 7000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <ContactSection id="contact">

      {/* 🔹 Top Center Content */}
      <StatusBadge>
        <span className="dot"></span> Available for new projects
      </StatusBadge>

      <ContactHeading>Contact</ContactHeading>

      {/* <ContactHeading>Let's build something great.</ContactHeading> */}

      <ContactText>
        Have a project, opportunity, or collaboration in mind? Let’s connect.
      </ContactText>
      <ContactContainer>

        {/* LEFT SIDE */}
        <InfoSide>

          <InfoItem>
            <div className="icon"><FiMapPin /></div>
            <div>
              <h4>Location</h4>
              <p>Giridih, Jharkhand, India</p>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon"><FiMail /></div>
            <div>
              <h4>Email</h4>
              <ContactEmail href="mailto:kumarnitishgrd147@gmail.com">
                kumarnitishgrd147@gmail.com
              </ContactEmail>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon"><FiClock /></div>
            <div>
              <h4>Response Time</h4>
              <p>Within 24 hours</p>
            </div>
          </InfoItem>

        </InfoSide>

        {/* RIGHT SIDE */}
        <FormSide>
          {messageStatus && (
              <MessageContainer status={messageStatus} onClick={hideMessage}>
                {messageStatus === "success" ? (
                  <>
                    <SuccessIcon><FiCheckCircle /></SuccessIcon>
                    <MessageText>{messageText}</MessageText>
                  </>
                ) : (
                  <>
                    <ErrorIcon><FiXCircle /></ErrorIcon>
                    <MessageText>{messageText}</MessageText>
                  </>
                )}
              </MessageContainer>
            )}
          <ContactForm onSubmit={handleSubmit}>
            <ContactInput
              type="text"
              name="from_name"
              placeholder="Your Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <ContactInput
              type="email"
              name="from_email"
              placeholder="Your Email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />

            <ContactTextarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <ContactButton type="submit" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"} <FiSend />
            </ContactButton>

            {/* {messageStatus && (
              <MessageContainer status={messageStatus} onClick={hideMessage}>
                {messageStatus === "success" ? (
                  <>
                    <SuccessIcon><FiCheckCircle /></SuccessIcon>
                    <MessageText>{messageText}</MessageText>
                  </>
                ) : (
                  <>
                    <ErrorIcon><FiXCircle /></ErrorIcon>
                    <MessageText>{messageText}</MessageText>
                  </>
                )}
              </MessageContainer>
            )} */}
          </ContactForm>

        </FormSide>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
