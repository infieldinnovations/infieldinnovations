'use client';

import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, Wrench, ThumbsUp } from 'lucide-react';
import styles from './WhyChooseUs.module.scss';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Award size={48} />,
      title: 'Expert Experience',
      description: '10+ years of proven excellence in water and energy solutions across Kenya',
      color: '#fbbf24'
    },
    {
      icon: <Users size={48} />,
      title: 'Professional Team',
      description: 'Licensed and certified technicians with extensive training and experience',
      color: '#1e40af'
    },
    {
      icon: <Clock size={48} />,
      title: '24/7 Support',
      description: 'Round-the-clock emergency services and customer support when you need it',
      color: '#0891b2'
    },
    {
      icon: <Shield size={48} />,
      title: 'Quality Guarantee',
      description: 'Comprehensive warranty and guarantee on all our installations and services',
      color: '#10b981'
    },
    {
      icon: <Wrench size={48} />,
      title: 'Advanced Equipment',
      description: 'State-of-the-art tools and equipment for efficient and precise work',
      color: '#dc2626'
    },
    {
      icon: <ThumbsUp size={48} />,
      title: 'Customer Satisfaction',
      description: '500+ satisfied customers with excellent reviews and testimonials',
      color: '#7c3aed'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className={styles.whyChooseUsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose AquaPlumb Innovations?</h2>
          <p>We deliver exceptional results with unmatched expertise and dedication</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.featuresGrid}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={styles.featureCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className={styles.iconWrapper}
                  style={{ backgroundColor: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className={styles.statsSection}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={styles.statItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;