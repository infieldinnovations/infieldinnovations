"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Droplets,
  Zap,
  Sprout,
  ArrowRight,
  CircleCheck as CheckCircle,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

const ServicesPage = () => {
  const services = [
    {
      id: "solar",
      title: "Solar Solutions",
      subtitle: "Harness the Power of the Sun",
      description:
        "Complete solar installation services from residential to commercial systems, including design, installation, and maintenance with cutting-edge technology.",
      icon: <Sun size={60} />,
      image:
        "https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "System Design & Sizing",
        "Residential & Commercial Installation",
        "Solar Water Heating Systems",
        "Battery Storage Solutions",
        "Grid-Tie & Off-Grid Systems",
        "Maintenance & Monitoring",
        "Energy Efficiency Audits",
        "Government Incentive Assistance",
      ],
      benefits: [
        "Reduce electricity bills by up to 90%",
        "Increase property value",
        "Environmental sustainability",
        "25-year system warranty",
      ],
      color: "#fbbf24",
    },
    {
      id: "plumbing",
      title: "Plumbing Services",
      subtitle: "Professional Water Solutions",
      description:
        "Comprehensive plumbing solutions for all your water and drainage needs, from installations to emergency repairs with certified professionals.",
      icon: <Droplets size={60} />,
      image:
        "https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Fixture Installation & Repair",
        "Pipe Installation & Repiping",
        "Water Supply Systems",
        "Drainage & Sewer Systems",
        "Water Heater Services",
        "Emergency Plumbing Services",
        "Leak Detection & Repair",
        "Bathroom & Kitchen Renovations",
      ],
      benefits: [
        "24/7 emergency services",
        "Licensed and insured technicians",
        "Quality parts and materials",
        "Transparent pricing",
      ],
      color: "#1e40af",
    },
    {
      id: "borehole",
      title: "Borehole Drilling",
      subtitle: "Access to Clean Water",
      description:
        "Professional borehole drilling, development, and maintenance services to ensure reliable water supply with modern equipment and expertise.",
      icon: <Zap size={60} />,
      image:
        "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "Hydrogeological Surveying",
        "Drilling & Casing Installation",
        "Pump Installation & Repair",
        "Water Quality Testing",
        "Borehole Development",
        "Solar Pump Systems",
        "Storage Tank Installation",
        "Regular Maintenance Services",
      ],
      benefits: [
        "Reliable water supply",
        "Cost-effective long-term solution",
        "Professional water testing",
        "Modern drilling equipment",
      ],
      color: "#0891b2",
    },
    {
      id: "irrigation",
      title: "Irrigation Systems",
      subtitle: "Smart Water Management",
      description:
        "Efficient irrigation design and installation for agricultural and landscaping needs, maximizing water efficiency and crop yield.",
      icon: <Sprout size={60} />,
      image:
        "https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: [
        "System Design & Planning",
        "Drip Irrigation Systems",
        "Sprinkler System Installation",
        "Pipe Network Installation",
        "Pressure Control Systems",
        "Filtration & Water Treatment",
        "Smart Control Systems",
        "Maintenance & Optimization",
      ],
      benefits: [
        "Water conservation up to 50%",
        "Increased crop yields",
        "Automated watering systems",
        "Reduced labor costs",
      ],
      color: "#10b981",
    },
  ];

  return (
    <div className={`${styles.servicesPage} pt-[120px] md:pt-[140px]`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Our Expert Services</h1>
            <p>
              Comprehensive water and energy solutions tailored to your specific
              needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`${styles.serviceCard} ${
                index % 2 === 1 ? styles.reverse : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={styles.serviceImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className={styles.image}
                />
                <div className={styles.imageOverlay}>
                  <div
                    className={styles.iconWrapper}
                    style={{ backgroundColor: service.color }}
                  >
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <span
                    className={styles.serviceSubtitle}
                    style={{ color: service.color }}
                  >
                    {service.subtitle}
                  </span>
                  <h2>{service.title}</h2>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </div>

                <div className={styles.serviceDetails}>
                  <div className={styles.featuresSection}>
                    <h3>What We Offer</h3>
                    <ul className={styles.featuresList}>
                      {service.features.map((feature, idx) => (
                        <li key={idx}>
                          <CheckCircle size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.benefitsSection}>
                    <h3>Key Benefits</h3>
                    <ul className={styles.benefitsList}>
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx}>
                          <ArrowRight size={16} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.serviceActions}>
                    <Link
                      href="/quote"
                      className={styles.primaryButton}
                      style={{ backgroundColor: service.color }}
                    >
                      Get Quote
                      <ArrowRight size={20} />
                    </Link>
                    <Link href="/contact" className={styles.secondaryButton}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaContent}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Contact us today for a free consultation and personalized quote
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/quote" className={styles.ctaButton}>
                Request Free Quote
                <ArrowRight size={20} />
              </Link>
              <div className={styles.contactOptions}>
                <a href="tel:+254700000000" className={styles.contactButton}>
                  <Phone size={18} />
                  <span>Call Now</span>
                </a>
                <a
                  href="mailto:info@infieldinnovations.com"
                  className={styles.contactButton}
                >
                  <Mail size={18} />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
