"use client";

import { motion } from "framer-motion";
import {
  Award,
  Users,
  Target,
  Heart,
  CircleCheck as CheckCircle,
} from "lucide-react";
import Image from "next/image";
import styles from "./page.module.scss";

const AboutPage = () => {
  const values = [
    {
      icon: <Award size={40} />,
      title: "Excellence",
      description:
        "We strive for the highest quality in every project we undertake.",
    },
    {
      icon: <Users size={40} />,
      title: "Teamwork",
      description:
        "Our collaborative approach ensures the best outcomes for our clients.",
    },
    {
      icon: <Target size={40} />,
      title: "Innovation",
      description:
        "We embrace cutting-edge technology and sustainable solutions.",
    },
    {
      icon: <Heart size={40} />,
      title: "Integrity",
      description:
        "Honest, transparent, and ethical business practices guide everything we do.",
    },
  ];

  const milestones = [
    {
      year: "2014",
      event: "Company Founded",
      description:
        "Started with a vision to provide quality water and energy solutions",
    },
    {
      year: "2016",
      event: "First Major Project",
      description: "Completed our first large-scale solar installation",
    },
    {
      year: "2018",
      event: "100 Projects Milestone",
      description: "Reached 100 successful project completions",
    },
    {
      year: "2020",
      event: "Team Expansion",
      description: "Grew our team to 25+ certified professionals",
    },
    {
      year: "2022",
      event: "Innovation Award",
      description: "Recognized for excellence in sustainable energy solutions",
    },
    {
      year: "2024",
      event: "500+ Projects",
      description: "Celebrating over 500 successful installations",
    },
  ];

  return (
    <div className={`${styles.aboutPage} pt-[120px] md:pt-[140px]`}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1>About Infield Innovations</h1>
              <p className={styles.heroSubtitle}>
                Leading the way in sustainable water and energy solutions across
                Kenya
              </p>
              <p className={styles.heroDescription}>
                For over a decade, we've been transforming homes and businesses
                with innovative solar installations, reliable plumbing services,
                professional borehole drilling, and efficient irrigation
                systems.
              </p>
            </motion.div>
            <motion.div
              className={styles.heroImage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Image
                src="https://images.pexels.com/photos/8853502/pexels-photo-8853502.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our team at work"
                width={600}
                height={400}
                className={styles.image}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Our Mission</h2>
              <p>
                To provide innovative, reliable, and sustainable water and
                energy solutions that improve the quality of life for our
                clients while contributing to environmental conservation.
              </p>
            </motion.div>
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2>Our Vision</h2>
              <p>
                To be the leading provider of integrated water and energy
                solutions in East Africa, recognized for our expertise,
                innovation, and commitment to sustainability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Core Values</h2>
            <p>The principles that guide our work and relationships</p>
          </motion.div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <motion.div
                key={index}
                className={styles.valueCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Journey</h2>
            <p>Key milestones in our company's growth</p>
          </motion.div>
          <div className={styles.timeline}>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className={styles.timelineItem}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={styles.timelineContent}>
                  <div className={styles.timelineYear}>{milestone.year}</div>
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className={styles.timelineDot}>
                  <CheckCircle size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Why Choose Us</h2>
            <p>What sets us apart in the industry</p>
          </motion.div>
          <div className={styles.whyChooseGrid}>
            <motion.div
              className={styles.whyChooseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>Certified Professionals</h3>
              <p>
                Our team consists of licensed and certified technicians with
                extensive training.
              </p>
            </motion.div>
            <motion.div
              className={styles.whyChooseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>Quality Guarantee</h3>
              <p>
                We stand behind our work with comprehensive warranties and
                quality assurance.
              </p>
            </motion.div>
            <motion.div
              className={styles.whyChooseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>24/7 Support</h3>
              <p>
                Round-the-clock customer support and emergency services when you
                need us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
