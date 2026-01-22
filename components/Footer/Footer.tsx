'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Solar Installation',
    'Plumbing Services',
    'Borehole Drilling',
    'Irrigation Systems',
    'Water Treatment',
    'Solar Water Heating'
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/quote', label: 'Get Quote' }
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info */}
          <div className={styles.column}>
            <div className={styles.logo}>
              <Image
                src="https://hdwifbsurncntfwwmadt.supabase.co/storage/v1/object/public/website_general/logo.png"
                alt="AquaPlumb Innovations Limited"
                width={200}
                height={60}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.description}>
              Leading provider of innovative water and energy solutions. We specialize in solar installation, 
              plumbing services, borehole drilling, and irrigation systems across Kenya.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Our Services</h3>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service}>
                  <span className={styles.serviceItem}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Info</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </div>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <a href="tel:+254700000000">+254 700 000 000</a>
              </div>
              <div className={styles.contactItem}>
                <Mail size={16} />
                <a href="mailto:info@aquaplumbinnovations.com">info@aquaplumbinnovations.com</a>
              </div>
              <div className={styles.contactItem}>
                <Clock size={16} />
                <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p>&copy; {currentYear} AquaPlumb Innovations Limited. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
              <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;