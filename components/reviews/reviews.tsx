'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import styles from "./reviews.module.scss";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviews = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      location: "Karen, Nairobi",
      service: "Solar Installation",
      rating: 5,
      review:
        "Infield Innovations transformed our home with their solar installation. The team was professional, efficient, and the system has exceeded our expectations. Our electricity bills have dropped by 90%!",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "December 2024",
    },
    {
      id: 2,
      name: "James Mwangi",
      location: "Westlands, Nairobi",
      service: "Plumbing Services",
      rating: 5,
      review:
        "Excellent plumbing services! They fixed our commercial building's plumbing issues quickly and professionally. The team was courteous and cleaned up after themselves. Highly recommended!",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "November 2024",
    },
    {
      id: 3,
      name: "Mary Njeri",
      location: "Nakuru County",
      service: "Borehole Drilling",
      rating: 5,
      review:
        "The borehole drilling service was outstanding. They found water at 120 meters and installed a solar pump system. Our farm now has reliable water supply year-round. Great investment!",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "October 2024",
    },
    {
      id: 4,
      name: "Peter Kamau",
      location: "Kiambu County",
      service: "Irrigation System",
      rating: 5,
      review:
        "The smart irrigation system they installed has revolutionized our greenhouse farming. Water usage reduced by 50% while crop yields increased by 30%. Exceptional service and support!",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "September 2024",
    },
    {
      id: 5,
      name: "Grace Akinyi",
      location: "Runda, Nairobi",
      service: "Solar Water Heating",
      rating: 5,
      review:
        "Amazing solar water heating installation! Hot water is always available and our energy costs have dropped significantly. The team was professional and completed the work on time.",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "August 2024",
    },
    {
      id: 6,
      name: "David Ochieng",
      location: "Thika, Kiambu",
      service: "Industrial Plumbing",
      rating: 5,
      review:
        "Professional industrial plumbing installation for our manufacturing plant. They handled complex requirements with expertise and delivered on time. Excellent quality and service!",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      date: "July 2024",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextReview();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Clients Say</h2>
          <p>Real feedback from satisfied customers across Kenya</p>
        </motion.div>

        <div
          className={styles.reviewsContainer}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className={styles.navButton}
            onClick={prevReview}
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.reviewWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview}
                className={styles.reviewCard}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.quoteIcon}>
                  <Quote size={40} />
                </div>

                <div className={styles.rating}>
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} size={20} className={styles.starFilled} />
                  ))}
                </div>

                <p className={styles.reviewText}>
                  "{reviews[currentReview].review}"
                </p>

                <div className={styles.reviewerInfo}>
                  <div className={styles.avatar}>
                    <Image
                      src={reviews[currentReview].avatar}
                      alt={reviews[currentReview].name}
                      width={60}
                      height={60}
                      className={styles.avatarImage}
                    />
                  </div>
                  <div className={styles.reviewerDetails}>
                    <h4>{reviews[currentReview].name}</h4>
                    <p className={styles.location}>
                      {reviews[currentReview].location}
                    </p>
                    <p className={styles.service}>
                      {reviews[currentReview].service}
                    </p>
                    <p className={styles.date}>{reviews[currentReview].date}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className={styles.navButton}
            onClick={nextReview}
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.indicators}>
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentReview ? styles.active : ""
              }`}
              onClick={() => goToReview(index)}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>500+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
