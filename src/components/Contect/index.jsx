import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import {
  ContactSection,
  ContactHeading,
  ContactText,
  ContactEmail,
  ContactForm,
  ContactInput,
  ContactTextarea,
  ContactButton
} from "./StyleComponents";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const adminTemplateParams = {
      to_name: "Nitish Kumar Yadav",
      to_email: "kumarnitsh147grd@gmail.com",
      from_name: formData.from_name,
      from_email: formData.from_email,
      message: formData.message,
    };

    const autoReplyTemplateParams = {
      user_name: formData.from_name,
      user_email: formData.from_email,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_xzuz89a",
        "template_bzk3mv9",
        adminTemplateParams,
        "_rYUni-xtUrX7x4wk"
      );

      await emailjs.send(
        "service_xzuz89a",
        "template_678eors",
        autoReplyTemplateParams,
        "_rYUni-xtUrX7x4wk"
      );

      alert("Message Sent Successfully!");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.log("EmailJS Error:", error);
      alert("Message Failed! Check console.");
    }
  };

  return (
    <ContactSection id="contact">
      <ContactHeading>Contact</ContactHeading>

      <ContactText>Giridih, Jharkhand, India</ContactText>

      {/* <ContactText>
        Email:{" "}
        <ContactEmail href="mailto:kumarnitishgrd147@gmail.com">
          kumarnitishgrd147@gmail.com
        </ContactEmail>
      </ContactText> */}

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

        <ContactButton type="submit">
          Send Message <FiSend />
        </ContactButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;