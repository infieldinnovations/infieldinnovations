"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import styles from "./page.module.scss";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  service: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Contact form submitted:", data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+254 700 000 000", "+254 711 000 000"],
      action: "tel:+254700000000",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: [
        "info@infieldinnovations.com",
        "support@infieldinnovations.com",
      ],
      action: "mailto:info@infieldinnovations.com",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: ["Nairobi, Kenya", "Serving all of Kenya"],
      action: null,
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: [
        "Mon - Fri: 8:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 4:00 PM",
        "Emergency: 24/7",
      ],
      action: null,
    },
  ];

  const services = [
    "Solar Installation",
    "Plumbing Services",
    "Borehole Drilling",
    "Irrigation Systems",
    "Water Treatment",
    "Maintenance Services",
  ];

  if (isSubmitted) {
    return (
      <div className={`${styles.contactPage} pt-[120px] md:pt-[140px]`}>
        <div className={styles.container}>
          <motion.div
            className={styles.successMessage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.successIcon}>✓</div>
            <h2>Message Sent Successfully!</h2>
            <p>
              Thank you for contacting Infield Innovations. We'll get back to
              you within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.contactPage} pt-[120px] md:pt-[140px]`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>
              Get in touch with our experts for all your water and energy
              solution needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={styles.contactInfoSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className={styles.contactCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={styles.cardIcon}>{info.icon}</div>
                <h3>{info.title}</h3>
                <div className={styles.cardDetails}>
                  {info.details.map((detail, idx) => (
                    <p key={idx}>
                      {info.action && idx === 0 ? (
                        <a href={info.action}>{detail}</a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <div className={styles.formContent}>
            <motion.div
              className={styles.formHeader}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <MessageCircle size={40} />
              <h2>Send Us a Message</h2>
              <p>
                Fill out the form below and we'll get back to you as soon as
                possible
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.contactForm}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className={errors.name ? styles.error : ""}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className={errors.email ? styles.error : ""}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className={errors.phone ? styles.error : ""}
                    placeholder="+254 700 000 000"
                  />
                  {errors.phone && (
                    <span className={styles.errorMessage}>
                      {errors.phone.message}
                    </span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Interest (Optional)</label>
                  <select id="service" {...register("service")}>
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option
                        key={service}
                        value={service.toLowerCase().replace(" ", "-")}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject *</label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  className={errors.subject ? styles.error : ""}
                  placeholder="What is this regarding?"
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  rows={6}
                  {...register("message")}
                  className={errors.message ? styles.error : ""}
                  placeholder="Please provide details about your inquiry..."
                />
                {errors.message && (
                  <span className={styles.errorMessage}>
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.mapContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Find Us</h2>
            <p>
              We serve clients across Kenya with our headquarters in Nairobi
            </p>
            <div className={styles.mapPlaceholder}>
              <MapPin size={60} />
              <h3>Service Area: All of Kenya</h3>
              <p>Headquarters: Nairobi</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
