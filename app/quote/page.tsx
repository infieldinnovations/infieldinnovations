'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';
import styles from './Quote.module.scss';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  location: z.string().min(5, 'Location must be at least 5 characters'),
  projectDescription: z.string().min(20, 'Project description must be at least 20 characters'),
  budget: z.string().optional(),
  timeline: z.string().min(1, 'Please select a timeline'),
  contactPreference: z.string().min(1, 'Please select a contact preference'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

const QuotePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Quote request submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  if (isSubmitted) {
    return (
      <div className={`${styles.quotePage} pt-[120px] md:pt-[140px]`}>
        <div className={styles.container}>
          <motion.div
            className={styles.successMessage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.successIcon}>✓</div>
            <h2>Quote Request Submitted Successfully!</h2>
            <p>Thank you for choosing AquaPlumb Innovations. Our team will review your request and contact you within 24 hours.</p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.quotePage} pt-[120px] md:pt-[140px]`}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Get Your Free Quote</h1>
          <p>Tell us about your project and we'll provide you with a detailed estimate</p>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.formSection}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  className={errors.name ? styles.error : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className={styles.errorMessage}>{errors.name.message}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={errors.email ? styles.error : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    className={errors.phone ? styles.error : ''}
                    placeholder="+254 700 000 000"
                  />
                  {errors.phone && <span className={styles.errorMessage}>{errors.phone.message}</span>}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="service">Service Required *</label>
                  <select
                    id="service"
                    {...register('service')}
                    className={errors.service ? styles.error : ''}
                  >
                    <option value="">Select a service</option>
                    <option value="solar">Solar Installation</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="borehole">Borehole Drilling</option>
                    <option value="irrigation">Irrigation Systems</option>
                  </select>
                  {errors.service && <span className={styles.errorMessage}>{errors.service.message}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location">Project Location *</label>
                  <input
                    id="location"
                    type="text"
                    {...register('location')}
                    className={errors.location ? styles.error : ''}
                    placeholder="City, County"
                  />
                  {errors.location && <span className={styles.errorMessage}>{errors.location.message}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectDescription">Project Description *</label>
                <textarea
                  id="projectDescription"
                  rows={5}
                  {...register('projectDescription')}
                  className={errors.projectDescription ? styles.error : ''}
                  placeholder="Please provide details about your project requirements, size, specifications, etc."
                />
                {errors.projectDescription && <span className={styles.errorMessage}>{errors.projectDescription.message}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="budget">Budget Range (Optional)</label>
                  <select id="budget" {...register('budget')}>
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under KES 50,000</option>
                    <option value="50k-100k">KES 50,000 - 100,000</option>
                    <option value="100k-250k">KES 100,000 - 250,000</option>
                    <option value="250k-500k">KES 250,000 - 500,000</option>
                    <option value="500k-1m">KES 500,000 - 1,000,000</option>
                    <option value="over-1m">Over KES 1,000,000</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="timeline">Project Timeline *</label>
                  <select
                    id="timeline"
                    {...register('timeline')}
                    className={errors.timeline ? styles.error : ''}
                  >
                    <option value="">Select timeline</option>
                    <option value="urgent">ASAP (Urgent)</option>
                    <option value="1-2weeks">1-2 weeks</option>
                    <option value="1month">Within 1 month</option>
                    <option value="2-3months">2-3 months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.timeline && <span className={styles.errorMessage}>{errors.timeline.message}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contactPreference">Preferred Contact Method *</label>
                <select
                  id="contactPreference"
                  {...register('contactPreference')}
                  className={errors.contactPreference ? styles.error : ''}
                >
                  <option value="">Select contact preference</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="both">Phone & Email</option>
                </select>
                {errors.contactPreference && <span className={styles.errorMessage}>{errors.contactPreference.message}</span>}
              </div>

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className={styles.spinner} />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Quote Request
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

          <motion.div
            className={styles.infoSection}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className={styles.infoCard}>
              <h3>Why Choose AquaPlumb Innovations?</h3>
              <ul>
                <li>✓ Over 10 years of experience</li>
                <li>✓ Licensed and certified professionals</li>
                <li>✓ Free site visits and consultations</li>
                <li>✓ Competitive pricing with no hidden costs</li>
                <li>✓ Quality guarantee on all work</li>
                <li>✓ 24/7 emergency support</li>
              </ul>
            </div>

            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <div className={styles.contactItem}>
                <Phone size={20} />
                <div>
                  <strong>Phone</strong>
                  <p>+254 700 000 000</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Mail size={20} />
                <div>
                  <strong>Email</strong>
                  <p>info@aquaplumbinnovations.com</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={20} />
                <div>
                  <strong>Location</strong>
                  <p>Nairobi, Kenya</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <Clock size={20} />
                <div>
                  <strong>Business Hours</strong>
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default QuotePage;