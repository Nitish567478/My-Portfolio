import React, { useState } from "react";
import { FiSend, FiMail, FiMapPin, FiClock, FiCheckCircle, FiXCircle, FiCopy, FiCheck, FiLinkedin, FiGithub } from "react-icons/fi";
import emailjs from "@emailjs/browser";

import {
  ContactSection,
  SectionHeader,
  SectionBadge,
  SectionTitle,
  SectionSubtitle,
  ContactLayoutGrid,
  InfoCardsCol,
  ContactCard,
  CardIcon,
  CardBody,
  CopyButton,
  SocialLinksRow,
  SocialBtn,
  FormCardCol,
  FormCard,
  FormRow,
  FormInput,
  FormTextarea,
  SubmitButton,
  StatusAlert
} from "./StyleComponents";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMsg, setStatusMsg] = useState("");

  const emailAddress = "kumarnitishgrd147@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus(null);
    setStatusMsg("");

    try {
      // 1. Send notification to Nitish
      const adminRes = await emailjs.send(
        "service_xzuz89a",
        "template_bzk3mv9",
        {
          to_name: "Nitish Kumar Yadav",
          to_email: "kumarnitsh147grd@gmail.com",
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject || "Portfolio Inquiry",
          message: formData.message,
        },
        "_rYUni-xtUrX7x4wk"
      );

      // 2. Auto-responder to sender
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

      if (adminRes.status === 200 || autoRes.status === 200) {
        setStatus("success");
        setStatusMsg("Message sent successfully! I'll get back to you within 24 hours.");
        setFormData({ from_name: "", from_email: "", subject: "", message: "" });
        setTimeout(() => setStatus(null), 7000);
      } else {
        throw new Error("Email sending encountered an error");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("error");
      setStatusMsg("Failed to deliver message. Please reach out directly at " + emailAddress);
      setTimeout(() => setStatus(null), 8000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <ContactSection id="contact">
      <SectionHeader>
        <SectionBadge>
          <FiMail />
          <span>Get in Touch</span>
        </SectionBadge>
        <SectionTitle>Let's Build Something Exceptional</SectionTitle>
        <SectionSubtitle>
          Have a project idea, a job opportunity, or simply want to connect? My inbox is always open.
        </SectionSubtitle>
      </SectionHeader>

      <ContactLayoutGrid>
        {/* Left Column: Direct Info & Quick Copy */}
        <InfoCardsCol>
          <ContactCard>
            <CardIcon>
              <FiMail />
            </CardIcon>
            <CardBody>
              <h4>Email Address</h4>
              <p>{emailAddress}</p>
            </CardBody>
            <CopyButton onClick={handleCopyEmail} aria-label="Copy email">
              {copied ? <FiCheck color="#22c55e" /> : <FiCopy />}
              <span>{copied ? "Copied!" : "Copy"}</span>
            </CopyButton>
          </ContactCard>

          <ContactCard>
            <CardIcon>
              <FiMapPin />
            </CardIcon>
            <CardBody>
              <h4>Location</h4>
              <p>Giridih, Jharkhand, India</p>
            </CardBody>
          </ContactCard>

          <ContactCard>
            <CardIcon>
              <FiClock />
            </CardIcon>
            <CardBody>
              <h4>Response Time</h4>
              <p>Typically under 24 hours</p>
            </CardBody>
          </ContactCard>

          {/* Social Profiles */}
          <SocialLinksRow>
            <SocialBtn
              href="https://www.linkedin.com/in/nitishkumaryadav111"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </SocialBtn>

            <SocialBtn
              href="https://github.com/Nitish567478"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
              <span>GitHub</span>
            </SocialBtn>
          </SocialLinksRow>
        </InfoCardsCol>

        {/* Right Column: Contact Form */}
        <FormCardCol>
          <FormCard onSubmit={handleSubmit}>
            {status && (
              <StatusAlert $status={status}>
                {status === "success" ? <FiCheckCircle size={20} /> : <FiXCircle size={20} />}
                <span>{statusMsg}</span>
              </StatusAlert>
            )}

            <FormRow>
              <FormInput
                type="text"
                name="from_name"
                placeholder="Your Full Name *"
                value={formData.from_name}
                onChange={handleChange}
                required
              />
              <FormInput
                type="email"
                name="from_email"
                placeholder="Your Email Address *"
                value={formData.from_email}
                onChange={handleChange}
                required
              />
            </FormRow>

            <FormInput
              type="text"
              name="subject"
              placeholder="Subject / Project Scope"
              value={formData.subject}
              onChange={handleChange}
            />

            <FormTextarea
              name="message"
              rows={5}
              placeholder="Your Message, Project Requirements, or Questions... *"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <SubmitButton type="submit" disabled={isSending}>
              {isSending ? (
                <span>Sending Message...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend size={18} />
                </>
              )}
            </SubmitButton>
          </FormCard>
        </FormCardCol>
      </ContactLayoutGrid>
    </ContactSection>
  );
};

export default Contact;
