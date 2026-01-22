'use client';

import { motion } from 'framer-motion';
import { Sun, Droplets, Zap, Sprout, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ServicesOverview.module.scss';

const ServicesOverview = () => {
  const services = [
    {
      id: 'solar',
      title: 'Solar Solutions',
      description: 'Complete solar installation services from residential to commercial systems, including design, installation, and maintenance.',
      icon: <Sun size={48} />,
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'System Design & Sizing',
        'Residential & Commercial Installation',
        'Solar Water Heating',
        'Battery Storage Systems',
        'Maintenance & Monitoring'
      ],
      color: '#fbbf24'
    },
    {
      id: 'plumbing',
      title: 'Plumbing Services',
      description: 'Professional plumbing solutions for all your water and drainage needs, from installations to emergency repairs.',
      icon: <Droplets size={48} />,
      image: 'https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Fixture Installation & Repair',
        'Pipe Installation & Repiping',
        'Water Supply Systems',
        'Drainage & Sewer Systems',
        'Emergency Plumbing Services'
      ],
      color: '#1e40af'
    },
    {
      id: 'borehole',
      title: 'Borehole Drilling',
      description: 'Professional borehole drilling, development, and maintenance services to ensure reliable water supply.',
      icon: <Zap size={48} />,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Hydrogeological Surveying',
        'Drilling & Casing Installation',
        'Pump Installation & Repair',
        'Water Quality Testing',
        'Borehole Maintenance'
      ],
      color: '#0891b2'
    },
    {
      id: 'irrigation',
      title: 'Irrigation Systems',
      description: 'Smart irrigation design and installation for efficient water management in agriculture and landscaping.',
      icon: <Sprout size={48} />,
      image: 'https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'System Design & Planning',
        'Pipe Network Installation',
        'Pressure Control Systems',
        'Filtration & Water Treatment',
        'Maintenance & Optimization'
      ],
      color: '#10b981'
    }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Expert Services</h2>
          <p>Comprehensive water and energy solutions tailored to your needs</p>
        </motion.div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={styles.serviceImage}
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

              <div className={styles.cardContent}>
                <h3>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>

                <ul className={styles.featureList}>
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <CheckCircle size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={`/services/${service.id}`}
                  className={styles.serviceButton}
                  style={{ backgroundColor: service.color }}
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Need a Custom Solution?</h3>
          <p>Our experts are ready to design the perfect system for your specific needs</p>
          <Link href="/quote" className={styles.ctaButton}>
            Get Your Free Consultation
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;